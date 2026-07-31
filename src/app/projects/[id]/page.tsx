"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Terminal, RefreshCw, BarChart2, Play, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
  const [iframeKey, setIframeKey] = useState(0);
  const [activeTab, setActiveTab] = useState<"live" | "preview">(project.liveUrl ? "live" : "preview");

  const handleRefreshIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl space-y-12">
          {/* Back Navigation Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-tech text-purple-400 hover:text-purple-300 px-4 py-2 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-purple-500/40 backdrop-blur-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Project Archives</span>
          </Link>

          {/* Header Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-tech px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase">
                {project.category}
              </span>
              <span className="text-xs font-tech text-zinc-500">// YEAR: {project.year}</span>
              {project.featured && (
                <span className="text-xs font-tech px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  FEATURED PROJECT
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold font-tech tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>
          </div>

          {/* Interactive Live Dashboard Engine / Image Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <BarChart2 className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-bold font-tech text-white">
                  {project.liveUrl ? "Interactive Live Visualization Engine" : "Project Showcase"}
                </h2>
              </div>

              {project.liveUrl && (
                <div className="flex items-center gap-2 bg-zinc-900/80 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveTab("live")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-tech transition-all flex items-center gap-1.5 ${
                      activeTab === "live"
                        ? "bg-purple-600 text-white font-semibold shadow-lg shadow-purple-900/40"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Live Interactive Dashboard</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-tech transition-all ${
                      activeTab === "preview"
                        ? "bg-purple-600 text-white font-semibold shadow-lg shadow-purple-900/40"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span>Static Snapshot</span>
                  </button>
                </div>
              )}
            </div>

            {/* Container for Embedded Live Visualization */}
            {activeTab === "live" && project.liveUrl ? (
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/40 bg-zinc-950 flex flex-col">
                {/* Control Bar Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-white/10 font-tech text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-zinc-300 font-semibold uppercase tracking-wider">
                      LIVE INTERACTIVE HUB STREAM
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRefreshIframe}
                      className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1"
                      title="Reload Dashboard"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-[11px]">Reload</span>
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all flex items-center gap-1 font-semibold text-[11px]"
                    >
                      <span>Open External Window</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Embedded Dashboard iframe */}
                <div className="w-full h-[650px] md:h-[750px] bg-zinc-950">
                  <iframe
                    key={iframeKey}
                    src={project.liveUrl}
                    className="w-full h-full border-0"
                    title={`${project.title} Live Visualization`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              /* Project Static Image Preview */
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-950/30 bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Metadata Grid & Action Buttons */}
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
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1.5 font-bold transition-all shadow-lg shadow-purple-950/50"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live App</span>
                  </a>
                ) : (
                  <span className="text-zinc-500 font-mono">N/A</span>
                )}
                {project.githubUrl && (
                  <>
                    <span className="text-zinc-600">|</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white flex items-center gap-1 font-mono"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </>
                )}
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
                  <span className="leading-relaxed">{highlight}</span>
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
                  className="text-xs font-tech px-3.5 py-2 rounded-xl bg-zinc-900 text-zinc-200 border border-white/10 shadow-sm"
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

