'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    color: 'from-[#00d9ff] to-[#a78bfa]',
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
    color: 'from-[#7c3aed] to-[#00d9ff]',
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Framer Motion'],
    color: 'from-[#a78bfa] to-[#7c3aed]',
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Continuous Learning'],
    color: 'from-[#00d9ff] to-[#7c3aed]',
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative h-full bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 hover:border-[#7c3aed]/60 transition-all duration-300"
                whileHover={{
                  boxShadow: `0 0 30px rgba(0, 217, 255, 0.2)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

                <div className="relative">
                  <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="relative group/skill"
                      >
                        <motion.div
                          animate={{
                            boxShadow: [
                              `0 0 10px rgba(0, 217, 255, 0.2)`,
                              `0 0 20px rgba(124, 58, 237, 0.3)`,
                              `0 0 10px rgba(0, 217, 255, 0.2)`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.1,
                          }}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1a1f3a] to-[#0f1629] border border-[#00d9ff]/40 hover:border-[#7c3aed]/60 transition-all"
                        >
                          <span className="text-[#00d9ff] group-hover/skill:text-[#a78bfa] font-semibold transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Progress bars section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
              Proficiency Levels
            </span>
          </h3>

          {[
            { skill: 'Python', level: 90 },
            { skill: 'JavaScript', level: 80 },
            { skill: 'Problem Solving', level: 85 },
            { skill: 'Web Development', level: 78 },
            { skill: 'SQL', level: 82 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 font-semibold">{item.skill}</span>
                <span className="text-[#00d9ff] font-bold">{item.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#1a1f3a] overflow-hidden border border-[#00d9ff]/20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
