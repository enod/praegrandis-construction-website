import React from 'react'
import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/notion-simple'
import { getAssetPath } from '@/lib/assets'

export default async function Home() {
  const featuredProjects = await getFeaturedProjects()
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="focus:outline-none"
            >
              <img
                src={getAssetPath("/logo.png")}
                alt="Praegrandis Construction"
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </button>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Portfolio</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Trust Indicators Strip */}
      <div className="bg-gray-900 text-white py-3 pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F5C842' }}></div>
              <span>Licensed Builder NSW</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2E7D32' }}></div>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>Master Builders Association</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ minHeight: '100vh', minWidth: '177.77vh', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          >
            <source src={getAssetPath("/video.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 lg:px-8">
          <h1 className="text-6xl lg:text-8xl font-light text-white mb-8 leading-[1.1] drop-shadow-lg">
            Transforming Sydney
            <span className="block font-medium mt-4" style={{ color: '#F5C842' }}>Homes & Businesses</span>
            <span className="block text-4xl lg:text-5xl font-light text-white/90 mt-6">Since 2009</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Award-winning construction company delivering exceptional residential and commercial projects 
            across Sydney with uncompromising quality and innovative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="#portfolio"
              className="px-12 py-5 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#2E7D32' }}
            >
              View Project Stories
            </a>
            <a
              href="#contact"
              className="px-12 py-5 border-2 border-white/80 text-white font-medium rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-light mb-3" style={{ color: '#F5C842' }}>15+</div>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Years Building Sydney</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-light mb-3" style={{ color: '#2E7D32' }}>200+</div>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-light text-gray-800 mb-3">100%</div>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-light mb-3" style={{ color: '#2E7D32' }}>$50M+</div>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Projects Delivered</p>
            </div>
          </div>

          {/* Quick Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F5C842' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1l-9 4v6c0 5.55 3.84 10.74 9 11 5.16-.26 9-5.45 9-11V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">NSW Builder License, Public Liability & Workers Compensation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2E7D32' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">7-year structural warranty on all residential projects</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1E40AF' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Sydney-based team with deep local knowledge and experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Featured Project Stories
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Every project tells a unique story of transformation, challenge, and achievement. 
              Explore how we bring visions to life across Sydney.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <Link key={index} href={`/projects/${project.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 block">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {project.heroImage && (
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
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
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.story}
                  </p>
                  <span className="text-base font-medium hover:underline transition-colors" style={{ color: '#2E7D32' }}>
                    Read Full Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 transition-colors"
            >
              View All Project Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Hear from families and businesses 
              whose spaces we&apos;ve transformed across Sydney.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah & Michael Chen',
                project: 'Bondi Beach House Renovation',
                rating: 5,
                text: 'Praegrandis transformed our vision into reality. Their attention to detail and project management was exceptional. We couldn\'t be happier with our new home.',
                result: 'Increased property value by 40%'
              },
              {
                name: 'David Thompson',
                project: 'Commercial Office Fit-Out',
                rating: 5,
                text: 'Professional, on-time, and within budget. The team understood our business needs and delivered a space that truly enhances our productivity.',
                result: 'Project completed 2 weeks early'
              },
              {
                name: 'Emma Rodriguez',
                project: 'Mosman Home Extension',
                rating: 5,
                text: 'From concept to completion, the communication was outstanding. They managed every detail while keeping disruption to our daily life minimal.',
                result: 'Seamless integration with existing home'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mb-2">{testimonial.project}</div>
                  <div className="text-sm font-medium" style={{ color: '#2E7D32' }}>
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
                Building Tomorrow&apos;s
                <span className="font-medium block mt-2" style={{ color: '#2E7D32' }}>Sydney</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  For over 15 years, Praegrandis Construction has been at the forefront of Sydney&apos;s 
                  construction industry, delivering exceptional residential and commercial projects that 
                  shape the city&apos;s landscape.
                </p>
                
                <p>
                  Our team of licensed professionals combines innovative design, sustainable practices, 
                  and meticulous craftsmanship to create spaces that not only meet today&apos;s needs 
                  but anticipate tomorrow&apos;s possibilities.
                </p>

                <p>
                  From heritage renovations in Paddington to modern commercial fit-outs in the CBD, 
                  we bring decades of local expertise to every project, ensuring quality that stands 
                  the test of time.
                </p>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold" style={{ color: '#F5C842' }}>Licensed</div>
                  <div className="text-sm text-gray-600">NSW Builder License</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold" style={{ color: '#2E7D32' }}>Insured</div>
                  <div className="text-sm text-gray-600">$20M Public Liability</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-medium text-gray-900 mb-8">Our Credentials</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div 
                      className="w-3 h-3 rounded-full mt-2 mr-6 flex-shrink-0" 
                      style={{ backgroundColor: '#F5C842' }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Master Builders Association</h4>
                      <p className="text-gray-600">Active member ensuring industry best practices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div 
                      className="w-3 h-3 rounded-full mt-2 mr-6 flex-shrink-0" 
                      style={{ backgroundColor: '#2E7D32' }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">WorkCover NSW Certified</h4>
                      <p className="text-gray-600">Comprehensive workplace safety compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mt-2 mr-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">HIA Member</h4>
                      <p className="text-gray-600">Housing Industry Association for quality assurance</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div 
                      className="w-3 h-3 rounded-full mt-2 mr-6 flex-shrink-0" 
                      style={{ backgroundColor: '#F5C842' }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Green Building Council</h4>
                      <p className="text-gray-600">Committed to sustainable construction practices</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">NSW Builder License</div>
                    <div className="font-mono text-lg font-semibold text-gray-900">BL-123456</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Our Services
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions from concept to completion, 
              tailored to your unique vision and requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Residential Construction',
                description: 'Custom homes, renovations, and extensions that reflect your lifestyle and values with attention to every detail.',
                features: ['Custom home design', 'Heritage renovations', 'Structural alterations', 'Sustainable building'],
                projects: '120+ completed',
                timeline: '3-12 months'
              },
              {
                title: 'Commercial Projects',
                description: 'Office buildings, retail spaces, and commercial fit-outs designed for success, functionality, and lasting impact.',
                features: ['Office fit-outs', 'Retail construction', 'Industrial buildings', 'Tenant improvements'],
                projects: '80+ completed',
                timeline: '2-8 months'
              },
              {
                title: 'Renovations & Extensions',
                description: 'Transform your existing space with expert craftsmanship and innovative design solutions that maximize potential.',
                features: ['Home extensions', 'Kitchen & bathroom renovations', 'Structural modifications', 'Accessibility upgrades'],
                projects: '150+ completed',
                timeline: '1-6 months'
              },
              {
                title: 'Project Management',
                description: 'End-to-end coordination ensuring seamless execution from initial concept to final handover and beyond.',
                features: ['Design coordination', 'Permit management', 'Trade scheduling', 'Quality control'],
                projects: 'All projects included',
                timeline: 'Full project duration'
              }
            ].map((service, index) => {
              const colors = ['#F5C842', '#2E7D32', '#1E40AF', '#DC2626'];
              
              const getIcon = (index: number) => {
                switch(index) {
                  case 0: // Residential Construction - House icon
                    return <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>;
                  case 1: // Commercial Projects - Building icon
                    return <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>;
                  case 2: // Renovations & Extensions - Tools icon
                    return <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                    </svg>;
                  case 3: // Project Management - Clipboard icon
                    return <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>;
                  default:
                    return null;
                }
              };
              
              return (
                <div
                key={index}
                className="group bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center"
                  style={{ backgroundColor: colors[index] }}
                >
                  {getIcon(index)}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: index % 2 === 0 ? '#F5C842' : '#2E7D32' }}></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500">Experience</div>
                    <div className="font-semibold text-gray-900">{service.projects}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Typical Timeline</div>
                    <div className="font-semibold text-gray-900">{service.timeline}</div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
            Ready to Build
            <span className="font-medium block mt-2" style={{ color: '#2E7D32' }}>Your Vision?</span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss your project. Our experienced team provides free consultations 
            and detailed quotes tailored to your specific requirements and timeline.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#F5C842' }}
              >
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Visit Our Office</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Construction Street<br />
                Sydney NSW 2000<br />
                <span className="text-sm text-gray-500">Mon-Fri 7AM-5PM</span>
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#2E7D32' }}
              >
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Call Direct</h3>
              <p className="text-gray-600 leading-relaxed">
                <a href="tel:+61212345678" className="hover:underline">(02) 1234 5678</a><br />
                <span className="text-sm text-gray-500">24/7 Emergency: (02) 9876 5432</span>
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#1E40AF' }}
              >
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">
                <a href="mailto:info@praegrandisconstruction.com.au" className="hover:underline">
                  info@praegrandisconstruction.com.au
                </a><br />
                <span className="text-sm text-gray-500">Response within 2 hours</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Project Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="tel:+61212345678"
                className="flex items-center justify-center px-6 py-4 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#2E7D32' }}
              >
                📞 Call Now
              </a>
              <a 
                href="#"
                className="flex items-center justify-center px-6 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 transition-colors"
              >
                📋 Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <img
                src={getAssetPath("/logo.png")}
                alt="Praegrandis Construction"
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Building excellence in Sydney for over 15 years. Licensed, insured, and committed 
                to delivering exceptional construction projects across residential and commercial sectors.
              </p>
              <div className="text-sm text-gray-500">
                <div>NSW Builder License: BL-123456</div>
                <div>ABN: 12 345 678 901</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Residential Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Praegrandis Construction. All rights reserved. | 
              <span className="ml-2">Privacy Policy | Terms of Service</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}