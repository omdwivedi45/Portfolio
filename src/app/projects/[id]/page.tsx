"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Terminal, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl space-y-12">
          {/* Back Navigation Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-tech text-purple-400 hover:text-purple-300 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Project Archives</span>
          </Link>

          {/* Header Banner */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-tech px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase">
                {project.category}
              </span>
              <span className="text-xs font-tech text-zinc-500">// YEAR: {project.year}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold font-tech tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-950/30 bg-zinc-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 font-tech text-xs">
            <div>
              <span className="text-zinc-500 block mb-1">ARCHITECTURAL ROLE</span>
              <span className="text-white font-bold text-sm">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">DEVELOPMENT YEAR</span>
              <span className="text-purple-300 font-bold text-sm">{project.year}</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">LIVE DEMO / CODE</span>
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch App</span>
                </a>
                <span className="text-zinc-600">|</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key Highlights Dossier */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-6">
            <h3 className="text-xl font-bold font-tech text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-400" />
              <span>Architectural Highlights & Engineering Specs</span>
            </h3>

            <ul className="space-y-3 text-sm text-zinc-300 font-sans">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div className="space-y-4">
            <h3 className="text-sm font-tech font-bold uppercase tracking-wider text-purple-400">
              // Technology Stack Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-tech px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
