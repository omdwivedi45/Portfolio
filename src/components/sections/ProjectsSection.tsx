"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Sparkles, X, Play, RefreshCw, Maximize2, Monitor, Activity } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";

export default function ProjectsSection() {
  const [activeLiveProject, setActiveLiveProject] = useState<Project | null>(null);
  const [liveCardIds, setLiveCardIds] = useState<Record<string, boolean>>({
    "data-analyst-portfolio": true,
    "netflix-analytics": true,
    "splitfare": true,
  });
  const [iframeKey, setIframeKey] = useState(0);

  const toggleCardLiveView = (id: string) => {
    setLiveCardIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="projects"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Background Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="SHOWCASE // ARCHIVE"
          title="Featured"
          highlightTitle="Works."
          description="Curated data analysis projects, enterprise BI dashboards, and interactive analytics applications."
          accentColor="purple"
          statusList={[
            { label: "System Status", value: "Online", highlight: true },
            { label: "Selection", value: "Premium" },
            { label: "Total Archives", value: `${PROJECTS.length}` },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            const isCardLive = project.liveUrl && liveCardIds[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/20 backdrop-blur-md"
              >
                {/* Interactive Card Header Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-white/5 group/image">
                  {isCardLive ? (
                    /* Live Embedded Web Dashboard Stream inside Card */
                    <div className="w-full h-full relative bg-zinc-950 flex flex-col">
                      {/* Top Cyber Browser Bar */}
                      <div className="z-20 flex items-center justify-between px-3 py-1.5 bg-zinc-900/95 border-b border-white/10 text-[10px] font-tech text-zinc-300 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                            <Activity className="w-3 h-3 text-emerald-400" />
                            LIVE INTERACTIVE DASHBOARD STREAM
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleCardLiveView(project.id)}
                            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/10 transition-colors text-[10px]"
                          >
                            📷 Static Cover
                          </button>
                          <button
                            onClick={() => setActiveLiveProject(project)}
                            className="px-2 py-0.5 rounded bg-purple-600/80 hover:bg-purple-600 text-white font-semibold flex items-center gap-1 transition-colors text-[10px]"
                          >
                            <Maximize2 className="w-2.5 h-2.5" />
                            <span>Expand</span>
                          </button>
                        </div>
                      </div>

                      {/* Live Web App iframe */}
                      <iframe
                        src={project.liveUrl}
                        className="w-full flex-grow border-0 pointer-events-auto"
                        title={`${project.title} Card Live View`}
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    /* Cover Image View with Dynamic Analytics Overlay */
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-90" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[10px] font-tech text-purple-300 backdrop-blur-md uppercase">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-tech text-purple-300 flex items-center gap-1 backdrop-blur-md">
                            <Sparkles className="w-3 h-3 text-purple-400" />
                            FEATURED
                          </span>
                        )}
                        {project.liveUrl && (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-tech text-emerald-300 flex items-center gap-1 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            LIVE INTERACTIVE
                          </span>
                        )}
                      </div>

                      {/* External Action Links Overlay */}
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl bg-zinc-950/90 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-500/40 backdrop-blur-md transition-all"
                            title="View Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl bg-purple-600/90 border border-purple-400/40 flex items-center justify-center text-white backdrop-blur-md hover:scale-105 transition-all shadow-lg shadow-purple-950/50"
                            title="Open Live Dashboard"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      {/* Cyber Interactive Hover CTA Overlay */}
                      {project.liveUrl && (
                        <div className="absolute inset-0 z-10 bg-purple-950/30 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 p-4">
                          <button
                            onClick={() => toggleCardLiveView(project.id)}
                            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-tech text-xs font-bold shadow-xl border border-purple-400/40 backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2"
                          >
                            <Monitor className="w-4 h-4" />
                            <span>Load Live Interactive Dashboard</span>
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Card Body Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-tech text-zinc-500">
                      <span>ROLE: {project.role}</span>
                      <span>YEAR: {project.year}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold font-tech text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-tech px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Bar: Live Interactive Controls & Dossier Route */}
                    <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                      {project.liveUrl ? (
                        <button
                          onClick={() => {
                            if (!isCardLive) toggleCardLiveView(project.id);
                            setActiveLiveProject(project);
                            setIframeKey((k) => k + 1);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-xs font-tech text-purple-300 hover:text-purple-200 transition-all font-semibold"
                        >
                          <Play className="w-3 h-3 fill-current text-purple-400" />
                          <span>Full Screen Interactive View</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-xs font-tech text-purple-400 hover:text-purple-300 font-semibold group/link ml-auto"
                      >
                        <span>Analyze Full Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Modal for Interactive Live Visualization Stream */}
      <AnimatePresence>
        {activeLiveProject && activeLiveProject.liveUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveLiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl h-[85vh] rounded-2xl bg-zinc-950 border border-purple-500/40 shadow-2xl shadow-purple-950/60 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-white/10 font-tech">
                <div className="flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      {activeLiveProject.title}
                    </h4>
                    <span className="text-[11px] text-zinc-400 block">
                      LIVE INTERACTIVE EMBEDDED DASHBOARD
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIframeKey((prev) => prev + 1)}
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1.5 text-xs"
                    title="Reload Dashboard"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Reload</span>
                  </button>
                  <a
                    href={activeLiveProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-purple-950/40"
                  >
                    <span>Open External Window</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveLiveProject(null)}
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body iframe */}
              <div className="relative flex-grow bg-zinc-950">
                <iframe
                  key={iframeKey}
                  src={activeLiveProject.liveUrl}
                  className="w-full h-full border-0"
                  title={`${activeLiveProject.title} Interactive Stream`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3 bg-zinc-900/90 border-t border-white/10 font-tech text-xs text-zinc-400">
                <span>Interact with charts, click bar filters, and explore 3D analytics directly.</span>
                <Link
                  href={`/projects/${activeLiveProject.id}`}
                  onClick={() => setActiveLiveProject(null)}
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
                >
                  <span>View Full Architecture Specs</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


