"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  icon?: ReactNode;
}

export default function NeonButton({
  children,
  variant = "primary",
  onClick,
  className,
  href,
  target,
  icon,
}: NeonButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500/50";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-600/40 hover:scale-[1.02]",
    secondary:
      "bg-zinc-900/80 text-zinc-100 border border-white/10 hover:border-purple-500/40 hover:bg-zinc-800/80 hover:text-white shadow-sm",
    outline:
      "bg-transparent text-purple-400 border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/60",
  };

  const Content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      {/* Light Reflection Sweep */}
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], className)}
      >
        {Content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {Content}
    </button>
  );
}
