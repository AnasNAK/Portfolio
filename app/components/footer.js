'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { Icon: Github, href: "https://github.com/yourusername" },
    { Icon: Twitter, href: "https://twitter.com/yourusername" },
    { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { Icon: Facebook, href: "https://facebook.com/yourusername" }
  ]

  const MotionLink = motion(Link)
  const MotionA = motion.a

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      className="bg-black text-white pt-20 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
              Dev Portfolio
            </h2>
            <p className="text-gray-300 hover:text-white transition-colors">
              Crafting innovative digital solutions that transform ideas into exceptional experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }) => (
                <MotionA 
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#ff99cc] transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </MotionA>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 text-xl">Services</h3>
            <ul className="space-y-3">
              {['Full Stack Development', 'Cloud Architecture', 'DevOps', 'AI Solutions'].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 10, color: '#9333EA' }}
                  className="text-gray-400"
                >
                  <MotionLink href="#" className="text-[#ff99cc] hover:text-[#ff66b3] transition-colors">
                    {service}
                  </MotionLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 text-xl">Company</h3>
            <ul className="space-y-3">
              {['About Me', 'Projects', 'Skills', 'Journey'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 10, color: '#9333EA' }}
                  className="text-gray-400"
                >
                  <MotionLink href="#" className="text-[#ff99cc] hover:text-[#ff66b3] transition-colors">
                    {item}
                  </MotionLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 text-xl">Resources</h3>
            <ul className="space-y-3">
              {['Tech Blog', 'Tutorials', 'Case Studies', 'Mentorship'].map((resource) => (
                <motion.li 
                  key={resource}
                  whileHover={{ x: 10, color: '#9333EA' }}
                  className="text-gray-400"
                >
                  <MotionLink href="#" className="text-[#ff99cc] hover:text-[#ff66b3] transition-colors">
                    {resource}
                  </MotionLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-gray-800"
        >
          {[
            { Icon: Mail, text: "dev.portfolio@techexpert.com" },
            { Icon: Phone, text: "+1 (555) TECH-PRO" },
            { Icon: MapPin, text: "San Francisco, CA - Remote Friendly" }
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gray-400 hover:text-[#ff99cc] transition-colors">
              <Icon className="w-4 h-4" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400">
            {currentYear} Dev Portfolio. All digital dreams realized.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((policy) => (
              <Link 
                key={policy} 
                href="#" 
                className="text-[#ff99cc] hover:text-[#ff66b3] text-sm transition-colors"
              >
                {policy} Policy
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer