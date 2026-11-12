import React, { useState, useEffect } from 'react';
import { Layers, X, Eye, Check, MousePointer2 } from 'lucide-react';

interface DesignerInspectOverlayProps {
  enabled: boolean;
  onToggle: () => void;
}

export const DesignerInspectOverlay: React.FC<DesignerInspectOverlayProps> = ({ enabled, onToggle }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* 8pt Grid Overlay */}
      <div 
        className="fixed inset-0 z-40 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
          backgroundSize: '8px 8px'
        }}
      />

      {/* Floating Figma Cursor Following */}
      <div 
        className="fixed z-50 pointer-events-none transition-transform duration-75 flex items-center gap-1.5"
        style={{
          left: `${mousePos.x + 12}px`,
          top: `${mousePos.y + 12}px`
        }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-mono shadow-xl border border-indigo-400/40">
          <MousePointer2 className="w-3 h-3 fill-white" />
          <span>Deepankar • 8pt Grid</span>
        </div>
      </div>

      {/* Floating Designer HUD */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-[#0E131F]/95 border border-indigo-500/40 shadow-2xl backdrop-blur-xl text-xs text-white">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-zinc-300">Spec Mode: ACTIVE</span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <span className="font-mono text-indigo-400">WCAG: AAA (14.2:1)</span>
        <div className="h-4 w-px bg-white/10" />
        <span className="font-mono text-zinc-400">X: {mousePos.x}px Y: {mousePos.y}px</span>
        <button
          onClick={onToggle}
          className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition"
          title="Turn off Spec Mode"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
