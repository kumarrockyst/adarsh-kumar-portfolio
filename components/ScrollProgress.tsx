'use client'

import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
      }}
      className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] via-[#7c3aed] to-[#a78bfa] z-40"
    />
  )
}
