"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { GALLERY_ITEMS } from "@/data/portfolioData";
import { GalleryItem } from "@/types";

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Pattern Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="MEDIA // GALLERY"
          title="Visual"
          highlightTitle="Moments."
          description="Professional photos, workplace moments at Mittsure Technologies, and verified certificate achievements."
          accentColor="indigo"
          statusList={[
            { label: "Media Status", value: "Curated Photos", highlight: true },
            { label: "Total Items", value: `${GALLERY_ITEMS.length}` },
          ]}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-tech px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold font-tech text-white">
                  {item.title}
                </h4>
                <p className="text-[11px] font-tech text-zinc-400">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-tech text-white">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs font-tech text-purple-400">
                    {selectedItem.caption}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/5">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
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
