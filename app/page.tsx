"use client"

import Hero from "@/app/ui/home/Hero";
import AboutMe from "@/app/ui/home/AboutMe";
import ExperienceSection from '@/app/ui/home/Experience';
import Projects from "@/app/ui/home/Projects";
import Contact from "@/app/ui/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutMe />
      <ExperienceSection />
      <Projects />
      <Contact />
    </div>
  )
}