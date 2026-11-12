import React, { useState } from 'react';
import { 
  ArrowDown, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  Code2, 
  Layers, 
  ArrowUpRight, 
  Check, 
  Edit3, 
  Download,
  ShieldCheck,
  MousePointer2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  statusText: string;
  isAvailable: boolean;
  onUpdateStatus: (available: boolean, text: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenResume, 
  statusText, 
  isAvailable, 
  onUpdateStatus 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localText, setLocalText] = useState(statusText);
  const [localAvailable, setLocalAvailable] = useState(isAvailable);

  const handleSaveStatus = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStatus(localAvailable, localText);
    setIsEditing(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden">
      {/* Dynamic Background Ambient Gradients */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-modern pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Live Editable Availability Badge */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#0E131F]/90 border border-white/10 shadow-xl backdrop-blur-xl">
              <span className="flex h-3 w-3 relative">
                {isAvailable && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                )}
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isAvailable ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              </span>
              
              <span className="text-xs font-mono text-zinc-300">
                {statusText}
              </span>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 underline underline-offset-2 ml-1"
                title="Edit your availability badge"
              >
                {isEditing ? 'Close' : 'Edit'}
              </button>
            </div>

            {/* Editable Status Dialog */}
            {isEditing && (
              <form 
                onSubmit={handleSaveStatus}
                className="p-4 rounded-2xl bg-[#0F1422] border border-indigo-500/40 shadow-2xl space-y-3 max-w-md animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="text-xs font-semibold text-white flex items-center justify-between">
                  <span>Update Availability Status</span>
                  <span className="text-[10px] font-mono text-zinc-500">Live Backend Sync</span>
                </div>
                <input
                  type="text"
                  value={localText}
                  onChange={(e) => setLocalText(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="e.g. Available for select opportunities"
                />
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localAvailable}
                      onChange={(e) => setLocalAvailable(e.target.checked)}
                      className="rounded border-zinc-700 text-indigo-600 focus:ring-0"
                    />
                    <span>Show Green Pulse</span>
                  </label>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                  >
                    Save Status
                  </button>
                </div>
              </form>
            )}

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                Designing experiences. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white">
                  Building possibilities.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
                Hey, I'm <strong className="text-white font-semibold">Deepankar Sharma</strong> — a UI/UX Designer and Frontend Developer passionate about transforming complex ideas into intuitive, beautiful, and functional digital experiences.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-2xl bg-[#0D111A]/80 border border-white/[0.08] backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-1">Location</span>
                <span className="text-white font-semibold text-xs sm:text-sm flex items-center gap-1 truncate">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Gurgaon, India
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0D111A]/80 border border-white/[0.08] backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-1">Experience</span>
                <span className="text-white font-semibold text-xs sm:text-sm flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 2+ Years
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0D111A]/80 border border-white/[0.08] backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-1">Focus</span>
                <span className="text-white font-semibold text-xs sm:text-sm flex items-center gap-1 truncate">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> UI/UX × Eng
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('work')}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-white/25 transition-all flex items-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 rounded-2xl text-xs font-mono text-zinc-400 hover:text-white transition flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Artboard (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* The Figma Designer Canvas Card */}
            <div className="relative rounded-3xl bg-[#0E131F]/90 border border-white/15 p-2 sm:p-3 shadow-2xl backdrop-blur-2xl">
              
              {/* Figma Artboard Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090C14] rounded-2xl mb-3 border border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-white font-medium">❖ Deepankar_Sharma.craft</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-zinc-500">
                  <span>W: 520px</span>
                  <span>H: 640px</span>
                  <span className="text-emerald-400">AutoLayout</span>
                </div>
              </div>

              {/* Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#121828] to-[#070A12] border border-white/10 group">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt="Deepankar Sharma"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-black/20" />

                {/* Floating Designer Inspection Pins */}
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white flex items-center gap-2 shadow-xl">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                  <span>UI/UX Designer</span>
                </div>

                <div className="absolute bottom-16 right-4 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white flex items-center gap-2 shadow-xl">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Angular & React</span>
                </div>

                {/* Bottom Portrait Card Info */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0A0E18]/85 backdrop-blur-xl border border-white/15 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Deepankar Sharma</h3>
                    <p className="text-[11px] text-zinc-400">Gurgaon, Haryana, India</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block font-semibold">2+ Years</span>
                    <span className="text-[11px] text-zinc-300 font-mono">Verified Eng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/30 blur-3xl pointer-events-none rounded-full" />
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest">SCROLL</span>
        <div className="w-4 h-7 rounded-full border border-zinc-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
