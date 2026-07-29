"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, X, ZoomIn } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CERTIFICATES } from "@/data/portfolioData";
import { CertificateItem } from "@/types";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section
      id="certifications"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="ACCREDITATIONS // CERTIFICATES"
          title="Verified"
          highlightTitle="Credentials."
          description="Official certificates from Deloitte, Tata Group, Microsoft, Cisco, Skill Nation, Titans Learning, and be10X."
          accentColor="emerald"
          statusList={[
            { label: "Verification", value: "Verified Credentials", highlight: true },
            { label: "Total Certificates", value: `${CERTIFICATES.length}` },
          ]}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group relative"
            >
              <div className="space-y-4">
                {/* Certificate Preview Image Box */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950 border border-white/10 cursor-pointer group/img"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-tech">
                    <ZoomIn className="w-4 h-4 text-purple-400" />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                {/* Header Icon & Verification Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-tech text-purple-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-tech px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    VERIFIED
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold font-tech text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  {cert.date && (
                    <span className="text-xs font-tech text-zinc-500 block mt-0.5">
                      Issued: {cert.date}
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-tech px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 text-xs font-tech text-purple-400 hover:text-purple-300 font-semibold"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Inspect Certificate Image</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-tech text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-tech text-purple-400">
                    {selectedCert.issuer} — {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/5">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
