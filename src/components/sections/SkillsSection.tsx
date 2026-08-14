"use client";

import { motion } from "framer-motion";
import { Binary, Layout, Server, Cloud, Cpu, Sparkles, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-6 h-6 text-purple-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-indigo-400" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-sky-400" />;
      default:
        return <Cpu className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Ambient Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="CAPABILITIES // ARSENAL"
          title="Tech"
          highlightTitle="Matrix."
          description="Comprehensive taxonomy of data analytics tools, relational databases, Python, and BI dashboards."
          accentColor="purple"
          statusList={[
            { label: "Stack Status", value: "Verified", highlight: true },
            { label: "Categories", value: `${SKILL_CATEGORIES.length} Domains` },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[60px] bg-purple-600/10 -z-10" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-zinc-950 flex items-center justify-center border border-white/10 group-hover:border-purple-500/40 transition-all shadow-inner shrink-0">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-tech text-white group-hover:text-purple-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-tech transition-all ${
                      skill.featured
                        ? "bg-purple-950/20 border-purple-500/30 text-purple-200"
                        : "bg-zinc-950/60 border-white/5 text-zinc-300 hover:border-white/20"
                    }`}
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] text-zinc-500 font-bold px-2 py-0.5 rounded bg-zinc-900 border border-white/5">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
