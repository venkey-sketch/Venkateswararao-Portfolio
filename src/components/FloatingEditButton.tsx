import React, { useState } from 'react';
import { 
  Sliders, 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Trophy, 
  X, 
  Sparkles,
  ChevronUp
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface FloatingEditButtonProps {
  darkMode: boolean;
}

export const FloatingEditButton: React.FC<FloatingEditButtonProps> = ({ darkMode }) => {
  const { openEditModal, toastMessage } = usePortfolio();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="px-4 py-2.5 rounded-2xl bg-slate-900/95 text-white border border-sky-500/40 shadow-2xl shadow-sky-500/20 text-xs font-mono flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {/* Quick Tabs Popup Menu */}
        {isExpanded && (
          <div className={`p-2 rounded-2xl border shadow-2xl backdrop-blur-xl mb-1 flex flex-col gap-1 w-52 animate-in fade-in slide-in-from-bottom-3 duration-200 ${
            darkMode 
              ? 'bg-slate-900/95 border-slate-800 text-slate-200' 
              : 'bg-white/95 border-slate-200 text-slate-800'
          }`}>
            <div className="px-3 py-1.5 border-b border-slate-800/50 flex items-center justify-between text-[11px] font-mono font-bold text-sky-400">
              <span>Quick Edit Jump:</span>
              <button 
                onClick={() => setIsExpanded(false)}
                className="hover:text-white text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => {
                setIsExpanded(false);
                openEditModal('personal');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs hover:bg-sky-500/10 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-sky-400" />
              <span>Profile & Bio</span>
            </button>

            <button
              onClick={() => {
                setIsExpanded(false);
                openEditModal('skills');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs hover:bg-sky-500/10 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Skills Matrix</span>
            </button>

            <button
              onClick={() => {
                setIsExpanded(false);
                openEditModal('projects');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs hover:bg-sky-500/10 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Projects</span>
            </button>

            <button
              onClick={() => {
                setIsExpanded(false);
                openEditModal('education');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs hover:bg-sky-500/10 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>Education</span>
            </button>

            <button
              onClick={() => {
                setIsExpanded(false);
                openEditModal('certifications');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs hover:bg-sky-500/10 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>Certifications</span>
            </button>

            <button
              onClick={() => {
                setIsExpanded(false);
                openEditModal('achievements');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs hover:bg-sky-500/10 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-sky-400" />
              <span>Achievements</span>
            </button>

            <div className="border-t border-slate-800/50 pt-1 mt-1">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  openEditModal('personal');
                }}
                className="w-full py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Open Full Studio</span>
              </button>
            </div>
          </div>
        )}

        {/* Primary FAB button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title="Quick Edit Options Menu"
            className={`p-3 rounded-full border shadow-xl transition-all active:scale-95 cursor-pointer ${
              darkMode 
                ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-500' 
                : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500'
            }`}
          >
            {isExpanded ? <X className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>

          <button
            id="btn-floating-edit-options"
            onClick={() => openEditModal('personal')}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-slate-950 font-bold text-xs shadow-xl shadow-sky-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer font-display"
          >
            <Sliders className="w-4 h-4" />
            <span>Edit Options</span>
          </button>
        </div>
      </div>
    </>
  );
};
