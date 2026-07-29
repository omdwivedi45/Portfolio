"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { MILESTONES } from "@/data/portfolioData";

export default function MilestonesSection() {
  return (
    <section
      id="milestones"
      className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Pattern Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Milestones"
          title="Career Achievements //"
          highlightTitle="Key Badges"
          description="Key educational milestones, certifications, workshops, and industry training programs completed."
          icon={<Trophy className="w-3.5 h-3.5" />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MILESTONES.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="text-3xl shrink-0 p-3 rounded-xl bg-zinc-950 border border-white/5 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-tech text-purple-400 uppercase tracking-wider block">
                  {m.category}
                </span>
                <h4 className="text-sm font-bold font-tech text-white group-hover:text-purple-200 transition-colors">
                  {m.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
