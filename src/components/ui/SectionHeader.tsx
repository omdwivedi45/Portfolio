"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description?: string;
  icon?: ReactNode;
}

export default function SectionHeader({
  badge,
  title,
  highlightTitle,
  description,
  icon,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-3 max-w-2xl"
      >
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-tech tracking-wider uppercase">
          {icon}
          <span>// {badge}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-tech">
          {title}{" "}
          {highlightTitle && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-300">
              {highlightTitle}
            </span>
          )}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
