"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck, FileCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import NeonButton from "@/components/ui/NeonButton";
import { USER_PROFILE } from "@/data/portfolioData";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Credentials me."
          title="Curriculum Vitae //"
          highlightTitle="Engineering Dossier"
          description="Download official curriculum vitae or inspect full technical background metadata."
          icon={<FileText className="w-3.5 h-3.5" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 shadow-2xl relative overflow-hidden space-y-8"
        >
          {/* Top Banner Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <FileCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-tech text-white">
                  RESUME_V2026.PDF
                </h3>
                <p className="text-xs font-tech text-zinc-400">
                  {USER_PROFILE.name} — Full-Stack & Data Architecture
                </p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <NeonButton
                href={USER_PROFILE.resumeUrl}
                target="_blank"
                variant="primary"
                icon={<Download className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Secure Download
              </NeonButton>
            </div>
          </div>

          {/* Metadata Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-tech text-xs">
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">FILE_SPEC</span>
              <span className="text-white font-bold">PDF / A-1b</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">FILE_SIZE</span>
              <span className="text-purple-300 font-bold">~2.4 MB</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">LAST_VERIFIED</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                2026_Q1
              </span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">ENCRYPTION</span>
              <span className="text-zinc-300 font-bold">SHA-256</span>
            </div>
          </div>

          {/* Interactive Document Preview Box */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center p-8 space-y-4 group overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1 relative z-10">
              <h4 className="text-base font-bold font-tech text-white">
                Interactive Document Preview
              </h4>
              <p className="text-xs text-zinc-400 max-w-md">
                Click below to open the complete document in full resolution or save the official PDF to your local drive.
              </p>
            </div>

            <a
              href={USER_PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-tech px-4 py-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600/30 transition-all font-semibold"
            >
              <span>Open External PDF View</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
