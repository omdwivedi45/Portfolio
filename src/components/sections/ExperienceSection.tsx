"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Terminal, CheckCircle2, ZoomIn, X, Camera } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCES } from "@/data/portfolioData";
import { ExperienceItem } from "@/types";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0]?.id || null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ title: string; image: string } | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Pattern Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="ARCHITECTURE // LOG"
          title="Career"
          highlightTitle="Timeline."
          description="Chronological log of professional experience, engineering impact, and workplace photos."
          accentColor="indigo"
          statusList={[
            { label: "System Status", value: "Active Timeline", highlight: true },
            { label: "Total Logs", value: `${EXPERIENCES.length} Roles` },
          ]}
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/50 via-indigo-500/20 to-transparent -translate-x-1/2 z-0 hidden md:block" />

          <div className="space-y-12 relative z-10">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node Ring */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-zinc-950 border border-purple-500/40 items-center justify-center text-purple-400 z-20 shadow-lg shadow-purple-950/50 group-hover:scale-125 group-hover:border-purple-400 transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Card Main Container */}
                  <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 shadow-xl space-y-6">
                    {/* Top Row Header */}
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-tech px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {exp.period}
                          </span>
                          {exp.isCurrent && (
                            <span className="text-[10px] font-tech px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                              Current Role
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold font-tech text-white group-hover:text-purple-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-tech text-zinc-400">
                          <span className="text-zinc-200 font-semibold">{exp.company}</span>
                          <span className="flex items-center gap-1 text-zinc-500">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Expand / Collapse Button */}
                      <button
                        className="inline-flex items-center gap-2 text-xs font-tech text-purple-400 hover:text-purple-300 self-start md:self-auto bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-white/5"
                        aria-label="Expand Dossier"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{isExpanded ? "Collapse Entry" : "Analyze Log Entry // Expand Dossier"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Summary Description */}
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Optional Workplace Photo Preview Box */}
                    {exp.image && (
                      <div className="pt-2">
                        <div
                          onClick={() => setSelectedPhoto({ title: `${exp.company} — Workplace Photo`, image: exp.image! })}
                          className="relative aspect-[16/10] sm:aspect-[16/9] max-w-md rounded-xl overflow-hidden bg-zinc-950 border border-white/10 cursor-pointer group/img shadow-xl"
                        >
                          <Image
                            src={exp.image}
                            alt={exp.company}
                            fill
                            className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-40" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-tech z-10">
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-md">
                              <Camera className="w-3.5 h-3.5 text-purple-400" />
                              <span>{exp.company} Workplace Photo</span>
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-purple-300">
                              <ZoomIn className="w-3.5 h-3.5" /> Click to Zoom
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Expandable Achievements Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-white/5 space-y-4 overflow-hidden"
                        >
                          <div className="space-y-2">
                            <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-purple-400">
                              // Key Achievements & Impact
                            </h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              {exp.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skill Pills */}
                          <div className="pt-2">
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="text-xs font-tech px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-white/5 hover:border-purple-500/30 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Workplace Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-2xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden p-6 space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-tech text-white">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs font-tech text-purple-400">
                    Mittsure Technologies Office — Relationship Manager Role
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-[70vh] max-h-[650px] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 flex items-center justify-center">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
