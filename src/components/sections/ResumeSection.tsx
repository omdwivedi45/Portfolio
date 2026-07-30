"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck, FileCheck, ZoomIn, X, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import NeonButton from "@/components/ui/NeonButton";
import { USER_PROFILE } from "@/data/portfolioData";

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section
      id="resume"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="CREDENTIALS // DOSSIER"
          title="Curriculum"
          highlightTitle="Vitae."
          description="View official curriculum vitae directly on screen or download the print-ready PDF."
          accentColor="purple"
          statusList={[
            { label: "Status", value: "Verified PDF", highlight: true },
            { label: "Format", value: "A4 Printable Document" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 shadow-2xl relative overflow-hidden space-y-8"
        >
          {/* Top Banner Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-tech text-white">
                  Omprakash_Dwivedi_Resume.pdf
                </h3>
                <p className="text-xs font-tech text-zinc-400">
                  Data Analyst // B.Tech AI & ML // 2022–2026
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-tech px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 transition-all font-semibold"
              >
                <ZoomIn className="w-4 h-4 text-purple-400" />
                <span>Maximize Screen</span>
              </button>

              <a
                href={USER_PROFILE.resumeUrl}
                download="Omprakash_Dwivedi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-tech px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-950/40 transition-all font-bold uppercase tracking-wider"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Document Specification Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-tech text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">FILE_TYPE</span>
              <span className="text-white font-bold">PDF / Vector</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">FILE_SIZE</span>
              <span className="text-purple-300 font-bold">67.6 KB</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">VERIFICATION</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFIED_2026
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-zinc-500 block text-[10px]">CANDIDATE</span>
              <span className="text-zinc-300 font-bold">Omprakash Dwivedi</span>
            </div>
          </div>

          {/* PDF Visualizer Frame Box */}
          <div className="relative w-full rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden shadow-2xl">
            {/* Window Top Controls Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/10 text-xs font-tech text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-zinc-300 font-bold flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-purple-400" />
                  PDF_DOCUMENT_VIEWER // RESUME.PDF
                </span>
              </div>
              <a
                href={USER_PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors flex items-center gap-1"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Native PDF Viewer */}
            <div className="w-full relative min-h-[500px] sm:min-h-[700px] bg-zinc-900 flex items-center justify-center">
              <iframe
                src={`${USER_PROFILE.resumeUrl}#toolbar=0&navpanes=0`}
                className="w-full h-[500px] sm:h-[700px] border-none"
                title="Omprakash Dwivedi Resume Preview"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Maximize Lightbox Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-2xl"
            onClick={() => setIsPreviewOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full h-[90vh] bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <div>
                    <h3 className="text-sm font-bold font-tech text-white">
                      Omprakash Dwivedi — Official Resume
                    </h3>
                    <p className="text-[11px] font-tech text-zinc-400">
                      Print & PDF Viewer Mode
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={USER_PROFILE.resumeUrl}
                    download="Omprakash_Dwivedi_Resume.pdf"
                    className="flex items-center gap-1.5 text-xs font-tech px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full bg-zinc-900">
                <iframe
                  src={USER_PROFILE.resumeUrl}
                  className="w-full h-full border-none"
                  title="Omprakash Dwivedi Full Resume"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
