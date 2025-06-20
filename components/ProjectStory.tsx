import Image from 'next/image'

interface ProjectStoryProps {
  project: {
    id: string
    title: string
    location: string
    type: string
    timeline: string
    budget: string
    client: string
    description: string
    
    // Story Structure
    vision: string
    challenge: string
    solution: string
    process: string[]
    transformation: string
    impact: string
    
    // Media
    heroImage: string
    beforeImages: string[]
    processImages: string[]
    afterImages: string[]
    videoUrl?: string
    
    // Details
    materials: string[]
    teamMembers: string[]
    features: string[]
    testimonial?: {
      text: string
      author: string
      role: string
    }
    
    // Metadata
    completedDate: string
    awards?: string[]
    tags: string[]
  }
}

export default function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gray-200">
          {/* Hero image will go here */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 text-white">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {project.type}
                </span>
                <div className="text-lg opacity-90">{project.location}</div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="grid grid-cols-3 gap-8 max-w-xl">
                <div>
                  <div className="text-sm opacity-75 mb-1">Timeline</div>
                  <div className="font-medium">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-sm opacity-75 mb-1">Investment</div>
                  <div className="font-medium">{project.budget}</div>
                </div>
                <div>
                  <div className="text-sm opacity-75 mb-1">Completed</div>
                  <div className="font-medium">{project.completedDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Navigation */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex space-x-8 py-4 overflow-x-auto">
            {[
              { id: 'vision', label: 'The Vision' },
              { id: 'challenge', label: 'The Challenge' },
              { id: 'solution', label: 'The Solution' },
              { id: 'process', label: 'The Process' },
              { id: 'transformation', label: 'The Transformation' },
              { id: 'impact', label: 'The Impact' }
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap transition-colors"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* The Vision */}
      <section id="vision" className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Vision
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: '#F5C842' }}></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.vision}
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section id="challenge" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                The Challenge
              </h2>
              <div className="w-16 h-1 mb-8" style={{ backgroundColor: '#F5C842' }}></div>
              
              <div className="prose prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {project.beforeImages.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                  {/* Before images will go here */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Solution
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: '#2E7D32' }}></div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2E7D32' }}></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Materials & Methods</h3>
              <ul className="space-y-3">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F5C842' }}></div>
                    <span className="text-gray-600">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Process
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: '#2E7D32' }}></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Follow the journey from concept to completion through key milestones and behind-the-scenes insights.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="space-y-16">
            {project.process.map((phase, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: index % 2 === 0 ? '#F5C842' : '#2E7D32', opacity: 0.1 }}
                      >
                        <span 
                          className="font-bold text-lg"
                          style={{ color: index % 2 === 0 ? '#F5C842' : '#2E7D32' }}
                        >
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Phase {index + 1}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {phase}
                    </p>
                  </div>
                </div>
                
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="grid grid-cols-2 gap-4">
                    {project.processImages.slice(index * 2, (index + 1) * 2).map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                        {/* Process images will go here */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section id="transformation" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Transformation
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: '#2E7D32' }}></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Witness the dramatic transformation from concept to completion.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Before</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.beforeImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                      {/* Before images */}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">After</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.afterImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                      {/* After images */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Tour (if available) */}
          {project.videoUrl && (
            <div className="bg-gray-900 rounded-3xl overflow-hidden aspect-video mb-12">
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Project Video Tour</h4>
                  <p className="text-gray-300">Click to watch the complete transformation</p>
                </div>
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.transformation}
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8">
                &quot;{project.testimonial.text}&quot;
              </blockquote>
              
              <div>
                <div className="font-semibold text-gray-900 text-lg">{project.testimonial.author}</div>
                <div className="text-gray-500">{project.testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Impact */}
      <section id="impact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Impact
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: '#2E7D32' }}></div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              {project.impact}
            </p>
          </div>

          {/* Awards & Recognition */}
          {project.awards && project.awards.length > 0 && (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Awards & Recognition</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {project.awards.map((award, index) => (
                  <div key={index} className="bg-gray-50 px-6 py-3 rounded-full">
                    <span className="text-gray-700 font-medium">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Ready to Start Your
            <span className="font-medium block mt-2" style={{ color: '#2E7D32' }}>Project Story?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Every project is unique. Let&apos;s discuss how we can bring your vision to life 
            with the same level of excellence and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-12 py-5 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#2E7D32' }}
            >
              Start Your Project
            </a>
            <a
              href="/projects"
              className="px-12 py-5 border-2 border-gray-600 text-gray-300 font-medium rounded-full hover:border-gray-400 hover:text-white transition-all duration-300"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}