import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/notion-simple'
import LogoButton from '@/components/LogoButton'

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <LogoButton />
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</Link>
              <Link href="/#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Services</Link>
              <Link href="/projects" className="text-gray-900 font-semibold">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Testimonials</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Contact</Link>
            </div>
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 bg-gray-50 pt-32">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 block">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {project.heroImage && (
                    <Image 
                      src={project.heroImage} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.type}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{project.location}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.story}
                  </p>
                  <div className="text-sm text-gray-500 flex items-center">
                    <span>{project.location}</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}