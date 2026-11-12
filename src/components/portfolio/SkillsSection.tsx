import React, { useState } from 'react';
import { 
  Palette, 
  Code2, 
  Wrench, 
  Search, 
  Sparkles, 
  Check, 
  Cpu, 
  Layers, 
  Monitor,
  Flame,
  Star
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'UI/UX Design', label: 'UI/UX Design', icon: Palette },
    { id: 'Frontend Engineering', label: 'Frontend Engineering', icon: Code2 },
    { id: 'Tools & Workflow', label: 'Tools & Workflow', icon: Wrench },
  ];

  // Flattened skills with metadata
  const allSkills = (PORTFOLIO_DATA.skills || []).flatMap((cat) =>
    (cat.skills || []).map((skill) => ({
      ...skill,
      category: cat.category,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCat = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (skill.tags && skill.tags.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>SKILLS & TECHNOLOGICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              The Dual Toolkit: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Design Sensitivity × Engineering Rigor.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Proficiencies honed over 2+ years of shipping commercial web applications, design systems, and responsive interfaces.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-2.5 rounded-2xl bg-[#0D111A] border border-white/[0.08]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition whitespace-nowrap ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search e.g. Figma, Angular..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

        </div>

        {/* Skills Bento Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredSkills.map((skill, index) => {
            const isHighlight = skill.highlight;
            return (
              <div
                key={index}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative group ${
                  isHighlight
                    ? 'bg-[#101422] border-indigo-500/30 hover:border-indigo-500/60 shadow-lg'
                    : 'bg-[#0B0E17]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#0E121E]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    {skill.category.replace(' Engineering', '').replace(' & Workflow', '')}
                  </span>
                  {isHighlight && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                      <Star className="w-2.5 h-2.5 fill-indigo-400" /> Core
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </h3>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.04] text-[11px] text-zinc-400 font-mono">
                  <span>{skill.level}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Production
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Dual-Competency Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0E1424] via-[#0D121F] to-[#0A0D15] border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                Need a specific tech stack or custom framework integration?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                From Angular 17+ and React component systems to WordPress enterprise themes, I adapt quickly to modern frontend tooling.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs whitespace-nowrap transition shadow-lg shadow-indigo-600/25"
          >
            Discuss Stack Compatibility
          </a>
        </div>

      </div>
    </section>
  );
};
