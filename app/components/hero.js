'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Briefcase, Github, Linkedin, Twitter } from 'lucide-react'
import AnasImage from '../img/image.png'
export default function Hero() {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  }

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-purple-400 text-xl font-medium"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold space-y-2"
            >
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text block">
                M. Anas
              </span>
              <span className="text-white text-4xl md:text-5xl block">Mobile Developer</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-lg max-w-xl"
            >
              Transforming innovative ideas into exceptional mobile experiences with cutting-edge technology and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              {[
                { Icon: Github, href: "https://github.com/yourusername" },
                { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                { Icon: Twitter, href: "https://twitter.com/yourusername" }
              ].map(({ Icon, href }) => (
                <a 
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all flex items-center gap-2 group"
            >
              <Briefcase className="group-hover:animate-bounce" />
              Hire Me
            </Link>
            <Link
              href="/cv.pdf"
              className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-medium transition-all flex items-center gap-2 group"
            >
              <Download className="group-hover:animate-bounce" />
              Download CV
            </Link>
          </motion.div>

          <motion.div 
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-4 gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-500/20"
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '100K+', label: 'Users' },
              { value: '15+', label: 'Apps' },
              { value: '5+', label: 'Years' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statItemVariants}
                className="text-center group hover:bg-purple-500/10 p-2 rounded-lg transition-all"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:from-white group-hover:to-purple-200 transition-all">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-purple-300 transition-all">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full filter blur-3xl"></div>
          <Image
            src={AnasImage}
            alt="M. Anas - Mobile Developer"
            width={600}
            height={600}
            className="w-full hover:scale-105 transition-transform duration-300 relative z-10"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}