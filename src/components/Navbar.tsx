import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  FileText, 
  Code2, 
  Briefcase,
  Sliders,
  Bot
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCodeExport: () => void;
  onOpenResumePreview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenCodeExport,
  onOpenResumePreview,
}) => {
  const { personalInfo, openEditModal } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active link scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          id="nav-brand-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black font-mono text-xl shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            V
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold font-display tracking-tight transition-colors ${
              darkMode ? 'text-white group-hover:text-sky-400' : 'text-slate-900 group-hover:text-sky-600'
            }`}>
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-sky-400 font-medium">
              B.Tech CSE • 3rd Year
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? darkMode
                      ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                      : 'text-sky-700 bg-sky-50 border border-sky-200'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Edit Portfolio Options Button */}
          <button
            id="btn-nav-edit-options"
            onClick={() => openEditModal('personal')}
            title="Customize & Edit Portfolio Content"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
              darkMode
                ? 'bg-sky-500/10 text-sky-400 border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400'
                : 'bg-sky-50 text-sky-700 border-sky-300 hover:bg-sky-100 hover:border-sky-500'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Edit Options</span>
          </button>

          {/* AI Project Quick Jump */}
          <a
            id="btn-nav-ai-project"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#projects');
            }}
            title="Explore AI Career Mentor Project & GitHub Code"
            className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
              darkMode
                ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400'
                : 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-400'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI Project</span>
          </a>

          {/* Plain HTML/CSS/JS Code Exporter */}
          <button
            id="btn-export-code"
            onClick={onOpenCodeExport}
            title="View & Copy HTML5, CSS3, JS Source Code"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
              darkMode
                ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-sky-500 hover:text-sky-400'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-sky-600 hover:text-sky-700'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Vanilla Code</span>
          </button>

          {/* Resume Quick CTA */}
          <button
            id="btn-nav-resume"
            onClick={onOpenResumePreview}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 transition-all shadow-sm shadow-sky-500/20 active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            id="btn-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Light and Dark Mode"
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`lg:hidden p-2 rounded-full border transition-all ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-200'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? darkMode
                        ? 'bg-sky-500/15 text-sky-400 font-bold border border-sky-500/20'
                        : 'bg-sky-50 text-sky-700 font-bold border border-sky-200'
                      : darkMode
                      ? 'hover:bg-slate-900 text-slate-300'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumePreview();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 font-bold text-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeExport();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                darkMode
                  ? 'border-slate-800 text-slate-300 hover:bg-slate-900'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Get Vanilla HTML5 / CSS3 / JS Code</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
