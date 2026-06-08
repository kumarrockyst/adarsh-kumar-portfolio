'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp } from '@/lib/animations'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1629]/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 hover:border-[#7c3aed]/60 transition-all group"
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

              <div className="relative">
                <h3 className="text-xl font-bold text-[#00d9ff] mb-2">Email</h3>
                <a
                  href="mailto:adarshkumar25mca@rnsit.ac.in"
                  className="text-slate-300 hover:text-[#00d9ff] transition-colors break-all"
                >
                  adarshkumar25mca@rnsit.ac.in
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 hover:border-[#7c3aed]/60 transition-all group"
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

              <div className="relative">
                <h3 className="text-xl font-bold text-[#00d9ff] mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/adarsh-kumar-881a95399/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#7c3aed] transition-colors"
                >
                  /in/adarsh-kumar-881a95399
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-6 hover:border-[#7c3aed]/60 transition-all group"
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

              <div className="relative">
                <h3 className="text-xl font-bold text-[#00d9ff] mb-2">Location</h3>
                <p className="text-slate-300">Bengaluru, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-[#0f1629]/80 to-[#1a1f3a]/80 backdrop-blur-xl border border-[#00d9ff]/30 rounded-lg p-8 hover:border-[#7c3aed]/60 transition-all"
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c3aed]/10 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300" />

              <div className="relative space-y-6">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-[#00d9ff] focus:outline-none transition-colors"
                    placeholder="Adarsh Kumar"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-[#00d9ff] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-[#00d9ff] focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] text-[#0a0e27] font-bold hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>

                {/* Success message */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-[#00d9ff] font-semibold text-sm"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
