'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const achievements = [
  {
    title: 'MCA Student',
    subtitle: 'RNS Institute of Technology',
    icon: '🎓',
    unlocked: true,
  },
  {
    title: 'NPTEL Elite',
    subtitle: 'Certified Elite in Python',
    icon: '⭐',
    unlocked: true,
  },
  {
    title: 'Database Expert',
    subtitle: 'IIT Bombay RDBMS Certification',
    icon: '🏆',
    unlocked: true,
  },
  {
    title: 'CS Graduate',
    subtitle: 'B.Sc Computer Science',
    icon: '📜',
    unlocked: true,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              Achievements Unlocked
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                layoutId={`achievement-${index}`}
                className="relative h-full flex flex-col items-center justify-center text-center"
                whileHover={{
                  y: -10,
                }}
              >
                {/* Glow background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/30 to-[#7c3aed]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"
                  animate={{
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* Badge card */}
                <motion.div
                  className="relative w-full bg-gradient-to-br from-[#0f1629]/90 to-[#1a1f3a]/90 backdrop-blur-xl border-2 border-[#00d9ff]/50 rounded-xl p-8 overflow-hidden hover:border-[#7c3aed] transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(124, 58, 237, 0.4), inset 0 0 30px rgba(0, 217, 255, 0.1)',
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d9ff]/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="text-6xl mb-4"
                    >
                      {achievement.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#00d9ff] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {achievement.subtitle}
                    </p>

                    {/* Unlock badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="inline-block px-4 py-1 rounded-full bg-[#00d9ff]/20 border border-[#00d9ff]/50 text-[#00d9ff] text-xs font-bold"
                    >
                      ✓ UNLOCKED
                    </motion.div>
                  </div>

                  {/* Border glow on hover */}
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
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="relative inline-block bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 border border-[#00d9ff]/30 rounded-lg px-8 py-4"
            whileHover={{
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
              borderColor: 'rgba(124, 58, 237, 0.5)',
            }}
          >
            <p className="text-slate-300 text-lg">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent">
                4
              </span>
              <span className="text-slate-400 ml-2">Achievements Unlocked</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
