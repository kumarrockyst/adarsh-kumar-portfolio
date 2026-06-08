'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const stats = [
  { label: 'MCA Student', value: 'Pursuing' },
  { label: 'B.Sc Computer Science', value: 'Graduate' },
  { label: 'CGPA', value: '8.53' },
  { label: 'Specialization', value: 'Python' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-8 hover:border-[#00d9ff]/60 transition-all duration-300 group"
              whileHover={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">Professional Summary</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  As a fresher, I aim to work in a dynamic environment where I can learn, improve my skills, and add value through sincere effort and dedication. Passionate about problem-solving and exploring emerging technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-300"
            >
              <p className="mb-4 text-base leading-relaxed">
                With a strong foundation in Computer Science and currently pursuing my Master&apos;s degree, I&apos;m committed to mastering full-stack development and contributing to innovative projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative group"
              >
                <motion.div
                  className="h-full bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 text-center hover:border-[#7c3aed]/60 transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                    borderColor: 'rgba(124, 58, 237, 0.6)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <p className="text-3xl font-bold text-[#7c3aed] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 font-semibold">{stat.label}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
