'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'React Portfolio Website',
      description: 'Modern portfolio showcasing skills and projects with responsive design',
      image: '/placeholder.svg',
      category: ['Web'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Photography Portfolio Website',
      description: 'Elegant gallery site with smooth image transitions and filtering',
      image: '/placeholder.svg',
      category: ['Web'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'E-commerce Application',
      description: 'Full-featured online store with cart, payment, and user authentication',
      image: '/placeholder.svg',
      category: ['Mobile', 'Web'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Food Ordering Application',
      description: 'Mobile app for restaurant ordering with real-time tracking',
      image: '/placeholder.svg',
      category: ['Mobile'],
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'React Firebase Template',
      description: 'Boilerplate with authentication, CRUD, and state management',
      image: '/placeholder.svg',
      category: ['Web'],
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Full-stack Roadmap',
      description: 'Interactive learning platform for web development skills',
      image: '/placeholder.svg',
      category: ['Web'],
      github: '#',
      live: '#'
    }
  ]

  const filters = ['All', 'Web', 'Mobile']

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? true : project.category.includes(activeFilter)
  )

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute animate-pulse bg-purple-500/10 w-48 h-48 rounded-full blur-2xl top-20 left-20"></div>
        <div className="absolute animate-pulse bg-pink-500/10 w-64 h-64 rounded-full blur-2xl bottom-20 right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeFilter === filter
                  ? 'bg-[#ff99cc] text-white scale-105'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-[#ff99cc]'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-purple-500/10 shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                
                <div className="absolute bottom-0 w-full p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#ff99cc]">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.category.map(cat => (
                        <span
                          key={cat}
                          className="px-3 py-1 text-xs font-medium bg-[#ff99cc]/20 text-[#ff99cc] rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#ff99cc] hover:text-[#ff66b3] transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#ff99cc] hover:text-[#ff66b3] transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <button className="px-6 py-2 bg-[#ff99cc] text-white rounded-full transform -translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}