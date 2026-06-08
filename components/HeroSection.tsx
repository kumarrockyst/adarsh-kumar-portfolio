'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeInUp, fadeInRight, staggerContainer } from '@/lib/animations'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Building Skills & Solving Problems'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping) return

    const timer = setTimeout(() => {
      if (displayedText.length < fullText.length) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      } else {
        setIsTyping(false)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [displayedText, isTyping, fullText])

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, #00d9ff 25%, #00d9ff 26%, transparent 27%, transparent 74%, #00d9ff 75%, #00d9ff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #7c3aed 25%, #7c3aed 26%, transparent 27%, transparent 74%, #7c3aed 75%, #7c3aed 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Title with gradient */}
            <div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold mb-4 text-balance"
              >
                <span className="bg-gradient-to-r from-[#00d9ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
                  ADARSH KUMAR
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-[#00d9ff] font-semibold"
              >
                Student at RNS Institute of Technology
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-400 mt-2"
              >
                MCA Student | Computer Science Enthusiast | Problem Solver
              </motion.p>
            </div>

            {/* Animated Status Panel */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 overflow-hidden group hover:border-[#00d9ff]/60 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Level:</span>
                  <span className="text-[#00d9ff] font-semibold">MCA Student</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Rank:</span>
                  <span className="text-[#a78bfa] font-semibold">Future Software Engineer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-[#7c3aed] font-semibold">Bengaluru, India</span>
                </div>
                <div className="border-t border-[#00d9ff]/20 pt-3 mt-3">
                  <span className="text-slate-400">Current Mission:</span>
                  <p className="text-[#00d9ff] font-semibold mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse" />
                    {displayedText}
                    {isTyping && (
                      <span className="w-1 h-5 bg-[#00d9ff] animate-pulse" />
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Call to action buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('#projects')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] text-[#0a0e27] font-bold hover:shadow-lg transition-all"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('#contact')}
                className="px-8 py-3 rounded-lg border-2 border-[#a78bfa] text-[#a78bfa] font-bold hover:bg-[#a78bfa]/10 transition-all"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side profile image */}
          <motion.div
            variants={fadeInRight}
            className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
          >
            {/* Glow effect background */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 40px rgba(0, 217, 255, 0.3)',
                  '0 0 60px rgba(124, 58, 237, 0.4)',
                  '0 0 40px rgba(0, 217, 255, 0.3)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-lg"
            />

            {/* Profile image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[#00d9ff]/50 hover:border-[#00d9ff] transition-all"
            >
              <img
                src="/profile.png"
                alt="Adarsh Kumar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating particles effect */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-[#00d9ff]/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#7c3aed]/20 rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#00d9ff] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-[#00d9ff]"
          />
        </div>
      </motion.div>
    </section>
  )
}
