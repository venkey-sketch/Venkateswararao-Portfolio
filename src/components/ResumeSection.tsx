import React from 'react';
import { 
  FileDown, 
  FileText, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  GraduationCap,
  Code,
  Briefcase,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ResumeSectionProps {
  darkMode: boolean;
  onOpenResumePreview: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  darkMode,
  onOpenResumePreview,
}) => {
  const { personalInfo, openEditModal } = usePortfolio();
  return (
    <section className={`py-20 relative ${darkMode ? 'bg-slate-950/40' : 'bg-slate-50/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Banner Card */}
        <div
          id="resume-cta-banner"
          className={`relative rounded-3xl border overflow-hidden p-8 sm:p-12 transition-all ${
            darkMode
              ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/40'
              : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/50'
          }`}
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Want to know more about my background?
              </h2>

              <p
                className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Download my comprehensive resume for a structured overview of my academic coursework at Vignan's University, technical competencies, project milestones, and certifications.
              </p>

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap gap-3 pt-2 text-xs font-medium">
                <div className="flex items-center gap-1.5 text-sky-400 px-3 py-1.5 rounded-xl border border-sky-500/20 bg-sky-500/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Updated for 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 px-3 py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>ATS-Friendly Format</span>
                </div>
                <div className="flex items-center gap-1.5 text-teal-400 px-3 py-1.5 rounded-xl border border-teal-500/20 bg-teal-500/5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Verified Project Links</span>
                </div>
              </div>
            </div>

            {/* Right Buttons Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              {/* Main Download Button */}
              <a
                id="btn-download-resume-cta"
                href={personalInfo.resumeUrl}
                download="Bhattiprolu_Venkateswararao_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              {/* View Online Preview Button */}
              <button
                id="btn-preview-resume-cta"
                onClick={onOpenResumePreview}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-xs border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-950/80 border-slate-700/80 text-slate-300 hover:border-sky-500/60 hover:text-sky-400'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-sky-600 hover:text-sky-700 shadow-sm'
                }`}
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>Preview Resume In-App</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
