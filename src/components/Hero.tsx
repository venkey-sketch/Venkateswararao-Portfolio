import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Send, 
  Terminal, 
  Sparkles, 
  Copy, 
  Check, 
  Play,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HeroProps {
  darkMode: boolean;
  onOpenResumePreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResumePreview }) => {
  const { personalInfo, openEditModal } = usePortfolio();
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'goals'>('profile');
  const [runOutput, setRunOutput] = useState(false);

  const codeSnippets = {
    profile: `const developer = {
  name: "${personalInfo.fullName}",
  role: "Aspiring Software Developer",
  degree: "B.Tech in Computer Science (3rd Year)",
  university: "Vignan's University",
  location: "India",
  coreFocus: ["Python", "DSA", "Web Dev", "DBMS"],
  status: "Open for Internships & Opportunities 🚀"
};`,
    skills: `const skillMatrix = {
  languages: ["Python", "Java", "C", "JavaScript"],
  webStack: ["HTML5", "CSS3", "Responsive UI"],
  database: ["SQL", "MySQL", "Relational Modeling"],
  fundamentals: ["DSA", "DBMS", "OS", "Networks"],
  tools: ["Git", "GitHub", "VS Code"]
};`,
    goals: `function getCareerGoal() {
  return {
    target: "Software Developer / Engineer Intern",
    strengths: "Structured problem solving & rapid learning",
    passion: "Building performant, accessible applications"
  };
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunCode = () => {
    setRunOutput(true);
    setTimeout(() => {
      // Keep output visible
    }, 300);
  };

  return (
    <section
      id="home"
      className={`relative min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-16 overflow-hidden ${
        darkMode ? 'bg-radial-gradient' : 'bg-radial-gradient-light'
      }`}
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Left Hero Bento Card: Introduction & CTAs */}
          <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 sm:py-10 flex flex-col justify-between space-y-6 transition-all duration-300 ${
            darkMode 
              ? 'bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/40 hover:border-slate-700/80' 
              : 'bg-white/90 border border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/60 hover:border-slate-300'
          }`}>
            <div className="space-y-5">
              {/* Status Pill & Quick Edit */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div
                  id="hero-status-pill"
                  className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    darkMode
                      ? 'bg-slate-950/80 border-sky-500/30 text-sky-400 shadow-sm shadow-sky-950/50'
                      : 'bg-sky-50 border-sky-300 text-sky-800 shadow-sm'
                  }`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                  </span>
                  <span>{personalInfo.status || '3rd Year B.Tech CSE • Aspiring Software Developer'}</span>
                </div>

                <button
                  onClick={() => openEditModal('personal')}
                  title="Edit Hero & Profile Details"
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40'
                      : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-sky-700 hover:border-sky-400'
                  }`}
                >
                  <Sliders className="w-3 h-3 text-sky-400" />
                  <span>Edit Info</span>
                </button>
              </div>

              {/* Main Greeting Heading */}
              <div className="space-y-2">
                <h1
                  id="hero-title"
                  className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.1] ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">{personalInfo.name}</span> <span className="inline-block animate-bounce origin-bottom">👋</span>
                </h1>
                <h2
                  id="hero-subtitle"
                  className={`text-lg sm:text-xl lg:text-2xl font-semibold ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {personalInfo.title}
                </h2>
              </div>

              {/* Short Professional Introduction */}
              <p
                id="hero-intro-text"
                className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {personalInfo.shortBio}
              </p>

              {/* Quick Context Bento Highlights */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${
                  darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-100/80 border-slate-200 text-slate-700'
                }`}>
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>Vignan's University (2024 – Present)</span>
                </div>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${
                  darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-100/80 border-slate-200 text-slate-700'
                }`}>
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Tech Badges */}
            <div className="space-y-5 pt-2">
              {/* Main Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {/* Button 1: View My Projects */}
                <a
                  id="btn-hero-projects"
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Button 2: Download Resume */}
                <button
                  id="btn-hero-resume"
                  onClick={onOpenResumePreview}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm border transition-all active:scale-95 ${
                    darkMode
                      ? 'bg-slate-950/80 text-white border-slate-700/80 hover:border-sky-500/60 hover:bg-slate-800'
                      : 'bg-white text-slate-900 border-slate-300 hover:border-sky-600 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Download Resume</span>
                </button>

                {/* Button 3: Contact Me */}
                <a
                  id="btn-hero-contact"
                  href="#contact"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                    darkMode
                      ? 'text-slate-300 hover:text-sky-400 hover:bg-slate-950/80 border border-slate-800'
                      : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Quick Tech Stack Bento Row */}
              <div className="pt-2 border-t border-slate-800/60 dark:border-slate-800/80">
                <span className={`text-[11px] font-mono uppercase tracking-wider block mb-2 font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Core Technical Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Java', 'C', 'JavaScript', 'HTML/CSS', 'SQL', 'DSA'].map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-3 py-1 rounded-xl border transition-all ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-sky-500/40'
                          : 'bg-slate-100/90 border-slate-200 text-slate-700 hover:border-sky-500'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Bento Terminal Box */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              id="hero-developer-terminal"
              className={`rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all h-full flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800/90 shadow-sky-950/20'
                  : 'bg-slate-900 text-slate-100 border-slate-800 shadow-slate-400/20'
              }`}
            >
              {/* Terminal Window Header */}
              <div className="bg-slate-950/90 border-b border-slate-800 px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>venkateswararao.ts</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunCode}
                    title="Execute Code"
                    className="p-1.5 px-2.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 text-xs flex items-center gap-1 font-mono transition-colors"
                  >
                    <Play className="w-3 h-3 fill-sky-400" />
                    <span>Run</span>
                  </button>
                  <button
                    onClick={handleCopyCode}
                    title="Copy snippet"
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Terminal Navigation Tabs */}
              <div className="bg-slate-950/50 border-b border-slate-800 px-4 flex items-center gap-2 text-xs font-mono">
                {(['profile', 'skills', 'goals'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setRunOutput(false);
                    }}
                    className={`py-2.5 px-3.5 border-b-2 transition-all capitalize ${
                      activeTab === tab
                        ? 'border-sky-400 text-sky-400 font-semibold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab}.ts
                  </button>
                ))}
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto flex-1 flex flex-col justify-between">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>

                {runOutput && (
                  <div className="mt-4 pt-3 border-t border-slate-800 text-sky-400 space-y-1">
                    <p className="text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      <span>// Compiled successfully (0.03s)</span>
                    </p>
                    <p className="text-emerald-300 font-medium">
                      ✓ Profile verified: 3rd Year B.Tech CSE • Ready for 2026 roles
                    </p>
                  </div>
                )}
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="bg-slate-950/90 border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>TypeScript 5.8 • Node.js</span>
                </span>
                <span className="text-slate-500">UTF-8 • Spaces: 2</span>
              </div>
            </div>

            {/* Quick Social Links Bento Pill Row Below Terminal */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  title="Send Email"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 shadow-sm'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 shadow-sm'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 shadow-sm'
                  }`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}>
                Portfolio v2026.1
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
