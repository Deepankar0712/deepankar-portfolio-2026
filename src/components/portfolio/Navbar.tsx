import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Sparkles, 
  Eye, 
  ArrowUpRight, 
  Sliders,
  Download
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  inspectMode: boolean;
  onToggleInspect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, inspectMode, onToggleInspect }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'work', 'craft-lab', 'process', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'craft-lab', label: 'Design Lab' },
    { id: 'process', label: 'Process' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Capsule Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-3 sm:p-5 pointer-events-none">
        <div 
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-[#090C15]/85 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60' 
              : 'bg-[#0B0F19]/50 backdrop-blur-md border border-white/[0.06]'
          }`}
        >
          {/* Brand Wordmark */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-sm sm:text-base text-white group-hover:text-indigo-400 transition-colors">
                DEEPANKAR
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase hidden sm:block">
                UI/UX × Frontend Dev
              </span>
            </div>
          </button>

          {/* Desktop Links Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#05070C]/60 p-1 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Designer Spec Mode Toggle */}
            <button
              onClick={onToggleInspect}
              title={inspectMode ? "Exit Spec Mode" : "Enable Designer Spec Mode (Figma Grid & WCAG)"}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition border ${
                inspectMode 
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30' 
                  : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border-white/10'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{inspectMode ? 'Spec ON' : 'Spec Mode'}</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:brightness-110 transition shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 text-zinc-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/90 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-3 text-lg font-semibold text-zinc-300 hover:text-white border-b border-white/[0.06] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleInspect();
              }}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Toggle Designer Spec Mode</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Open Verified Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
