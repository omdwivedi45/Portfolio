"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shapes, ExternalLink, Github, ArrowRight, Sparkles, Layers } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/data/portfolioData";

export default function ProjectsSection() {
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
          description="Curated data analysis projects, machine learning models, and interactive BI dashboards."
          accentColor="purple"
          statusList={[
            { label: "System Status", value: "Online", highlight: true },
            { label: "Selection", value: "Premium" },
            { label: "Total Archives", value: `${PROJECTS.length}` },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/20 backdrop-blur-md"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-white/5 group/image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[10px] font-tech text-purple-300 backdrop-blur-md uppercase">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-tech text-purple-300 flex items-center gap-1 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* External Action Links Overlay */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-zinc-950/90 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-500/40 backdrop-blur-md transition-all"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-purple-600/90 border border-purple-400/40 flex items-center justify-center text-white backdrop-blur-md hover:scale-105 transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
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

                  {/* Route Link for Detail Dossier */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-xs font-tech text-purple-400 hover:text-purple-300 font-semibold group/link"
                  >
                    <span>Analyze Full Architecture Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
