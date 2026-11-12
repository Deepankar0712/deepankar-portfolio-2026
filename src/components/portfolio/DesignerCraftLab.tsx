import React, { useState } from 'react';
import { 
  Sparkles, 
  Sliders, 
  Code2, 
  Palette, 
  Layers, 
  Check, 
  Copy, 
  Eye, 
  Maximize2,
  Cpu,
  Fingerprint,
  RefreshCw,
  Zap,
  ArrowRight
} from 'lucide-react';

export const DesignerCraftLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'component' | 'tokens' | 'code'>('component');
  const [codeLanguage, setCodeLanguage] = useState<'react' | 'angular' | 'css'>('react');
  
  // Interactive Design Tokens
  const [radius, setRadius] = useState<'sm' | 'md' | 'lg' | 'full'>('lg');
  const [accent, setAccent] = useState<'indigo' | 'cyan' | 'emerald' | 'amber'>('indigo');
  const [elevation, setElevation] = useState<'flat' | 'glow' | 'deep'>('glow');
  const [componentState, setComponentState] = useState<'default' | 'hover' | 'active' | 'loading'>('default');
  const [copied, setCopied] = useState(false);

  const radiusMap = {
    sm: { label: '4px', class: 'rounded-md', css: 'border-radius: 4px;' },
    md: { label: '8px', class: 'rounded-xl', css: 'border-radius: 8px;' },
    lg: { label: '14px', class: 'rounded-2xl', css: 'border-radius: 14px;' },
    full: { label: 'Pill', class: 'rounded-full', css: 'border-radius: 9999px;' }
  };

  const accentMap = {
    indigo: {
      name: 'Electric Indigo',
      hex: '#6366F1',
      bgClass: 'bg-indigo-600',
      textClass: 'text-indigo-400',
      borderClass: 'border-indigo-500/40',
      glowClass: 'shadow-[0_0_30px_rgba(99,102,241,0.35)]',
      gradient: 'from-indigo-500 to-blue-600'
    },
    cyan: {
      name: 'Cyber Cyan',
      hex: '#06B6D4',
      bgClass: 'bg-cyan-500',
      textClass: 'text-cyan-400',
      borderClass: 'border-cyan-500/40',
      glowClass: 'shadow-[0_0_30px_rgba(6,182,212,0.35)]',
      gradient: 'from-cyan-400 to-blue-500'
    },
    emerald: {
      name: 'Aurora Emerald',
      hex: '#10B981',
      bgClass: 'bg-emerald-500',
      textClass: 'text-emerald-400',
      borderClass: 'border-emerald-500/40',
      glowClass: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
      gradient: 'from-emerald-400 to-teal-500'
    },
    amber: {
      name: 'Solar Amber',
      hex: '#F59E0B',
      bgClass: 'bg-amber-500',
      textClass: 'text-amber-400',
      borderClass: 'border-amber-500/40',
      glowClass: 'shadow-[0_0_30px_rgba(245,158,11,0.35)]',
      gradient: 'from-amber-400 to-orange-500'
    }
  };

  const currentAccent = accentMap[accent];
  const currentRadius = radiusMap[radius];

  const getElevationClass = () => {
    if (elevation === 'flat') return 'shadow-none border-white/10';
    if (elevation === 'glow') return currentAccent.glowClass + ' border-white/20';
    return 'shadow-2xl shadow-black/80 border-white/15 backdrop-blur-xl';
  };

  const codeSnippets = {
    react: `// Reusable ActionCard.tsx — Deepankar Sharma Design System
import React from 'react';

export const BookingCard = () => {
  return (
    <div className="p-6 bg-[#0E121B] ${currentRadius.class} ${getElevationClass()} transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          Instaspaces • Suite 402
        </span>
        <span className="h-2 w-2 rounded-full ${currentAccent.bgClass} animate-pulse" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Virtual Office License</h3>
      <p className="text-xs text-zinc-400 mb-6">GST registration ready with instant verification.</p>
      <button className="w-full py-3 px-4 ${currentRadius.class} bg-gradient-to-r ${currentAccent.gradient} text-white font-medium text-sm flex items-center justify-center gap-2">
        <span>Proceed to Checkout</span>
      </button>
    </div>
  );
};`,
    angular: `// booking-card.component.ts — Angular 17+ Signals & SCSS
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  standalone: true,
  template: \`
    <div class="booking-card ${currentRadius.class}">
      <header class="card-meta">
        <span class="badge">INSTASPACES • GURGAON</span>
        <span class="dot" [style.backgroundColor]="accentColor()"></span>
      </header>
      <h3>Premium Business Address</h3>
      <p>Annual plan with dynamic GST computation included.</p>
      <button class="cta-button" (click)="onSelectPlan()">
        Reserve Space
      </button>
    </div>
  \`,
  styles: [\`
    .booking-card {
      background: #0E121B;
      border: 1px solid rgba(255, 255, 255, 0.1);
      ${currentRadius.css}
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
  \`]
})
export class BookingCardComponent {
  accentColor = signal('${currentAccent.hex}');
  onSelectPlan() { /* reactive checkout workflow */ }
}`,
    css: `/* Design Tokens — Generated from Figma Master Library */
:root {
  --ds-accent-primary: ${currentAccent.hex};
  --ds-radius-card: ${currentRadius.label};
  --ds-elevation-shadow: ${elevation === 'glow' ? '0 0 30px ' + currentAccent.hex + '40' : '0 10px 25px rgba(0,0,0,0.5)'};
  --ds-motion-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --ds-wcag-ratio: 12.8; /* AAA Compliant */
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[codeLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="craft-lab" className="py-24 relative overflow-hidden border-t border-white/[0.06] bg-[#090C14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DESIGN SYSTEM LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Where Figma Tokens Meet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Production-Ready Code.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Test the live design system sandbox below. Modify radius, theme tokens, and elevation to inspect how I architect design variables that synchronize seamlessly between Figma and frontend codebases.
          </p>
        </div>

        {/* The Interactive Sandbox Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#0D111A]/90 border border-white/[0.08] backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-semibold text-white tracking-wide">Interactive Token Controls</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Live React State</span>
              </div>

              {/* Token 1: Accent Color */}
              <div className="mb-6">
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-3 flex items-center justify-between">
                  <span>01. Theme Accent</span>
                  <span className="text-white font-mono">{currentAccent.name}</span>
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {(Object.keys(accentMap) as Array<keyof typeof accentMap>).map((key) => {
                    const item = accentMap[key];
                    const isSelected = accent === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setAccent(key)}
                        className={`h-11 rounded-xl border flex items-center justify-center transition-all ${
                          isSelected 
                            ? 'border-white ring-2 ring-white/20 scale-105 shadow-lg' 
                            : 'border-white/10 hover:border-white/25 opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: item.hex }}
                        title={item.name}
                      >
                        {isSelected && <Check className="w-4 h-4 text-black stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Token 2: Border Radius */}
              <div className="mb-6">
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-3 flex items-center justify-between">
                  <span>02. Corner Radius</span>
                  <span className="text-white font-mono">{currentRadius.label}</span>
                </label>
                <div className="grid grid-cols-4 gap-2 bg-[#080B12] p-1.5 rounded-xl border border-white/[0.06]">
                  {(Object.keys(radiusMap) as Array<keyof typeof radiusMap>).map((key) => {
                    const isSelected = radius === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setRadius(key)}
                        className={`py-2 text-xs font-medium rounded-lg transition-all ${
                          isSelected 
                            ? 'bg-indigo-600 text-white shadow' 
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {radiusMap[key].label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Token 3: Elevation & Shadow */}
              <div className="mb-6">
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-3 flex items-center justify-between">
                  <span>03. Surface Elevation</span>
                  <span className="text-white font-mono uppercase text-[11px]">{elevation}</span>
                </label>
                <div className="grid grid-cols-3 gap-2 bg-[#080B12] p-1.5 rounded-xl border border-white/[0.06]">
                  {(['flat', 'glow', 'deep'] as const).map((el) => (
                    <button
                      key={el}
                      onClick={() => setElevation(el)}
                      className={`py-2 text-xs capitalize font-medium rounded-lg transition-all ${
                        elevation === el 
                          ? 'bg-white/10 text-white border border-white/20' 
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {el}
                    </button>
                  ))}
                </div>
              </div>

              {/* Token 4: Component State */}
              <div>
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-3 flex items-center justify-between">
                  <span>04. Component State</span>
                  <span className="text-white font-mono uppercase text-[11px]">{componentState}</span>
                </label>
                <div className="grid grid-cols-4 gap-2 bg-[#080B12] p-1.5 rounded-xl border border-white/[0.06]">
                  {(['default', 'hover', 'active', 'loading'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setComponentState(st)}
                      className={`py-2 text-xs capitalize font-medium rounded-lg transition-all ${
                        componentState === st 
                          ? 'bg-white/15 text-white font-semibold' 
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Spec Footnote */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> WCAG 2.1 AAA Compliant
              </span>
              <span>8pt Baseline Grid</span>
            </div>
          </div>

          {/* Canvas & Code Inspector (Right) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl bg-[#090C14] border border-white/[0.08] overflow-hidden">
            
            {/* View Switcher Bar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#0E131F] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('component')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    activeTab === 'component' 
                      ? 'bg-white/10 text-white shadow-sm' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>UI Preview Canvas</span>
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    activeTab === 'code' 
                      ? 'bg-white/10 text-white shadow-sm' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Production Code</span>
                </button>
              </div>

              {activeTab === 'code' && (
                <div className="flex items-center gap-2">
                  <div className="flex bg-[#05070B] p-0.5 rounded-lg border border-white/[0.08]">
                    {(['react', 'angular', 'css'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCodeLanguage(lang)}
                        className={`px-2.5 py-1 text-[11px] font-mono uppercase rounded transition ${
                          codeLanguage === lang 
                            ? 'bg-indigo-600 text-white' 
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Main Content Area */}
            {activeTab === 'component' ? (
              <div className="flex-1 p-8 sm:p-12 flex items-center justify-center relative min-h-[420px] bg-gradient-to-b from-[#080A10] to-[#0A0D15] designer-grid-spec">
                
                {/* Simulated Figma Dimension Callout */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-indigo-400/80 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                  AutoLayout: Hug [X: 380px, Y: 460px]
                </div>

                {/* The Dynamic Component Card */}
                <div 
                  className={`w-full max-w-sm p-6 sm:p-7 bg-[#0E121B] ${currentRadius.class} ${getElevationClass()} border transition-all duration-300 relative group`}
                  style={{
                    transform: componentState === 'hover' ? 'translateY(-4px)' : componentState === 'active' ? 'scale(0.98)' : 'none'
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                        INSTASPACES SUITE
                      </span>
                    </div>
                    <span 
                      className={`h-2.5 w-2.5 rounded-full ${currentAccent.bgClass} animate-pulse`} 
                      style={{ boxShadow: `0 0 10px ${currentAccent.hex}` }}
                    />
                  </div>

                  {/* Card Title & Content */}
                  <h4 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                    Gurgaon Cyber City Hub
                  </h4>
                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    Virtual business office with instant MCA/GST document issuance, professional mail handling, and meeting room passes.
                  </p>

                  {/* Dynamic Pricing module */}
                  <div className="p-3.5 rounded-xl bg-[#080B12] border border-white/[0.06] mb-6 flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-zinc-400 block font-mono">ANNUAL PLAN</span>
                      <span className="text-lg font-bold text-white font-mono">₹1,499<span className="text-xs text-zinc-400">/mo</span></span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      18% GST INCLUDED
                    </span>
                  </div>

                  {/* Interactive Button in selected state */}
                  <button 
                    disabled={componentState === 'loading'}
                    className={`w-full py-3.5 px-5 ${currentRadius.class} bg-gradient-to-r ${currentAccent.gradient} text-white font-semibold text-xs tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-200 ${
                      componentState === 'loading' ? 'opacity-80 cursor-wait' : 'hover:brightness-110 active:scale-[0.98]'
                    }`}
                  >
                    {componentState === 'loading' ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Validating GST Module...</span>
                      </>
                    ) : (
                      <>
                        <span>Reserve Virtual Office</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Code Tab */
              <div className="flex-1 p-6 bg-[#06080F] font-mono text-xs overflow-x-auto relative">
                <pre className="text-zinc-300 leading-relaxed">
                  <code>{codeSnippets[codeLanguage]}</code>
                </pre>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="px-6 py-3 bg-[#0B0F19] border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Angular 17+ / React 18 / SCSS / Tailwind CSS</span>
              </span>
              <span className="font-mono text-zinc-500 text-[11px]">Deepankar Sharma Component Spec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
