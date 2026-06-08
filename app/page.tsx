'use client'

import { ParticleBackground } from '@/components/ParticleBackground'
import { Navbar } from '@/components/Navbar'
import { ScrollProgress } from '@/components/ScrollProgress'
import { CustomCursor } from '@/components/CustomCursor'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { EducationSection } from '@/components/EducationSection'
import { SkillsSection } from '@/components/SkillsSection'
import { CertificationsSection } from '@/components/CertificationsSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { GitHubSection } from '@/components/GitHubSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0a0e27] text-slate-100 overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />
      <ScrollProgress />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <GitHubSection />
      <AchievementsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
