import React, { useState, useEffect } from 'react';
import { Navbar } from './components/portfolio/Navbar';
import { HeroSection } from './components/portfolio/HeroSection';
import { AboutSection } from './components/portfolio/AboutSection';
import { FeaturedProjects } from './components/portfolio/FeaturedProjects';
import { DesignerCraftLab } from './components/portfolio/DesignerCraftLab';
import { DesignProcess } from './components/portfolio/DesignProcess';
import { SkillsSection } from './components/portfolio/SkillsSection';
import { ExperienceSection } from './components/portfolio/ExperienceSection';
import { AchievementsAndEducation } from './components/portfolio/AchievementsAndEducation';
import { ContactSection } from './components/portfolio/ContactSection';
import { Footer } from './components/portfolio/Footer';
import { ResumeModal } from './components/portfolio/ResumeModal';
import { CaseStudyModal } from './components/portfolio/CaseStudyModal';
import { DesignerInspectOverlay } from './components/portfolio/DesignerInspectOverlay';
import { Project } from './data/portfolioData';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inspectMode, setInspectMode] = useState(false);

  // Status Pill editable state
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [statusText, setStatusText] = useState<string>("Available for select opportunities • Gurgaon, India");

  // Fetch initial status from backend
  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.available === 'boolean') {
          setIsAvailable(data.available);
          if (data.status_text) setStatusText(data.status_text);
        }
      })
      .catch(() => {});
  }, []);

  const handleUpdateStatus = async (available: boolean, text: string) => {
    setIsAvailable(available);
    setStatusText(text);
    try {
      await fetch('/api/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available, status_text: text })
      });
    } catch {}
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-white selection:bg-indigo-500 selection:text-white relative font-sans">
      
      {/* Designer Spec Mode Overlay */}
      <DesignerInspectOverlay 
        enabled={inspectMode} 
        onToggle={() => setInspectMode(false)} 
      />

      {/* Floating Capsule Navigation */}
      <Navbar 
        onOpenResume={() => setResumeModalOpen(true)}
        inspectMode={inspectMode}
        onToggleInspect={() => setInspectMode(!inspectMode)}
      />

      {/* Main Sections */}
      <main>
        {/* SECTION 01 & 02 — Hero */}
        <HeroSection 
          onOpenResume={() => setResumeModalOpen(true)}
          statusText={statusText}
          isAvailable={isAvailable}
          onUpdateStatus={handleUpdateStatus}
        />

        {/* SECTION 03 — About Me & Pillars */}
        <AboutSection />

        {/* SECTION 04 — Featured Projects & Case Studies */}
        <FeaturedProjects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* BESPOKE DESIGNER CRAFT LAB — Live Interactive Design System & Component Sandbox */}
        <DesignerCraftLab />

        {/* SECTION 05 — 4-Step Design Process */}
        <DesignProcess />

        {/* SECTION 06 — Skills & Technologies Grid */}
        <SkillsSection />

        {/* SECTION 07 — Professional Experience Timeline */}
        <ExperienceSection />

        {/* SECTIONS 08 & 09 — Achievements & Education */}
        <AchievementsAndEducation />

        {/* SECTION 10 — Contact Section */}
        <ContactSection />
      </main>

      {/* SECTION 11 — Minimal Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Full-Screen Case Study Modal */}
      <CaseStudyModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
