import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8">
            Project Stories
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Every project tells a unique story of transformation, innovation, and achievement. 
            Explore how we bring visions to life across Sydney through compelling case studies.
          </p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['All Projects', 'Residential', 'Commercial', 'Renovations', 'Extensions'].map((filter, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  index === 0 
                    ? 'text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={index === 0 ? { backgroundColor: '#2E7D32' } : {}}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Bondi Beach House Transformation',
                location: 'Bondi Beach, NSW',
                type: 'Residential Renovation',
                timeline: '8 months',
                budget: '$850K - $1.2M',
                description: 'Complete transformation of a 1960s beach house into a modern sustainable family home.',
                challenge: 'Heritage constraints, coastal exposure, and strict council requirements',
                solution: 'Innovative design respecting heritage while maximizing ocean views',
                result: 'Award-winning design that doubled living space and increased property value by 40%',
                featured: true,
                images: {
                  hero: '/api/placeholder/800/600',
                  before: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
                  after: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
                }
              },
              {
                id: 2,
                title: 'Surry Hills Tech Hub',
                location: 'Surry Hills, NSW',
                type: 'Commercial Fit-Out',
                timeline: '4 months',
                budget: '$450K - $650K',
                description: 'Modern office space transformation for growing tech startup with collaborative zones.',
                challenge: 'Tight timeline, budget constraints, and operational continuity requirements',
                solution: 'Phased construction approach with modular design elements',
                result: 'Delivered 2 weeks early, 25% under budget, with zero operational disruption',
                featured: true,
                images: {
                  hero: '/api/placeholder/800/600',
                  before: ['/api/placeholder/400/300'],
                  after: ['/api/placeholder/400/300', '/api/placeholder/400/300']
                }
              },
              {
                id: 3,
                title: 'Mosman Family Extension',
                location: 'Mosman, NSW',
                type: 'Home Extension',
                timeline: '6 months',
                budget: '$320K - $480K',
                description: 'Two-story extension adding master suite and family entertainment area.',
                challenge: 'Steep block, neighbour considerations, and structural complexity',
                solution: 'Cantilevered design minimizing site impact while maximizing space',
                result: 'Seamless integration with existing home, increased property value by $600K',
                featured: false,
                images: {
                  hero: '/api/placeholder/800/600',
                  before: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
                  after: ['/api/placeholder/400/300', '/api/placeholder/400/300']
                }
              },
              {
                id: 4,
                title: 'Paddington Heritage Restoration',
                location: 'Paddington, NSW',
                type: 'Heritage Renovation',
                timeline: '12 months',
                budget: '$1.2M - $1.8M',
                description: 'Careful restoration of 1880s Victorian terrace with modern sustainable upgrades.',
                challenge: 'Heritage restrictions, structural issues, and sustainability integration',
                solution: 'Period-appropriate materials with hidden modern systems',
                result: 'Award-winning heritage restoration with 6-star energy rating',
                featured: true,
                images: {
                  hero: '/api/placeholder/800/600',
                  before: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
                  after: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
                }
              },
              {
                id: 5,
                title: 'CBD Corporate Headquarters',
                location: 'Sydney CBD, NSW',
                type: 'Commercial Construction',
                timeline: '18 months',
                budget: '$2.5M - $3.5M',
                description: 'Complete fit-out of 3-floor corporate headquarters with executive facilities.',
                challenge: 'Complex building systems, coordination with 12 trades, strict deadlines',
                solution: 'Advanced project management with real-time coordination platform',
                result: 'On-time delivery with zero safety incidents and 98% client satisfaction',
                featured: false,
                images: {
                  hero: '/api/placeholder/800/600',
                  before: ['/api/placeholder/400/300'],
                  after: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
                }
              },
              {
                id: 6,
                title: 'Manly Beachfront Apartment',
                location: 'Manly, NSW',
                type: 'Apartment Renovation',
                timeline: '3 months',
                budget: '$180K - $250K',
                description: 'Complete renovation of beachfront apartment maximizing ocean views.',
                challenge: 'Limited space, moisture management, and strata regulations',
                solution: 'Space-efficient design with premium moisture-resistant materials',
                result: 'Transformed compact space into luxury retreat, 50% rental yield increase',
                featured: false,
                images: {
                  hero: '/api/placeholder/800/600',
                  before: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
                  after: ['/api/placeholder/400/300', '/api/placeholder/400/300']
                }
              }
            ].map((project, index) => (
              <div key={project.id} className={`group ${project.featured ? 'lg:col-span-2' : ''}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'h-80' : 'h-64'}`}>
                    <div className="absolute inset-0 bg-gray-200"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {project.type}
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Featured
                      </div>
                    )}
                    
                    {/* Hover Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm font-medium">{project.location}</p>
                          <p className="text-xs opacity-90">{project.timeline} • {project.budget}</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-xs font-medium">View Story</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className={`p-6 ${project.featured ? 'lg:p-8' : ''}`}>
                    <h3 className={`font-semibold text-gray-900 mb-3 ${project.featured ? 'text-2xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Challenge & Result for Featured Projects */}
                    {project.featured && (
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F5C842' }}></div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Challenge</p>
                            <p className="text-sm text-gray-600">{project.challenge}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2E7D32' }}></div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Result</p>
                            <p className="text-sm text-gray-600">{project.result}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Project Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{project.timeline}</span> timeline
                      </div>
                      <button className="text-sm font-medium hover:underline transition-colors" style={{ color: '#2E7D32' }}>
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Ready to Create Your
            <span className="font-medium block mt-2" style={{ color: '#2E7D32' }}>Project Story?</span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-12 leading-relaxed">
            Every project is unique. Let&apos;s discuss how we can bring your vision to life 
            with the same attention to detail and innovation showcased in our portfolio.
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
              href="/contact"
              className="px-12 py-5 border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}