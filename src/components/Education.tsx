import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  School,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const { educationData, openEditModal } = usePortfolio();

  return (
    <section
      id="education"
      className={`py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Qualifications</span>
            </div>
            <button
              onClick={() => openEditModal('education')}
              title="Edit Education Timeline"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-400'
                  : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500 shadow-sm'
              }`}
            >
              <Sliders className="w-3 h-3 text-sky-400" />
              <span>Edit Education</span>
            </button>
          </div>
          <h2
            id="education-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education Timeline
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Formal academic background, undergraduate coursework at Vignan's University, and subject competencies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Center Line */}
          <div className={`absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 ${
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = index === 0;

              return (
                <div
                  key={item.degree + index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Dot with Pulse Effect on Current */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 ${
                      darkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'
                    }`}>
                      <div className={`w-3.5 h-3.5 rounded-full ${
                        isCurrent ? 'bg-sky-400 animate-pulse' : 'bg-slate-500'
                      }`} />
                    </div>
                  </div>

                  {/* Spacer for Alternate Column */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-10' : 'sm:pl-10'
                  }`}>
                    <div
                      className={`rounded-3xl border p-6 sm:p-7 transition-all duration-300 ${
                        isCurrent
                          ? darkMode
                            ? 'bg-slate-900/80 border-sky-500/40 shadow-xl shadow-black/30'
                            : 'bg-white border-sky-400 shadow-lg'
                          : darkMode
                          ? 'bg-slate-900/60 border-slate-800/80'
                          : 'bg-slate-50/80 border-slate-200 shadow-sm'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        {isCurrent && (
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 shadow-sm">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Degree & Institution */}
                      <h3 className={`text-lg sm:text-xl font-bold font-display ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.degree}
                      </h3>

                      <h4 className="text-sm font-semibold text-sky-400 mt-1 flex items-center gap-1.5">
                        <School className="w-4 h-4" />
                        <span>{item.institution}</span>
                      </h4>

                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      {/* CGPA / Score Placeholder Banner */}
                      <div className={`my-3.5 p-2.5 rounded-2xl border flex items-center gap-2 text-xs font-mono font-semibold ${
                        darkMode
                          ? 'bg-slate-950/60 border-slate-800 text-emerald-400'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      }`}>
                        <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.scorePlaceholder}</span>
                      </div>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>

                      {/* Coursework Tags */}
                      {item.coursework && item.coursework.length > 0 && (
                        <div>
                          <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 font-semibold ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            Key Coursework & Focus:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course) => (
                              <span
                                key={course}
                                className={`text-[11px] font-mono px-2.5 py-0.5 rounded-xl border ${
                                  darkMode
                                    ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                                    : 'bg-white border-slate-200 text-slate-700'
                                }`}
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
