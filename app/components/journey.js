'use client'

import { motion } from 'framer-motion'

export default function Journey() {
  const timelineData = [
    {
      id: 1,
      title: 'EPS Education',
      role: 'Full Stack Developer (Stage)',
      period: '2024 (3 months)',
      achievements: [
        'Developed a comprehensive platform for Moroccan students',
        'Built frontend using Next.js and Tailwind CSS',
        'Implemented backend functionality using Laravel REST API',
        'Collaborated with team to ensure project deliverables'
      ]
    },
    {
      id: 2,
      title: 'Multiple Projects',
      role: 'Freelance Developer',
      period: '2023 - Present',
      projects: [
        {
          name: 'Online Trends',
          tech: 'Laravel, JavaScript, Tailwind CSS, JS'
        },
        {
          name: 'Atlas Catsus',
          tech: 'PHP, Laravel, Tailwind CSS, JS'
        },
        {
          name: 'Lemmer d\'Outils',
          tech: 'Full Stack Development'
        }
      ]
    },
    {
      id: 3,
      title: 'Youcode (UMGP)',
      role: 'Full Stack Development Student',
      period: '2023 - 2025 (In Progress)',
      achievements: [
        'Intensive training in web and mobile development',
        'Worked with PHP, Laravel, JavaScript, and Java technologies',
        'Participated in project-based learning with real-world applications',
        'Collaborated in team projects using Agile methodologies'
      ]
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-[#0B0B0F] to-[#1A1A2E] overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute animate-pulse bg-purple-500/10 w-48 h-48 rounded-full blur-2xl top-20 left-20"></div>
        <div className="absolute animate-pulse bg-pink-500/10 w-64 h-64 rounded-full blur-2xl bottom-20 right-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-purple-500 text-sm font-medium mb-2 tracking-widest uppercase">
            EXPERIENCE
          </p>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building innovative web solutions with modern technologies and continuous learning through
            practical experience and education.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/30 to-transparent"
          ></motion.div>

          {/* Timeline entries */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 
                  animate-ping-slow absolute z-20"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 z-30"></div>

                {/* Content card with hover effect */}
                <div className={`w-[calc(50%-2rem)] group ${
                  index % 2 === 0 ? 'pr-8' : 'pl-8'
                }`}>
                  <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 
                    transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl 
                    group-hover:shadow-purple-500/20">
                    <h3 className="text-purple-400 font-medium mb-1 transition-colors group-hover:text-purple-300">
                      {item.title}
                    </h3>
                    <h4 className="text-white font-bold mb-2 text-xl">{item.role}</h4>
                    <p className="text-gray-400 text-sm mb-4">{item.period}</p>

                    {item.achievements && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start 
                            group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.projects && (
                      <div className="space-y-3 mt-4">
                        <p className="text-gray-300 font-medium">Projects:</p>
                        {item.projects.map((project, i) => (
                          <div key={i} className="text-sm">
                            <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
                              {project.name}
                            </p>
                            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                              {project.tech}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}