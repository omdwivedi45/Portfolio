"use client";

import { useState } from "react";
import AnimatedPreloader from "@/components/ui/AnimatedPreloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import MilestonesSection from "@/components/sections/MilestonesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import GallerySection from "@/components/sections/GallerySection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-white">
      {/* Preloader Screen */}
      {!preloaderComplete && (
        <AnimatedPreloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Main Page Layout */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <MilestonesSection />
        <ProjectsSection />
        <CertificatesSection />
        <GallerySection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
