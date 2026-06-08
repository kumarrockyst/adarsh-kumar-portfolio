'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const certificates = [
  {
    title: 'NPTEL Elite Certification',
    issuer: 'NPTEL - IIT',
    course: 'The Joy of Computing using Python',
    date: '2024',
    icon: '🏆',
  },
  {
    title: 'IIT Bombay Certification',
    issuer: 'IIT Bombay',
    course: 'RDBMS PostgreSQL Training',
    date: '2024',
    icon: '📜',
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1629]/30">
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
              Certifications
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                layoutId={`cert-${index}`}
                className="relative h-full"
                whileHover={{
                  y: -5,
                }}
              >
                {/* Glow background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/30 to-[#7c3aed]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  animate={{
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  className="relative bg-gradient-to-br from-[#0f1629]/90 to-[#1a1f3a]/90 backdrop-blur-xl border border-[#00d9ff]/30 rounded-xl p-8 overflow-hidden"
                  whileHover={{
                    borderColor: 'rgba(124, 58, 237, 0.6)',
                    boxShadow: '0 0 30px rgba(124, 58, 237, 0.3), inset 0 0 30px rgba(0, 217, 255, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ backgroundPosition: '0% 0%' }}
                    whileHover={{
                      backgroundPosition: '100% 100%',
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg, transparent 0%, rgba(0, 217, 255, 0.1) 50%, transparent 100%)',
                      backgroundSize: '200% 200%',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Header with icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <motion.h3
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                          className="text-2xl font-bold text-[#00d9ff] mb-2"
                        >
                          {cert.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-slate-400 text-sm"
                        >
                          {cert.issuer}
                        </motion.p>
                      </div>
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="text-4xl"
                      >
                        {cert.icon}
                      </motion.span>
                    </div>

                    {/* Course info */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-slate-300 mb-6 text-base leading-relaxed"
                    >
                      {cert.course}
                    </motion.p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#00d9ff]/20">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-[#7c3aed] font-semibold text-sm"
                      >
                        {cert.date}
                      </motion.span>
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/50 text-[#00d9ff] font-semibold hover:bg-[#00d9ff]/20 transition-all text-sm"
                      >
                        View Certificate
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
