import React from 'react';
import { 
  Trophy, 
  Code2, 
  Users, 
  FolderGit2, 
  Briefcase, 
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AchievementsProps {
  darkMode: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const { achievementsData, openEditModal } = usePortfolio();

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-teal-400" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-cyan-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="achievements"
      className={`py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Extracurriculars</span>
            </div>
            <button
              onClick={() => openEditModal('achievements')}
              title="Edit Achievements & Activities"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-400'
                  : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500 shadow-sm'
              }`}
            >
              <Sliders className="w-3 h-3 text-sky-400" />
              <span>Edit Achievements</span>
            </button>
          </div>
          <h2
            id="achievements-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Achievements & Activities
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Track record in competitive coding practice, technical hackathons, university technical clubs, and academic milestones.
          </p>
        </div>

        {/* Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/20 hover:border-sky-500/50 hover:shadow-sky-950/20'
                  : 'bg-white border-slate-200/90 shadow-md hover:border-sky-400 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getAchievementIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950/60 dark:bg-slate-950 text-sky-400 border border-sky-500/30 font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold font-display mb-2 group-hover:text-sky-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Metric / Date Badge Footer */}
              <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.dateOrMetric}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
