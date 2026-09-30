import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { VanillaCodeExportModal } from './components/VanillaCodeExportModal';
import { EditPortfolioModal } from './components/EditPortfolioModal';
import { FloatingEditButton } from './components/FloatingEditButton';

export default function App() {
  // Default to modern dark theme as requested by user
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
      document.body.classList.add('bg-slate-950', 'text-slate-100');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-slate-950', 'text-slate-100');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
    }
  }, [darkMode]);

  return (
    <PortfolioProvider>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-slate-950 text-slate-100 bg-grid-pattern' : 'bg-slate-50 text-slate-900 bg-grid-pattern-light'
        }`}
      >
        {/* Sticky Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenCodeExport={() => setIsCodeModalOpen(true)}
          onOpenResumePreview={() => setIsResumeModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main id="main-content">
          {/* 1. Hero Section */}
          <Hero
            darkMode={darkMode}
            onOpenResumePreview={() => setIsResumeModalOpen(true)}
          />

          {/* 2. About Me Section */}
          <About darkMode={darkMode} />

          {/* 3. Skills Section */}
          <Skills darkMode={darkMode} />

          {/* 4. Projects Showcase Section */}
          <Projects darkMode={darkMode} />

          {/* 5. Education Section */}
          <Education darkMode={darkMode} />

          {/* 6. Certifications Section */}
          <Certifications darkMode={darkMode} />

          {/* 7. Achievements Section */}
          <Achievements darkMode={darkMode} />

          {/* 8. Resume Call To Action Section */}
          <ResumeSection
            darkMode={darkMode}
            onOpenResumePreview={() => setIsResumeModalOpen(true)}
          />

          {/* 9. Contact Section */}
          <ContactSection darkMode={darkMode} />
        </main>

        {/* Footer */}
        <Footer
          darkMode={darkMode}
          onOpenCodeExport={() => setIsCodeModalOpen(true)}
        />

        {/* Interactive In-App Resume Preview Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          darkMode={darkMode}
        />

        {/* Complete Vanilla HTML5 / CSS3 / JavaScript Code Exporter & Deployment Modal */}
        <VanillaCodeExportModal
          isOpen={isCodeModalOpen}
          onClose={() => setIsCodeModalOpen(false)}
          darkMode={darkMode}
        />

        {/* Comprehensive Edit Portfolio Options Modal */}
        <EditPortfolioModal darkMode={darkMode} />

        {/* Floating Quick Edit Action Button & Toast Notifications */}
        <FloatingEditButton darkMode={darkMode} />
      </div>
    </PortfolioProvider>
  );
}
