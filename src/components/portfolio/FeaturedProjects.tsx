import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Monitor,
  Eye,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'Angular' | 'WordPress' | 'UI/UX'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'Angular') return p.techStack.some(t => t.includes('Angular'));
    if (filter === 'WordPress') return p.techStack.some(t => t.includes('WordPress'));
    if (filter === 'UI/UX') return p.category.includes('UI/UX') || p.tags.some(t => t.includes('Design'));
    return true;
  });

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#07090E]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Engineered with Precision, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                Designed for Impact.
              </span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#0D111A] p-1.5 rounded-2xl border border-white/[0.08] overflow-x-auto">
            {(['all', 'Angular', 'WordPress', 'UI/UX'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition whitespace-nowrap ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'all' ? 'All Selected Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div 
                key={project.id}
                className="group relative rounded-3xl bg-[#0C1019] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Preview / Browser Chrome Mockup (7 cols) */}
                  <div className={`lg:col-span-7 p-4 sm:p-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#07090F] shadow-2xl group-hover:shadow-indigo-500/10 transition-all">
                      
                      {/* Browser Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E131F] border-b border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="px-3 py-1 bg-black/40 rounded-md border border-white/[0.06] text-[10px] font-mono text-zinc-400 truncate max-w-[200px]">
                          {project.title.toLowerCase().replace(/\s+/g, '')}.app
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">
                          {project.category}
                        </div>
                      </div>

                      {/* Mockup Image with zoom */}
                      <div className="relative overflow-hidden aspect-[16/10] bg-[#05070A] flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        
                        {/* Overlay trigger on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                          <button
                            onClick={() => onSelectProject(project)}
                            className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Full Case Study</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Narrative & Details (5 cols) */}
                  <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Meta Badges */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                        0{index + 1} • {project.category}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-mono text-zinc-400">
                        {project.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-1 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400">
                        Role: {project.role}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Contributions Checklist */}
                    <div className="space-y-2 pt-2">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Case Study CTA */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group/btn"
                      >
                        <span>Inspect Interactive Case Study</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        Verified Project
                      </span>
                    </div>

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
