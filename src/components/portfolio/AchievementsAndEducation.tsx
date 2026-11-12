import React from 'react';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  BookOpen,
  Calendar,
  MapPin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const AchievementsAndEducation: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* SECTION 08 — Achievements & Highlights */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>VERIFIED TRACK RECORD</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-12">
            Proven Achievements & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              Technical Milestones.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PORTFOLIO_DATA.achievements.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-[#0D111A] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-display block mb-1">
                    {(item as any).number || (item as any).metric}
                  </span>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2 font-mono">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-3 border-t border-white/[0.04]">
                  {(item as any).description || (item as any).detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 09 — Education & Certifications */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Formal Education (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Computer Science & IT Degrees
              </h3>
              
              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-3xl bg-[#0D111A] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-indigo-400 uppercase">
                        {edu.period}
                      </span>
                      <span className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-zinc-300 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-500 pt-1">
                      {edu.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industry Certifications (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>VERIFIED CREDENTIALS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Certifications & Specializations
              </h3>

              <div className="space-y-3">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0B0E17] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-indigo-400 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-zinc-400">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.04]">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
