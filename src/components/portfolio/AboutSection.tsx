import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Code2, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Monitor
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  const capabilityIcons = [Compass, Palette, Code2];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090F] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>ABOUT & POSITIONING</span>
        </div>

        {/* Two-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About Narrative & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
              More than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                pixels and code.
              </span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm Deepankar, a UI/UX Designer and Frontend Developer with over 2 years of experience creating user-focused digital products and responsive web applications.
              </p>
              <p>
                I enjoy working at the intersection of design and technology — understanding user needs, creating thoughtful interfaces, and translating those designs into clean, scalable frontend experiences.
              </p>
              <p className="text-zinc-400 text-sm">
                My approach combines design thinking, usability, performance, and development best practices to create digital products that look great and work seamlessly.
              </p>
            </div>

            {/* Designer Snapshot Box */}
            <div className="p-6 rounded-3xl bg-[#0D111C]/80 border border-white/[0.08] backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-mono uppercase text-indigo-400">Core Principle</span>
                <span className="text-[11px] font-mono text-zinc-500">Design × Code</span>
              </div>
              <p className="text-xs text-zinc-300 italic leading-relaxed">
                "When designers understand the DOM and engineers understand visual hierarchy, products transcend the ordinary."
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero design-to-code friction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Capability Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {PORTFOLIO_DATA.capabilities.map((cap, index) => {
              const Icon = capabilityIcons[index] || Layers;
              return (
                <div 
                  key={index}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-[#0E121D]/80 hover:bg-[#121726] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-indigo-600/20 border border-white/10 group-hover:border-indigo-500/40 flex items-center justify-center text-white transition-colors">
                        <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest block">
                          CAPABILITY {cap.num}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                          {cap.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 hidden sm:block">
                      {cap.tagline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2.5">
                      Key Deliverables & Methods:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cap.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-3 py-1 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-zinc-300 group-hover:border-indigo-500/20 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
