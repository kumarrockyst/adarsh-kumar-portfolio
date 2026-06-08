'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className={`fixed w-6 h-6 rounded-full border-2 border-[#00d9ff] pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
      />
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="fixed w-2 h-2 rounded-full bg-[#00d9ff] pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
