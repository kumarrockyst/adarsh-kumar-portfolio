'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const education = [
  {
    institution: 'RNS Institute of Technology',
    degree: 'Master of Computer Applications (MCA)',
    period: '2025 - 2027',
    status: 'Pursuing',
    icon: '🎓',
  },
  {
    institution: 'The National Degree College',
    degree: 'B.Sc Computer Science',
    period: '2020 - 2023',
    status: 'CGPA: 8.53',
    icon: '📚',
  },
  {
    institution: 'Surana PU College',
    degree: 'Pre-University (12th)',
    period: '2020',
    status: 'Percentage: 78.67%',
    icon: '📖',
  },
  {
    institution: 'Radhakrishna English High School',
    degree: 'Secondary Education (10th)',
    period: '2018',
    status: 'Percentage: 74.56%',
    icon: '🏫',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1629]/30">
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
              Education Timeline
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d9ff] via-[#7c3aed] to-[#a78bfa] origin-top hidden md:block"
          />

          {/* Timeline items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="relative group"
                    whileHover={{
                      boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/20 to-[#7c3aed]/20 opacity-0 group-hover:opacity-100 rounded-lg blur-lg transition-opacity duration-300" />

                    <div className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 hover:border-[#7c3aed]/60 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-[#00d9ff]">
                            {item.degree}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-sm mt-4 pt-4 border-t border-[#00d9ff]/20">
                        <span className="text-slate-300 font-semibold">
                          {item.period}
                        </span>
                        <span className="text-[#7c3aed] font-semibold">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  viewport={{ once: true }}
                  className="w-6 h-6 rounded-full border-4 border-[#7c3aed] bg-[#00d9ff] hidden md:block relative"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(124, 58, 237, 0.7)',
                        '0 0 0 10px rgba(124, 58, 237, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full"
                  />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
