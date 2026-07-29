"use client";

import { useEffect, useState } from "react";

export default function AmbientGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 radial-mask" />

      {/* Dynamic Mouse Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />
    </div>
  );
}
