import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/lib/notion-simple'
import { getAssetPath } from '@/lib/assets'
import LogoButton from '@/components/LogoButton'

export default async function Home() {
  const featuredProjects = await getFeaturedProjects()
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <LogoButton />
            <div className="hidden md:flex items-center space-x-12">
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Portfolio</a>
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
              <span>Builder License #363658C</span>
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
            <span className="block text-4xl lg:text-5xl font-light text-white/90 mt-6">Since 2020</span>
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
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 transition-colors"
            >
              View All Project Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
                  Since 2020, Praegrandis Construction has been at the forefront of Sydney&apos;s 
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

                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">NSW Builder License</div>
                    <div className="font-mono text-lg font-semibold text-gray-900">363658C</div>
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
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
              Ready to Build
              <span className="font-medium block mt-2" style={{ color: '#2E7D32' }}>Your Vision?</span>
            </h2>
            
            <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s discuss your project. Fill out the form below and we&apos;ll get back to you 
              with a detailed consultation within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get Your Free Consultation</h3>
              
              <form action="https://formspree.io/f/mqabypan" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="(02) 1234 5678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential-construction">Residential Construction</option>
                      <option value="commercial-project">Commercial Project</option>
                      <option value="renovation-extension">Renovation & Extension</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Praegrandis Construction contacting me about my project inquiry. 
                    We respect your privacy and will never share your information.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform"
                  style={{ backgroundColor: '#2E7D32' }}
                >
                  Send My Project Inquiry
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6"
                  style={{ backgroundColor: '#F5C842' }}
                >
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-xl">Visit Our Office</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  123 Construction Street<br />
                  Sydney NSW 2000<br />
                  <span className="text-sm text-gray-500">Mon-Fri 7AM-5PM</span>
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Why Choose Our Form?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2E7D32' }}></div>
                    <span>Secure and private - your information is protected</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2E7D32' }}></div>
                    <span>Fast response - we reply within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2E7D32' }}></div>
                    <span>Detailed consultation based on your specific needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2E7D32' }}></div>
                    <span>No obligations - free initial consultation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-700 to-green-800 p-8 rounded-3xl text-white">
                <h4 className="font-semibold mb-4 text-lg">Ready to Start Today?</h4>
                <p className="text-green-100 mb-6">
                  For urgent inquiries or immediate assistance, our experienced team is ready to help.
                </p>
                <div className="text-center">
                  <div className="text-sm text-green-200 mb-1">Licensed & Insured</div>
                  <div className="font-mono text-lg font-semibold">NSW License #363658C</div>
                </div>
              </div>
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
                Building excellence in Sydney since 2020. Licensed, insured, and committed 
                to delivering exceptional construction projects across residential and commercial sectors.
              </p>
              <div className="text-sm text-gray-500">
                <div>NSW Builder License: 363658C</div>
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