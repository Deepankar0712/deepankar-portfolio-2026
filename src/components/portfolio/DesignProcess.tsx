import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Layout, 
  Palette, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Cpu,
  Monitor,
  Workflow
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const DesignProcess: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const stepIcons = [Search, Layout, Palette, Code2];

  const stepsData = [
    {
      num: "01",
      title: "Discover",
      tagline: "Empathy, Research & Problem Definition",
      summary: "Understand business goals, user pain points, and existing bottlenecks through heuristic audits and discovery interviews.",
      methods: ["User Interviews", "Competitive UX Benchmarking", "Heuristic Audits", "Stakeholder Alignment"],
      tools: ["Miro", "FigJam", "Google Analytics", "Hotjar"],
      deliverablePreview: "Synthesized Problem Statement & User Journey Canvas"
    },
    {
      num: "02",
      title: "Define",
      tagline: "Information Architecture & Wireframes",
      summary: "Map navigation hierarchy, user flows, and low-to-mid-fidelity wireframes to eliminate cognitive overhead before touching visual styling.",
      methods: ["Information Architecture", "Task Flow Mapping", "Low-Fidelity Wireframing", "Cognitive Walkthroughs"],
      tools: ["Figma", "Whimsical", "Notion", "Pen & Paper"],
      deliverablePreview: "Interactive Wireframe Prototypes & IA Tree"
    },
    {
      num: "03",
      title: "Design",
      tagline: "Design Systems & High-Fidelity UI",
      summary: "Build pixel-perfect interfaces, scalable tokenized design systems, responsive auto-layout components, and WCAG-compliant color palettes.",
      methods: ["Atomic Design Systems", "Responsive Grid Layouts", "Micro-Interactions", "WCAG 2.1 AA Compliance Audits"],
      tools: ["Figma", "Adobe Illustrator", "Color Contrast Analyzer"],
      deliverablePreview: "Design Token Library & Interactive Prototypes"
    },
    {
      num: "04",
      title: "Develop",
      tagline: "Frontend Engineering & Optimization",
      summary: "Convert Figma components into modular Angular, React, and TypeScript code with state management, dynamic API hooks, and sub-second load times.",
      methods: ["Component Architecture", "REST API Integration", "Lazy Loading & Code Splitting", "Cross-Browser Testing"],
      tools: ["VS Code", "Angular", "TypeScript", "Tailwind CSS", "Git"],
      deliverablePreview: "Production Web Applications & Component Libraries"
    }
  ];

  const currentStep = stepsData[selectedStep];
  const CurrentIcon = stepIcons[selectedStep];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#07090F] border-t border-white/[0.06]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
              <Workflow className="w-3.5 h-3.5 text-indigo-400" />
              <span>END-TO-END METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              From the first idea to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                final interaction.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            A cohesive 4-stage engineering and design loop that eliminates guesswork and ensures seamless transitions between Figma concepts and shipping code.
          </p>
        </div>

        {/* Step Selector Buttons Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stepsData.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                  isSelected 
                    ? 'bg-[#121727] border-indigo-500 shadow-xl shadow-indigo-600/20' 
                    : 'bg-[#0B0E17]/60 border-white/[0.08] hover:border-white/20 hover:bg-[#0E121E]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-indigo-400' : 'text-zinc-500'}`}>
                    STEP {step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : 'text-zinc-500'}`} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white font-display">
                  {step.title}
                </h4>
                <p className="text-[11px] text-zinc-400 truncate mt-1">
                  {step.tagline}
                </p>

                {isSelected && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Step Canvas Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0C101A] border border-white/[0.08] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block">
                    STAGE 0{selectedStep + 1} ARCHITECTURE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {currentStep.title} — {currentStep.tagline}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {currentStep.summary}
              </p>

              {/* Methods Used */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                  Applied Methodologies & Practices:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.methods.map((method, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 p-3 rounded-xl bg-[#07090F] border border-white/[0.06] text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tools & Artifacts (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080B12] border border-white/[0.06] space-y-6">
              
              <div>
                <span className="text-[11px] font-mono uppercase text-indigo-400 block mb-2">
                  Key Deliverable Artifact
                </span>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-medium text-white flex items-center gap-3">
                  <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{currentStep.deliverablePreview}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-indigo-400 block mb-2">
                  Toolchain Leveraged
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono">Process Step 0{selectedStep + 1} of 04</span>
                <button
                  onClick={() => setSelectedStep((prev) => (prev + 1) % 4)}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold transition"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
