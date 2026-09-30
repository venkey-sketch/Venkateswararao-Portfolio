import React, { useState } from 'react';
import { 
  User, 
  Code2, 
  Globe, 
  Binary, 
  Database, 
  BrainCircuit, 
  Lightbulb, 
  GraduationCap, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Sparkles,
  Image as ImageIcon,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { personalInfo, openEditModal, updatePersonalInfo } = usePortfolio();
  const [showAvatarInput, setShowAvatarInput] = useState(false);
  const [tempUrl, setTempUrl] = useState('');

  const focusIcons = [
    { name: "Software Development", icon: Code2, desc: "Building modular, robust, and maintainable software systems" },
    { name: "Web Development", icon: Globe, desc: "Developing responsive front-ends and connected back-end APIs" },
    { name: "Python", icon: Binary, desc: "Application scripting, automation, algorithms, and backend services" },
    { name: "Data Structures & Algorithms", icon: Binary, desc: "Efficient algorithm design, complexity analysis, and problem solving" },
    { name: "Database Management", icon: Database, desc: "Relational database schema modeling, queries, and optimization" },
    { name: "Machine Learning", icon: BrainCircuit, desc: "Foundational predictive modeling, data pipelines, and analytics" },
    { name: "Problem Solving", icon: Lightbulb, desc: "Analytical mindset breaking complex challenges into actionable logic" },
  ];

  const handleApplyAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUrl.trim()) {
      updatePersonalInfo({ avatarUrl: tempUrl.trim() });
      setShowAvatarInput(false);
    }
  };

  const currentAvatar = personalInfo.avatarUrl || null;

  return (
    <section
      id="about"
      className={`py-24 relative ${darkMode ? 'bg-slate-950/70' : 'bg-slate-50/70'} border-t border-b ${
        darkMode ? 'border-slate-900' : 'border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <User className="w-3.5 h-3.5" />
              <span>Bento Profile & Overview</span>
            </div>
            <button
              onClick={() => openEditModal('personal')}
              title="Edit Profile Information"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-400'
                  : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500 shadow-sm'
              }`}
            >
              <Sliders className="w-3 h-3 text-sky-400" />
              <span>Edit About</span>
            </button>
          </div>
          <h2
            id="about-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            About Me
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Get to know my academic journey, core technical interests, and software development philosophy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Cell 1: Profile & Identity (lg:col-span-4) */}
          <div
            id="profile-card"
            className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/30 hover:border-slate-700/80'
                : 'bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 hover:border-slate-300'
            }`}
          >
            <div>
              {/* Profile Image / Avatar Placeholder */}
              <div className="relative group mx-auto w-36 h-36 mb-5">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-dashed border-sky-500/40 flex flex-col items-center justify-center bg-sky-500/5 transition-all group-hover:border-sky-400">
                  {currentAvatar ? (
                    <img
                      src={currentAvatar}
                      alt={personalInfo.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 mb-1.5">
                        <User className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-sky-400 mb-0.5">Profile Photo</span>
                      <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        [Student Photo]
                      </span>
                    </div>
                  )}
                </div>

                {/* Edit Photo Quick Button */}
                <button
                  onClick={() => setShowAvatarInput(!showAvatarInput)}
                  title="Test or update profile photo URL"
                  className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Optional Photo URL Input Form */}
              {showAvatarInput && (
                <form onSubmit={handleApplyAvatar} className="mb-5 p-3 rounded-2xl border border-sky-500/30 bg-sky-500/5 space-y-2">
                  <span className="text-xs font-medium text-sky-400 block">Provide Image URL:</span>
                  <input
                    type="url"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    placeholder="https://example.com/your-photo.jpg"
                    className={`w-full px-3 py-1.5 text-xs rounded-xl border outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      type="button"
                      onClick={() => setShowAvatarInput(false)}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 text-xs rounded-lg bg-sky-500 text-slate-950 font-bold"
                    >
                      Apply
                    </button>
                  </div>
                </form>
              )}

              {/* Student Name & Status */}
              <div className="text-center space-y-2 pb-5 border-b border-slate-800/60 dark:border-slate-800">
                <h3 className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs font-mono font-semibold text-sky-400">
                  {personalInfo.degree}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3rd Year Active Student</span>
                </div>
              </div>
            </div>

            {/* Quick Info Grid List */}
            <div className="pt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-2 text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>Institution</span>
                </span>
                <span className={`font-semibold text-xs text-right ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {personalInfo.institution}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-2 text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Timeline</span>
                </span>
                <span className={`font-semibold text-xs ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  2024 – Present (3rd Year)
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-2 text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Location</span>
                </span>
                <span className={`font-semibold text-xs ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Story Narrative (lg:col-span-8) */}
          <div
            className={`lg:col-span-8 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/30 hover:border-slate-700/80'
                : 'bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 hover:border-slate-300'
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Background & Philosophy</span>
              </div>

              <h3 className={`text-2xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Engineering Foundations & Passion for Building
              </h3>

              <div className="space-y-3.5 text-base sm:text-[17px] leading-relaxed">
                <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  I am a dedicated <strong className="text-sky-400">3rd-year Computer Science and Engineering student at Vignan's University</strong> with a strong focus on software engineering, clean code principles, and web technologies.
                </p>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Throughout my academic journey, I have prioritized mastering core computing pillars—including Data Structures, Algorithms, Database Management Systems, and Object-Oriented Design—while translating theoretical foundations into practical, full-stack software applications.
                </p>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  I actively seek software development internship opportunities where I can solve real challenges, collaborate with experienced engineering teams, and deliver impactful, scalable software.
                </p>
              </div>
            </div>

            {/* Metrics Highlight Banner inside Narrative Bento */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-4 border-t border-slate-800/60 dark:border-slate-800/80">
              <div className={`p-3.5 rounded-2xl border text-center transition-all ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <span className="text-2xl sm:text-3xl font-black font-display text-sky-400">3rd</span>
                <span className={`block text-[11px] font-medium mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Year B.Tech
                </span>
              </div>
              <div className={`p-3.5 rounded-2xl border text-center transition-all ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <span className="text-2xl sm:text-3xl font-black font-display text-emerald-400">3+</span>
                <span className={`block text-[11px] font-medium mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Core Projects
                </span>
              </div>
              <div className={`p-3.5 rounded-2xl border text-center transition-all ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <span className="text-2xl sm:text-3xl font-black font-display text-teal-400">100%</span>
                <span className={`block text-[11px] font-medium mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Dedication
                </span>
              </div>
            </div>
          </div>

          {/* Bento Cell 3: Technical Interest Cards Grid (lg:col-span-12) */}
          <div className="lg:col-span-12">
            <div
              className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/30'
                  : 'bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <h3 className={`text-lg sm:text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Core Areas of Interest & Competence
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {focusIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className={`p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                        darkMode
                          ? 'bg-slate-950/70 border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-950'
                          : 'bg-slate-50/80 border-slate-200 hover:border-sky-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className={`font-semibold text-sm leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {item.name}
                        </h4>
                      </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
