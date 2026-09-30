import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  Code2,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface FooterProps {
  darkMode: boolean;
  onOpenCodeExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenCodeExport }) => {
  const { personalInfo, openEditModal } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer
      id="main-footer"
      className={`border-t relative ${
        darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60 dark:border-slate-800">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black font-mono text-sm">
                V
              </div>
              <span className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs text-sky-400 font-mono">
              3rd Year B.Tech CSE • Vignan's University
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  darkMode ? 'hover:text-sky-400' : 'hover:text-sky-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Code Modal Trigger */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2.5 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email Address"
              className={`p-2.5 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              className="p-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 transition-all shadow-md active:scale-95 ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p className="font-mono text-center sm:text-left">
            © 2026 {personalInfo.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={() => openEditModal('personal')}
              className="hover:text-sky-400 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              <span>Edit Portfolio Options</span>
            </button>
            <button
              onClick={onOpenCodeExport}
              className="hover:text-sky-400 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get Plain HTML/CSS/JS Files</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
