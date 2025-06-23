import Image from 'next/image'
import Link from 'next/link'
import { SimpleProject } from '@/lib/notion-simple'
import LogoButton from '@/components/LogoButton'

interface SimpleProjectStoryProps {
  project: SimpleProject
}

export default function SimpleProjectStory({ project }: SimpleProjectStoryProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <LogoButton />
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</Link>
              <Link href="/#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Services</Link>
              <Link href="/#portfolio" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Testimonials</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Contact</Link>
            </div>
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Title Overlay */}
      <section className="relative h-[60vh] min-h-[500px] pt-20">
        <div className="absolute inset-0 bg-gray-200">
          {project.heroImage && (
            <Image 
              src={project.heroImage} 
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 text-white w-full">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {project.type} • {project.location}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                {project.story}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      {project.videoUrl && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-12 text-center">
              Project Video
            </h2>
            
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                <iframe
                  src={project.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${project.title} - Project Video`}
                />
              ) : (
                <video 
                  src={project.videoUrl} 
                  controls 
                  className="w-full h-full"
                  poster={project.heroImage}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-12 text-center">
            Project Gallery
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.slice(0, 6).map((image, index) => (
              <div key={index} className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden group cursor-pointer relative">
                <Image 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1} / 6
                </div>
              </div>
            ))}
          </div>
          
          {project.galleryImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Gallery images will appear here once added to Notion columns 1-6</p>
            </div>
          )}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
            Inspired by This Project?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let's discuss how we can bring your vision to life with the same 
            attention to detail and quality craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-12 py-5 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#2E7D32' }}
            >
              Start Your Project
            </a>
            <Link
              href="/projects"
              className="px-12 py-5 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}