import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/notion-simple'
import SimpleProjectStory from '@/components/SimpleProjectStory'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  return <SimpleProjectStory project={project} />
}

// This function generates static paths for all projects at build time
export async function generateStaticParams() {
  try {
    const { getProjects } = await import('@/lib/notion-simple')
    const projects = await getProjects()
    return projects.map((project) => ({
      slug: project.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    // Fallback to sample project slugs
    return [
      { slug: 'bondi-beach-house-transformation' },
      { slug: 'surry-hills-tech-hub' },
    ]
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Praegrandis Construction`,
    description: project.story,
    openGraph: {
      title: project.title,
      description: project.story,
      images: [project.heroImage],
    },
  }
}