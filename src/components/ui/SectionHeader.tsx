"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatusInfo {
  label: string;
  value: string;
  highlight?: boolean;
}

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description?: string;
  icon?: ReactNode;
  accentColor?: "purple" | "emerald" | "indigo" | "pink";
  statusList?: StatusInfo[];
}

export default function SectionHeader({
  badge,
  title,
  highlightTitle,
  description,
  accentColor = "purple",
  statusList,
}: SectionHeaderProps) {
  const lineGradient =
    accentColor === "emerald"
      ? "from-emerald-500 to-transparent"
      : accentColor === "pink"
      ? "from-pink-500 to-transparent"
      : accentColor === "indigo"
      ? "from-indigo-500 to-transparent"
      : "from-purple-500 to-transparent";

  const textColor =
    accentColor === "emerald"
      ? "text-emerald-400"
      : accentColor === "pink"
      ? "text-pink-400"
      : accentColor === "indigo"
      ? "text-indigo-400"
      : "text-purple-400";

  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 md:gap-8">
      {/* Left Title Box */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl space-y-3"
      >
        {/* Decorative Bar & Badge */}
        <div className="flex items-center gap-3">
          <span className={`w-10 sm:w-14 h-[2px] bg-gradient-to-r ${lineGradient}`} />
          <span className={`text-[10px] sm:text-xs font-bold ${textColor} tracking-[0.3em] uppercase font-tech`}>
            {badge}
          </span>
        </div>

        {/* Giant Tech Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-tech text-white uppercase tracking-tighter leading-[0.95] break-words">
          {title}{" "}
          {highlightTitle && (
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-300% animate-gradient">
              {highlightTitle}
            </span>
          )}
        </h2>

        {/* Optional Description */}
        {description && (
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium pt-2">
            {description}
          </p>
        )}
      </motion.div>

      {/* Right Status Widget (Rishabh Style Bar) */}
      {statusList && statusList.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-white/10 pl-4 lg:pl-0 lg:pr-4 py-1 self-start lg:self-end shrink-0"
        >
          {statusList.map((item, idx) => (
            <p key={idx} className="leading-relaxed">
              {item.label}:{" "}
              <span className={item.highlight ? "text-emerald-400 font-bold" : "text-zinc-200"}>
                {item.value}
              </span>
            </p>
          ))}
        </motion.div>
      )}
    </div>
  );
}

