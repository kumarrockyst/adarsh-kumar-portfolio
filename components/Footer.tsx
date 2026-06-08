'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:adarshkumar25mca@rnsit.ac.in',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    color: '#00d9ff',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adarsh-kumar-881a95399/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.826 0-9.749h3.554v1.381c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.709 1.388 3.709 4.371v5.607zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.955.77-1.704 1.963-1.704 1.192 0 1.915.749 1.929 1.704 0 .946-.737 1.704-1.977 1.704zm1.582 11.597H3.635V9.242h3.284v11.21zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    ),
    color: '#0077B5',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kumarrockyst',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: '#000000',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/TXd8XapEjG/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 00-.461.047A1.734 1.734 0 0012 1.69v6.29h6.256V12a.75.75 0 00.75-.75v-8.5c0-.966-.784-1.75-1.75-1.75h-4.822zm-.461 4.995a.75.75 0 100-1.5.75.75 0 000 1.5zm3 0a.75.75 0 100-1.5.75.75 0 000 1.5zm3 0a.75.75 0 100-1.5.75.75 0 000 1.5zM3.75 12a.75.75 0 00-.75.75v8.5c0 .966.784 1.75 1.75 1.75h8.5a1.75 1.75 0 001.75-1.75v-2.5a.75.75 0 00-1.5 0v2.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25H9a.75.75 0 000-1.5H4.5A1.75 1.75 0 003.75 12z"/>
      </svg>
    ),
    color: '#FFA500',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="relative border-t border-[#00d9ff]/20 bg-[#0a0e27] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                boxShadow: `0 0 20px ${link.color}80`,
              }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-[#0f1629] border transition-all"
              style={{
                borderColor: `${link.color}80`,
                color: link.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = link.color
                e.currentTarget.style.boxShadow = `0 0 20px ${link.color}80`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${link.color}80`
                e.currentTarget.style.boxShadow = 'none'
              }}
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00d9ff]/50 to-transparent mb-8" />

        {/* Footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-slate-400">
            <span>Designed & Built by</span>
            <span className="font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent">
              Adarsh Kumar
            </span>
          </div>

          <p className="text-slate-500 text-sm">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>

          <p className="text-slate-600 text-xs">
            © {currentYear} Adarsh Kumar. All rights reserved.
          </p>
        </motion.div>

        {/* Back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mt-8 block p-2 rounded-full bg-[#0f1629] border border-[#00d9ff]/30 text-[#00d9ff] hover:border-[#7c3aed] transition-all"
          title="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}
