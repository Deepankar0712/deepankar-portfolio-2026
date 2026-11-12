import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('instaspaces');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090F] border-t border-white/[0.06]">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Where I've made <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white">
                an impact.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            2+ years of continuous hands-on experience designing user interfaces and developing production-grade web applications.
          </p>
        </div>

        {/* Vertical Timeline Ledger */}
        <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {PORTFOLIO_DATA.experience.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.period.includes('Present');

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node marker */}
                <div className={`absolute -left-[31px] sm:-left-[55px] top-1.5 w-5 h-5 rounded-full border-4 border-[#07090F] transition-all duration-300 ${
                  isCurrent ? 'bg-indigo-500 ring-4 ring-indigo-500/20' : 'bg-zinc-600'
                }`} />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0D111A] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
                  
                  {/* Top Meta Line */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-semibold text-indigo-400">
                          {exp.company}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                            Active Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-lg border border-white/[0.04]">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
                        <MapPin className="w-3 h-3 text-zinc-500" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Highlight Pill */}
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 mb-6 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span><strong>Key Outcome:</strong> {exp.keyHighlight}</span>
                  </div>

                  {/* Bullet Responsibilities (Accordion) */}
                  <div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition mb-3"
                    >
                      <span>{isExpanded ? 'Hide Detailed Responsibilities' : 'Show All Responsibilities & Contributions'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="pt-3 border-t border-white/[0.06] space-y-2.5 animate-in fade-in duration-200">
                        {exp.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech stack used in this role */}
                  <div className="pt-5 mt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase mr-2">Stack:</span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
