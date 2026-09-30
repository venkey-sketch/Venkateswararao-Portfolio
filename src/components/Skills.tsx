import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { skillsData, openEditModal } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-5 h-5 text-emerald-500" />,
    'Web Technologies': <Globe className="w-5 h-5 text-emerald-500" />,
    'Database Management': <Database className="w-5 h-5 text-emerald-500" />,
    'Computer Science Fundamentals': <Cpu className="w-5 h-5 text-emerald-500" />,
    'Developer Tools': <Wrench className="w-5 h-5 text-emerald-500" />
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section
      id="skills"
      className={`py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Bento Capabilities Matrix</span>
            </div>
            <button
              onClick={() => openEditModal('skills')}
              title="Edit Technical Skills"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-400'
                  : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500 shadow-sm'
              }`}
            >
              <Sliders className="w-3 h-3 text-sky-400" />
              <span>Edit Skills</span>
            </button>
          </div>
          <h2
            id="skills-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Skills
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A realistic and structured overview of programming languages, web technologies, database management, and computer science fundamentals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                : darkMode
                ? 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            All Categories
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title.split(' ')[0])}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory.toLowerCase() === cat.title.split(' ')[0].toLowerCase()
                  ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                  : darkMode
                  ? 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/20 hover:border-sky-500/40 hover:shadow-sky-950/20'
                  : 'bg-white border border-slate-200/90 shadow-md hover:border-sky-400 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-slate-800/60 dark:border-slate-800">
                  <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-105 transition-transform">
                    {categoryIcons[category.title] || <Sparkles className="w-5 h-5 text-sky-400" />}
                  </div>
                  <div>
                    <h3 className={`font-bold text-base sm:text-lg font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {skill.name}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                          skill.level === 'Proficient'
                            ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                            : skill.level === 'Intermediate'
                            ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                            : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Clean Progress Indicator with Bento Gradient */}
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-slate-950 border border-slate-800/80' : 'bg-slate-100 border border-slate-200'
                      }`}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 transition-all duration-500"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>

                      {/* Subtopic tags */}
                      {skill.topics && skill.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className={`text-[10px] px-2 py-0.5 rounded-lg border ${
                                darkMode
                                  ? 'bg-slate-950/80 text-slate-400 border-slate-800'
                                  : 'bg-slate-50 text-slate-600 border-slate-200'
                              }`}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-6 pt-3.5 border-t border-slate-800/60 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified in academic labs & projects</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
