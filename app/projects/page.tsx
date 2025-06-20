import Link from 'next/link'
import { getProjects } from '@/lib/notion-simple'

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8">
            Project Stories
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Every project tells a unique story. Here are our featured projects from Notion.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <Link href={`/projects/${project.slug}`}>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.story}
                    </p>
                    <div className="text-sm text-gray-500">
                      {project.location}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}