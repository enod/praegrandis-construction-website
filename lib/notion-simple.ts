// Simplified Notion CMS Integration for Praegrandis Construction
import { Client } from '@notionhq/client'
import fs from 'node:fs'
import path from 'node:path'

export interface SimpleProject {
  id: string
  title: string
  location: string
  type: 'Residential' | 'Commercial' | 'Renovation' | 'Extension'
  story: string // Short 2-3 sentence story
  slug: string
  
  // Media
  heroImage: string
  galleryImages: string[]
  videoUrl?: string
  
  // Display
  featured: boolean
}

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!
let cachedAssetManifest: NotionAssetManifest | null | undefined

interface NotionAssetManifest {
  projects?: Record<string, {
    title?: string
    slug?: string
    properties?: Record<string, Array<{
      path: string
      width?: number
      height?: number
      bytes?: number
      originalBytes?: number
      sourceName?: string
    }>>
  }>
}

// Helper function to extract text from Notion rich text
function extractRichText(richText: any[]): string {
  return richText?.map((text: any) => text.plain_text).join('') || ''
}

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

function getAssetManifest(): NotionAssetManifest | null {
  if (cachedAssetManifest !== undefined) {
    return cachedAssetManifest
  }

  try {
    const manifestPath = path.join(process.cwd(), 'public', 'notion-assets', 'manifest.json')
    cachedAssetManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  } catch {
    cachedAssetManifest = null
  }

  return cachedAssetManifest ?? null
}

function getProjectSlugFromPage(page: any): string {
  const properties = page.properties || {}
  const explicitSlug = extractRichText(properties.Slug?.rich_text || [])
  const title = extractRichText(properties.Title?.title || [])

  return explicitSlug || generateSlug(title)
}

function getManifestProjectForPage(page: any) {
  const manifest = getAssetManifest()
  const projects = manifest?.projects || {}

  if (projects[page.id]) {
    return projects[page.id]
  }

  const slug = getProjectSlugFromPage(page)
  return Object.values(projects).find((project) => project.slug === slug)
}

function getLocalProjectAssetUrls(page: any, propertyName: string): string[] {
  return getManifestProjectForPage(page)?.properties?.[propertyName]?.map((asset) => asset.path).filter(Boolean) || []
}

// Helper function to extract file URLs from Notion files
function extractFileUrls(files: any[]): string[] {
  return files?.map((file: any) => {
    if (file.type === 'external') {
      return file.external.url
    } else if (file.type === 'file') {
      return file.file.url
    }
    return ''
  }).filter(Boolean) || []
}

function extractProjectFileUrls(page: any, propertyName: string): string[] {
  const localAssetUrls = getLocalProjectAssetUrls(page, propertyName)

  if (localAssetUrls.length > 0) {
    return localAssetUrls
  }

  return extractFileUrls(page.properties?.[propertyName]?.files || [])
}

// Transform Notion page data to SimpleProject interface
function transformNotionPage(page: any): SimpleProject {
  const properties = page.properties
  
  return {
    id: page.id,
    title: extractRichText(properties.Title?.title || []),
    location: extractRichText(properties.Location?.rich_text || []),
    type: properties.Type?.select?.name || 'Residential',
    story: extractRichText(properties.Story?.rich_text || properties.Description?.rich_text || []),
    
    // Media
    heroImage: extractProjectFileUrls(page, 'Hero Image')[0] || '',
    galleryImages: [
      ...extractProjectFileUrls(page, '1'),
      ...extractProjectFileUrls(page, '2'),
      ...extractProjectFileUrls(page, '3'),
      ...extractProjectFileUrls(page, '4'),
      ...extractProjectFileUrls(page, '5'),
      ...extractProjectFileUrls(page, '6'),
      // Fallback to old columns for backward compatibility
      ...extractProjectFileUrls(page, 'Gallery Images'),
      ...extractProjectFileUrls(page, 'Before Images'),
      ...extractProjectFileUrls(page, 'After Images'),
      ...extractProjectFileUrls(page, 'Process Images'),
    ].filter(Boolean),
    videoUrl: properties['Video URL']?.url || properties['Video']?.url || undefined,
    
    // Display
    featured: properties.Featured?.checkbox || false,
    
    // SEO - Use Notion slug if available, otherwise generate from title
    slug: extractRichText(properties.Slug?.rich_text || []) || 
          generateSlug(extractRichText(properties.Title?.title || [])),
  }
}

// Get all projects
export async function getProjects(): Promise<SimpleProject[]> {
  try {
    if (!NOTION_DATABASE_ID) {
      console.warn('Notion database ID not configured, using sample data')
      return getSampleProjects()
    }

    if (!process.env.NOTION_TOKEN) {
      console.warn('Notion token not configured, using sample data')
      return getSampleProjects()
    }

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    })

    return response.results.map(transformNotionPage)
  } catch (error) {
    console.error('Error fetching projects from Notion:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
    }
    console.warn('Falling back to sample data')
    return getSampleProjects()
  }
}

// Get project by slug
export async function getProjectBySlug(slug: string): Promise<SimpleProject | null> {
  try {
    if (!NOTION_DATABASE_ID) {
      const projects = getSampleProjects()
      return projects.find(project => project.slug === slug) || null
    }

    // First, try to find by explicit slug
    const slugResponse = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        }
      }
    })

    if (slugResponse.results.length > 0) {
      return transformNotionPage(slugResponse.results[0])
    }

    // If no explicit slug found, get all projects and find by generated slug
    const allProjects = await getProjects()
    return allProjects.find(project => project.slug === slug) || null

  } catch (error) {
    console.error('Error fetching project by slug from Notion:', error)
    const projects = getSampleProjects()
    return projects.find(project => project.slug === slug) || null
  }
}

// Get featured projects
export async function getFeaturedProjects(): Promise<SimpleProject[]> {
  try {
    const projects = await getProjects()
    return projects.filter(project => project.featured)
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return getSampleProjects().filter(project => project.featured)
  }
}

// Get projects by type
export async function getProjectsByType(type: string): Promise<SimpleProject[]> {
  try {
    const projects = await getProjects()
    return projects.filter(project => 
      type === 'all' || project.type.toLowerCase() === type.toLowerCase()
    )
  } catch (error) {
    console.error('Error fetching projects by type:', error)
    return getSampleProjects()
  }
}

// Sample data for development
function getSampleProjects(): SimpleProject[] {
  return [
    {
      id: '1',
      title: 'Bondi Beach House Transformation',
      location: 'Bondi Beach, NSW',
      type: 'Renovation',
      story: 'Complete transformation of a 1960s beach house into a modern sustainable family home. The project doubled the living space while preserving the coastal character and achieving heritage approval.',
      slug: 'bondi-beach-house-transformation',
      heroImage: '',
      galleryImages: [],
      videoUrl: undefined,
      featured: true,
    },
    {
      id: '2',
      title: 'Surry Hills Tech Hub',
      location: 'Surry Hills, NSW',
      type: 'Commercial',
      story: 'Modern office transformation for a growing tech startup. Delivered 2 weeks early and 25% under budget with zero disruption to daily operations.',
      slug: 'surry-hills-tech-hub',
      heroImage: '',
      galleryImages: [],
      featured: true,
    }
  ]
}

// Simplified Notion Database Schema
export const SIMPLE_NOTION_SCHEMA = {
  properties: {
    Title: { type: 'title' },
    Location: { type: 'rich_text' },
    Type: { 
      type: 'select',
      options: ['Residential', 'Commercial', 'Renovation', 'Extension']
    },
    Story: { type: 'rich_text' }, // 2-3 sentence project story
    'Hero Image': { type: 'files' },
    'Gallery Images': { type: 'files' },
    'Video URL': { type: 'url' },
    Featured: { type: 'checkbox' },
    Slug: { type: 'rich_text' } // Optional - auto-generated from title if empty
  }
}
