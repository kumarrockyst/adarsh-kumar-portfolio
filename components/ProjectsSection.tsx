'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with product listing, shopping cart, checkout, and payment integration.',
    image: '/project2.png',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/kumarrockyst',
    live: '#',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                className="relative h-full flex flex-col bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg overflow-hidden"
                whileHover={{
                  borderColor: 'rgba(124, 58, 237, 0.6)',
                  boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-[#1a1f3a]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e27]" />

                  {/* Tech badges */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end"
                  >
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#00d9ff]/20 border border-[#00d9ff]/50 text-[#00d9ff] text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-[#00d9ff] mb-3"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-slate-300 mb-6 flex-1"
                  >
                    {project.description}
                  </motion.p>

                  {/* All technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-[#1a1f3a] border border-[#7c3aed]/30 text-[#a78bfa] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/50 text-[#00d9ff] font-semibold hover:bg-[#00d9ff]/20 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-semibold hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/kumarrockyst"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] text-[#0a0e27] font-bold hover:shadow-lg transition-all"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
