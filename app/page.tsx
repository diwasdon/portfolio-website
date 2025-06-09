"use client"

import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { Footer } from "@/components/sections/footer"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection/>
      <Footer />
    </div>
  )
}
