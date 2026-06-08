'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { Star } from 'lucide-react'

export function GitHubSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1629]/30">
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
              GitHub Activity
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* GitHub profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.a
              href="https://github.com/kumarrockyst"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
              }}
              className="h-full block relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-8 hover:border-[#7c3aed]/60 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="mb-4 inline-block"
                >
                  <svg className="w-12 h-12 text-[#00d9ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.div>

                <h3 className="text-xl font-bold text-[#00d9ff] mb-2">
                  kumarrockyst
                </h3>
                <p className="text-slate-400 mb-6 text-sm">
                  Check out my repositories and contributions
                </p>

                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-6 py-2 rounded-lg bg-[#00d9ff]/20 border border-[#00d9ff]/50 text-[#00d9ff] font-semibold hover:bg-[#00d9ff]/30 transition-all text-sm"
                >
                  Visit Profile
                </motion.span>
              </div>
            </motion.a>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              {
                label: 'Public Repositories',
                value: '15+',
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
                color: 'from-[#00d9ff]',
              },
              {
                label: 'Total Stars',
                value: '120+',
                icon: <Star size={32} />,
                color: 'from-[#7c3aed]',
              },
              {
                label: 'Contributions',
                value: '500+',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 9c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm12 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-6 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/>
                  </svg>
                ),
                color: 'from-[#a78bfa]',
              },
              {
                label: 'Active Projects',
                value: '8+',
                icon: (
                  <div className="text-3xl">📱</div>
                ),
                color: 'from-[#00d9ff]',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className={`h-full relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 hover:border-[#7c3aed]/60 transition-all duration-300`}
                  whileHover={{
                    boxShadow: `0 0 20px rgba(0, 217, 255, 0.2)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

                  <div className="relative flex flex-col items-center justify-center h-full gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className={`text-[${stat.color.split('from-')[1].split(']')[0]}] opacity-80`}
                    >
                      {stat.icon}
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-400 text-center mt-1 font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contribution info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300" />

          <div className="relative">
            <h3 className="text-xl font-bold text-[#00d9ff] mb-4">
              Coding Activity
            </h3>

            {/* Mock contribution graph */}
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, week) => (
                <div key={week} className="flex gap-1.5">
                  {Array.from({ length: 7 }).map((_, day) => {
                    const contribution = Math.floor(Math.random() * 5)
                    const intensities = [
                      'bg-[#1a1f3a]',
                      'bg-[#00d9ff]/20',
                      'bg-[#00d9ff]/40',
                      'bg-[#7c3aed]/50',
                      'bg-[#7c3aed]/70',
                    ]

                    return (
                      <motion.div
                        key={`${week}-${day}`}
                        whileHover={{ scale: 1.2 }}
                        className={`w-4 h-4 rounded border border-[#00d9ff]/30 ${
                          intensities[contribution]
                        } hover:border-[#7c3aed] transition-all`}
                        title={`${contribution * 2} contributions`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>

            <p className="text-slate-400 text-sm mt-4">
              Active contributor with consistent coding activity. Building projects, solving problems, and continuously learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
