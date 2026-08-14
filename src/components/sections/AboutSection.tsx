"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Target, Terminal, ShieldCheck, Zap, Layers } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { USER_PROFILE } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Pattern Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="SHOWCASE // IDENTITY"
          title="Digital"
          highlightTitle="Profile."
          description="Detailed overview of my analytical passion, educational background in AI & ML, and career objective."
          accentColor="emerald"
          statusList={[
            { label: "Live Status", value: USER_PROFILE.statusBadge, highlight: true },
            { label: "Location", value: USER_PROFILE.location },
            { label: "Focus", value: "Dashboards and analytics" },
          ]}
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio Overview Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-500 relative group overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 blur-3xl rounded-full pointer-events-none group-hover:bg-purple-600/35 transition-all duration-500" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-tech text-white">
                    {USER_PROFILE.name}
                  </h3>
                  <span className="text-xs font-tech text-purple-400">
                    SPECIALIZATION: DATA_ANALYST
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                {USER_PROFILE.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/5 relative z-10 font-tech">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>KPI Reporting</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Dashboards and analytics</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Advanced Excel</span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Stack (Education & Career Objective) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group relative space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-tech px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {USER_PROFILE.education.period}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-tech text-purple-400 uppercase tracking-wider block">
                  EDUCATION //
                </span>
                <h4 className="text-lg font-bold font-tech text-white">
                  {USER_PROFILE.education.degree}
                </h4>
                <p className="text-xs font-semibold text-purple-300 font-tech mt-0.5">
                  {USER_PROFILE.education.field}
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {USER_PROFILE.education.institution}
                </p>
              </div>
            </div>

            {/* Career Objective Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group relative space-y-3">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-tech px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-white/5">
                  VISION
                </span>
              </div>

              <div>
                <span className="text-[10px] font-tech text-indigo-400 uppercase tracking-wider block">
                  CAREER OBJECTIVE //
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans mt-1">
                  "{USER_PROFILE.careerObjective}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
