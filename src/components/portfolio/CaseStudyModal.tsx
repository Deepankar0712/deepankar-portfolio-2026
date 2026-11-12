import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  Cpu
} from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'ux' | 'frontend' | 'impact'>('overview');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div 
        className="relative flex flex-col w-full max-w-5xl h-[94vh] max-h-[960px] bg-[#0A0D15] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0E121C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                  {project.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400 font-mono">{project.duration}</span>
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl font-display">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#080B12] border-b border-white/[0.06] overflow-x-auto">
          <div className="flex items-center gap-2">
            {[
              { id: 'overview', label: '01. Overview & Problem', icon: Target },
              { id: 'ux', label: '02. UI/UX Decisions', icon: Sparkles },
              { id: 'frontend', label: '03. Frontend Architecture', icon: Code2 },
              { id: 'impact', label: '04. Verified Impact', icon: BarChart3 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    isSelected 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Viewport preview toggle */}
          <div className="hidden sm:flex items-center gap-1 bg-[#0E131F] p-1 rounded-lg border border-white/[0.08]">
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`p-1.5 rounded transition ${previewDevice === 'desktop' ? 'bg-white/15 text-white' : 'text-zinc-500 hover:text-white'}`}
              title="Desktop Mockup"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`p-1.5 rounded transition ${previewDevice === 'mobile' ? 'bg-white/15 text-white' : 'text-zinc-500 hover:text-white'}`}
              title="Mobile Responsive"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10">
          
          {/* Main Visual Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#07090F] shadow-2xl">
            {/* macOS Browser Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0D111A] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-black/40 rounded-md border border-white/[0.06] text-[11px] font-mono text-zinc-400 max-w-sm truncate">
                <span className="text-emerald-400">https://</span>{project.title.toLowerCase().replace(/\s+/g, '')}.work/experience
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">
                {previewDevice === 'desktop' ? '1920 × 1080 Viewport' : '390 × 844 Mobile'}
              </div>
            </div>

            {/* Project Image Frame */}
            <div className={`flex items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-[#090C14] to-[#05070B] ${previewDevice === 'mobile' ? 'max-w-xs mx-auto py-8' : ''}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[460px] object-cover rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Tab 01: Overview & Problem */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase text-indigo-400 block mb-1">My Role</span>
                  <span className="text-white font-semibold text-sm">{project.role}</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase text-indigo-400 block mb-1">Company / Context</span>
                  <span className="text-white font-semibold text-sm">{project.company}</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase text-indigo-400 block mb-1">Duration & Timeline</span>
                  <span className="text-white font-semibold text-sm">{project.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-400" />
                  <span>The Core Challenge & Problem Framed</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-[#0E131F]/70 p-6 rounded-2xl border border-white/[0.06]">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span>The Strategic Solution</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-[#0E131F]/70 p-6 rounded-2xl border border-white/[0.06]">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Tab 02: UX Decisions */}
          {activeTab === 'ux' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Key Interaction Patterns & User Journey Enhancements</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#0E121C] border border-white/[0.08] hover:border-indigo-500/30 transition">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <h5 className="font-semibold text-white text-sm">{feat.title}</h5>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 03: Frontend Architecture */}
          {activeTab === 'frontend' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Frontend Technology Stack & Component Structure</span>
              </h4>

              <div className="p-6 rounded-2xl bg-[#080B12] border border-white/[0.08]">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">Technologies Leveraged</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5"
                    >
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E131F]/80 border border-white/[0.06] text-sm text-zinc-300 space-y-3">
                <h5 className="font-semibold text-white">Engineering Execution Highlights:</h5>
                <ul className="space-y-2 text-xs text-zinc-400 list-disc list-inside">
                  <li>Engineered responsive, mobile-first layouts supporting seamless multi-breakpoint experiences.</li>
                  <li>Implemented lazy loading and code splitting to maintain snappy initial load and lighthouse scores.</li>
                  <li>Architected modular component hierarchy to eliminate duplicate markup and standardize interactions.</li>
                  <li>Integrated REST API endpoints with robust error boundary management and graceful fallbacks.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 04: Verified Impact */}
          {activeTab === 'impact' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                <span>Verified Business & User Experience Impact</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {project.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gradient-to-b from-[#0E1524] to-[#0A0D16] border border-indigo-500/20 text-center">
                    <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-display block mb-2">
                      {metric.value}
                    </span>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                      {metric.label}
                    </span>
                    <p className="text-[11px] text-zinc-400">
                      {metric.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-[#0E121C] border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Professional case study from Deepankar's real-world engineering tenure</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
