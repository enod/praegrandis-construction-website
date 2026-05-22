import dotenv from 'dotenv'
import { Client } from '@notionhq/client'
import sharp from 'sharp'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

dotenv.config({ path: '.env.local' })
dotenv.config()

const databaseId = process.env.NOTION_DATABASE_ID
const notionToken = process.env.NOTION_TOKEN

const outputDir = path.join(process.cwd(), 'public', 'notion-assets')
const publicPrefix = '/notion-assets'
const manifestPath = path.join(outputDir, 'manifest.json')
const preserveSnapshotMetadata = process.env.CI === 'true' || Boolean(process.env.VERCEL)

const imageProperties = [
  'Hero Image',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  'Gallery Images',
  'Before Images',
  'After Images',
  'Process Images',
]

const maxWidthByProperty = {
  'Hero Image': 2400,
}

const defaultMaxWidth = Number(process.env.NOTION_IMAGE_MAX_WIDTH || 1800)
const quality = Number(process.env.NOTION_IMAGE_QUALITY || 82)

if (!databaseId || !notionToken) {
  console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID. Add them to .env.local or GitHub Actions secrets.')
  process.exit(1)
}

const notion = new Client({ auth: notionToken })

function richTextToPlainText(richText = []) {
  return richText.map((text) => text.plain_text).join('')
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function safeSegment(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getFileUrl(file) {
  if (file?.type === 'external') {
    return file.external?.url
  }

  if (file?.type === 'file') {
    return file.file?.url
  }

  return undefined
}

function getFileName(file, fallback) {
  return file?.name || fallback
}

function getPageStatus(properties) {
  return properties.Status?.status?.name || ''
}

async function fetchAllPages() {
  const pages = []
  let cursor

  do {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      page_size: 100,
    })

    pages.push(...response.results)
    cursor = response.has_more ? response.next_cursor : undefined
  } while (cursor)

  return pages
}

async function readExistingManifest() {
  try {
    return JSON.parse(await readFile(manifestPath, 'utf8'))
  } catch {
    return undefined
  }
}

function findPreviousManifestProject(pageId, slug) {
  const projects = previousManifest?.projects || {}

  if (projects[pageId]) {
    return projects[pageId]
  }

  return Object.values(projects).find((project) => project.slug === slug)
}

async function downloadImage(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Download failed with ${response.status} ${response.statusText}`)
  }

  const contentType = response.headers.get('content-type') || ''
  if (!contentType.startsWith('image/')) {
    throw new Error(`Expected image content, received ${contentType || 'unknown content type'}`)
  }

  return Buffer.from(await response.arrayBuffer())
}

async function optimizeImage(inputBuffer, propertyName) {
  const maxWidth = maxWidthByProperty[propertyName] || defaultMaxWidth

  const outputBuffer = await sharp(inputBuffer, { limitInputPixels: false })
    .rotate()
    .resize({
      width: maxWidth,
      withoutEnlargement: true,
    })
    .webp({
      quality,
      effort: 5,
    })
    .toBuffer()

  const metadata = await sharp(outputBuffer).metadata()

  return {
    buffer: outputBuffer,
    width: metadata.width,
    height: metadata.height,
  }
}

async function syncPageAssets(page) {
  const pageId = page.id
  const properties = page.properties || {}
  const title = richTextToPlainText(properties.Title?.title || properties.Name?.title || [])
  const slug = richTextToPlainText(properties.Slug?.rich_text || []) || generateSlug(title)
  const pageDirName = pageId.replace(/-/g, '')
  const pageDir = path.join(outputDir, pageDirName)
  const previousPageManifest = findPreviousManifestProject(pageId, slug)
  const pageManifest = {
    ...previousPageManifest,
    title,
    slug,
    status: preserveSnapshotMetadata
      ? previousPageManifest?.status ?? getPageStatus(properties)
      : getPageStatus(properties),
    featured: preserveSnapshotMetadata
      ? previousPageManifest?.featured ?? Boolean(properties.Featured?.checkbox)
      : Boolean(properties.Featured?.checkbox),
    properties: {
      ...(previousPageManifest?.properties || {}),
    },
  }

  await mkdir(pageDir, { recursive: true })

  for (const propertyName of imageProperties) {
    const property = properties[propertyName]
    if (property?.type !== 'files' || !property.files?.length) {
      continue
    }

    pageManifest.properties[propertyName] = []

    for (const [index, file] of property.files.entries()) {
      const sourceUrl = getFileUrl(file)
      if (!sourceUrl) {
        continue
      }

      try {
        const inputBuffer = await downloadImage(sourceUrl)
        const optimized = await optimizeImage(inputBuffer, propertyName)
        const hash = createHash('sha256').update(optimized.buffer).digest('hex').slice(0, 12)
        const filename = `${safeSegment(propertyName)}-${index + 1}-${hash}.webp`
        const filePath = path.join(pageDir, filename)
        const publicPath = `${publicPrefix}/${pageDirName}/${filename}`

        await writeFile(filePath, optimized.buffer)

        pageManifest.properties[propertyName].push({
          path: publicPath,
          width: optimized.width,
          height: optimized.height,
          bytes: optimized.buffer.byteLength,
          originalBytes: inputBuffer.byteLength,
          sourceName: getFileName(file, `${propertyName} ${index + 1}`),
        })

        const savings = Math.round((1 - optimized.buffer.byteLength / inputBuffer.byteLength) * 100)
        console.log(`${title || pageId} / ${propertyName}[${index + 1}]: ${Math.round(inputBuffer.byteLength / 1024)}KB -> ${Math.round(optimized.buffer.byteLength / 1024)}KB (${savings}% smaller)`)
      } catch (error) {
        console.warn(`${title || pageId} / ${propertyName}[${index + 1}] skipped: ${error.message}`)
      }
    }

    if (pageManifest.properties[propertyName].length === 0) {
      delete pageManifest.properties[propertyName]
    }
  }

  return [pageId, pageManifest]
}

const previousManifest = await readExistingManifest()
const pages = await fetchAllPages()
const entries = []

await mkdir(outputDir, { recursive: true })

for (const page of pages) {
  entries.push(await syncPageAssets(page))
}

const manifest = {
  generatedAt: new Date().toISOString(),
  databaseId,
  settings: {
    quality,
    defaultMaxWidth,
    heroMaxWidth: maxWidthByProperty['Hero Image'],
  },
  projects: Object.fromEntries(entries),
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

const previousGeneratedAt = previousManifest?.generatedAt
console.log(`Wrote ${manifestPath}${previousGeneratedAt ? ` (previous: ${previousGeneratedAt})` : ''}`)
