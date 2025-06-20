// Notion CMS Integration Structure
// This file will contain the Notion database integration when ready

export interface NotionProject {
  id: string
  title: string
  location: string
  type: 'Residential' | 'Commercial' | 'Renovation' | 'Extension'
  status: 'Completed' | 'In Progress' | 'Planned'
  
  // Basic Info
  timeline: string
  budget: string
  client: string
  completedDate: string
  description: string
  
  // Story Components (following our storytelling framework)
  vision: string
  challenge: string
  solution: string
  process: string[]
  transformation: string
  impact: string
  
  // Media URLs (will be populated from Notion)
  heroImage: string
  beforeImages: string[]
  processImages: string[]
  afterImages: string[]
  videoUrl?: string
  
  // Project Details
  materials: string[]
  teamMembers: string[]
  features: string[]
  tags: string[]
  
  // Client Feedback
  testimonial?: {
    text: string
    author: string
    role: string
    rating: number
  }
  
  // Recognition
  awards?: string[]
  featured: boolean
  
  // SEO & Metadata
  slug: string
  metaDescription: string
  publishedDate: string
}

export interface NotionDatabaseResponse {
  projects: NotionProject[]
  hasMore: boolean
  nextCursor?: string
}

// Placeholder functions for future Notion integration
export async function getProjects(): Promise<NotionProject[]> {
  // TODO: Implement Notion API integration
  // For now, return sample data
  return getSampleProjects()
}

export async function getProjectBySlug(slug: string): Promise<NotionProject | null> {
  // TODO: Implement Notion API integration
  const projects = await getProjects()
  return projects.find(project => project.slug === slug) || null
}

export async function getFeaturedProjects(): Promise<NotionProject[]> {
  // TODO: Implement Notion API integration
  const projects = await getProjects()
  return projects.filter(project => project.featured)
}

export async function getProjectsByType(type: string): Promise<NotionProject[]> {
  // TODO: Implement Notion API integration
  const projects = await getProjects()
  return projects.filter(project => 
    type === 'all' || project.type.toLowerCase() === type.toLowerCase()
  )
}

// Sample data structure for development
function getSampleProjects(): NotionProject[] {
  return [
    {
      id: '1',
      title: 'Bondi Beach House Transformation',
      location: 'Bondi Beach, NSW',
      type: 'Renovation',
      status: 'Completed',
      timeline: '8 months',
      budget: '$850K - $1.2M',
      client: 'Chen Family',
      completedDate: 'March 2024',
      description: 'Complete transformation of a 1960s beach house into a modern sustainable family home with spectacular ocean views.',
      
      // Story
      vision: 'The Chen family dreamed of transforming their dated 1960s beach house into a modern family home that would honor the coastal setting while providing contemporary comfort and functionality. Their vision was to create a space that seamlessly blended indoor and outdoor living, maximized the stunning ocean views, and incorporated sustainable features for the future.',
      
      challenge: 'The project presented multiple complex challenges: heritage constraints that limited external modifications, severe coastal exposure requiring specialized weatherproofing solutions, strict council requirements for beachfront properties, structural limitations of the original 1960s construction, and the need to maintain the home\'s character while achieving modern performance standards.',
      
      solution: 'Our innovative approach focused on working within heritage guidelines while maximizing impact. We developed a comprehensive solution that included: strategic internal reconfiguration to optimize ocean views, installation of high-performance glazing systems designed for coastal conditions, integration of sustainable technologies including solar panels and rainwater harvesting, careful material selection prioritizing both aesthetics and durability in the harsh coastal environment.',
      
      process: [
        'Heritage consultation and detailed planning phase with council liaison and structural assessment',
        'Selective demolition and structural reinforcement while preserving key heritage elements',
        'Installation of new high-performance building envelope and advanced weatherproofing systems',
        'Complete interior renovation with custom joinery and sustainable feature integration',
        'Landscaping and outdoor living area creation with focus on coastal plant species'
      ],
      
      transformation: 'The transformation was nothing short of spectacular. What was once a cramped, dark 1960s beach house became a light-filled, spacious family home that truly captures the essence of beachside living. The new open-plan design doubles the usable living space while floor-to-ceiling windows frame uninterrupted ocean views. Sustainable features reduce the home\'s environmental impact while providing long-term cost savings.',
      
      impact: 'The completed project exceeded all expectations, increasing the property value by 40% while providing the Chen family with their dream home. The renovation won the 2024 Master Builders Association Award for Heritage Renovation Excellence and has been featured in Australian House & Garden magazine. Most importantly, the family now enjoys a home that perfectly suits their lifestyle while respecting the area\'s heritage character.',
      
      // Media (placeholders for now)
      heroImage: '/api/placeholder/1200/800',
      beforeImages: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      processImages: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      afterImages: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      videoUrl: '/api/placeholder/video/tour',
      
      // Details
      materials: [
        'Thermally broken aluminum windows',
        'Recycled timber flooring',
        'Natural stone cladding',
        'High-performance insulation',
        'Solar panel system',
        'Rainwater harvesting system'
      ],
      
      teamMembers: [
        'Mark Stevens - Project Manager',
        'Sarah Williams - Design Coordinator',
        'James Chen - Site Supervisor',
        'Emma Rodriguez - Sustainability Consultant'
      ],
      
      features: [
        'Floor-to-ceiling ocean view windows',
        'Open-plan living and dining areas',
        'Gourmet kitchen with island bench',
        'Master suite with ocean views',
        'Sustainable energy systems',
        'Outdoor entertainment areas',
        'Custom storage solutions',
        'Smart home automation'
      ],
      
      tags: ['heritage', 'coastal', 'sustainable', 'family-home', 'ocean-views'],
      
      // Testimonial
      testimonial: {
        text: 'Praegrandis transformed our vision into reality beyond our wildest dreams. Their attention to detail, respect for the heritage aspects, and innovative solutions for the coastal challenges were exceptional. We now have the perfect family home that honors the past while embracing the future.',
        author: 'Sarah & Michael Chen',
        role: 'Homeowners',
        rating: 5
      },
      
      // Recognition
      awards: [
        '2024 MBA Heritage Renovation Excellence Award',
        'Featured in Australian House & Garden',
        'Sustainability in Construction Award'
      ],
      
      featured: true,
      slug: 'bondi-beach-house-transformation',
      metaDescription: 'Award-winning transformation of a 1960s Bondi Beach house into a modern sustainable family home with heritage sensitivity and coastal expertise.',
      publishedDate: '2024-04-15'
    },
    
    // Add more sample projects here...
    {
      id: '2',
      title: 'Surry Hills Tech Hub',
      location: 'Surry Hills, NSW',
      type: 'Commercial',
      status: 'Completed',
      timeline: '4 months',
      budget: '$450K - $650K',
      client: 'TechFlow Solutions',
      completedDate: 'February 2024',
      description: 'Modern office transformation for a growing tech startup requiring flexible collaborative spaces and cutting-edge technology integration.',
      
      vision: 'TechFlow Solutions needed a workspace that would reflect their innovative culture while supporting rapid team growth. The vision was to create a dynamic, flexible environment that could adapt to changing needs while fostering collaboration and creativity.',
      
      challenge: 'The project faced significant challenges including an extremely tight 4-month deadline to coincide with a major product launch, budget constraints requiring creative cost management, the need to maintain business operations during construction, and integration of complex IT infrastructure without disrupting existing systems.',
      
      solution: 'We developed a phased construction approach that allowed business continuity while delivering on time and under budget. The solution included modular design elements for future flexibility, strategic use of cost-effective materials that didn\'t compromise on quality, advanced project management techniques, and close coordination with IT specialists.',
      
      process: [
        'Detailed planning and phased construction schedule development',
        'IT infrastructure installation during off-hours',
        'Modular workspace construction with minimal disruption',
        'Custom furniture and technology integration',
        'Final fit-out and employee transition management'
      ],
      
      transformation: 'The completed space transformed from a traditional closed-office layout into a vibrant, open collaborative environment. The new design features flexible meeting spaces, quiet work zones, a central collaboration hub, and state-of-the-art technology throughout.',
      
      impact: 'The project was delivered 2 weeks early and 25% under budget, with zero operational disruption. Employee satisfaction scores increased by 35%, and the new space has supported the company\'s 40% growth over the following year.',
      
      heroImage: '/api/placeholder/1200/800',
      beforeImages: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      processImages: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
      afterImages: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
      
      materials: [
        'Acoustic glass partitions',
        'Sustainable carpet tiles',
        'LED lighting systems',
        'Modular furniture systems',
        'Advanced HVAC with air purification'
      ],
      
      teamMembers: [
        'Lisa Park - Commercial Project Manager',
        'David Chen - IT Coordination Specialist',
        'Rachel Stevens - Interior Design Lead'
      ],
      
      features: [
        'Flexible meeting rooms with video conferencing',
        'Open collaboration areas',
        'Quiet focus zones',
        'Modern kitchen and breakout areas',
        'Advanced IT infrastructure',
        'Acoustic treatment throughout'
      ],
      
      tags: ['commercial', 'tech', 'flexible-workspace', 'budget-friendly'],
      
      testimonial: {
        text: 'The Praegrandis team delivered exactly what we needed when we needed it. Their understanding of our business requirements and ability to work within our constraints was impressive. Our new space has transformed how our team collaborates.',
        author: 'David Thompson',
        role: 'CEO, TechFlow Solutions',
        rating: 5
      },
      
      featured: true,
      slug: 'surry-hills-tech-hub',
      metaDescription: 'Fast-track commercial office transformation for tech startup delivered early and under budget with flexible collaborative workspace design.',
      publishedDate: '2024-03-10'
    }
  ]
}

// Notion Database Schema Documentation
export const NOTION_DATABASE_SCHEMA = {
  properties: {
    Title: { type: 'title' },
    Location: { type: 'rich_text' },
    Type: { 
      type: 'select',
      options: ['Residential', 'Commercial', 'Renovation', 'Extension']
    },
    Status: {
      type: 'select', 
      options: ['Completed', 'In Progress', 'Planned']
    },
    Timeline: { type: 'rich_text' },
    Budget: { type: 'rich_text' },
    Client: { type: 'rich_text' },
    'Completed Date': { type: 'date' },
    Description: { type: 'rich_text' },
    Vision: { type: 'rich_text' },
    Challenge: { type: 'rich_text' },
    Solution: { type: 'rich_text' },
    Process: { type: 'rich_text' },
    Transformation: { type: 'rich_text' },
    Impact: { type: 'rich_text' },
    'Hero Image': { type: 'files' },
    'Before Images': { type: 'files' },
    'Process Images': { type: 'files' },
    'After Images': { type: 'files' },
    'Video URL': { type: 'url' },
    Materials: { type: 'multi_select' },
    'Team Members': { type: 'multi_select' },
    Features: { type: 'multi_select' },
    Tags: { type: 'multi_select' },
    'Testimonial Text': { type: 'rich_text' },
    'Testimonial Author': { type: 'rich_text' },
    'Testimonial Role': { type: 'rich_text' },
    'Testimonial Rating': { type: 'number' },
    Awards: { type: 'multi_select' },
    Featured: { type: 'checkbox' },
    Slug: { type: 'rich_text' },
    'Meta Description': { type: 'rich_text' },
    'Published Date': { type: 'date' }
  }
}