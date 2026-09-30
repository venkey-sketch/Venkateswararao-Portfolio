import React from 'react';
import { 
  X, 
  FileDown, 
  ExternalLink, 
  Printer, 
  GraduationCap, 
  Code, 
  Briefcase, 
  FolderGit2, 
  Award,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const { 
    personalInfo, 
    educationData, 
    skillsData, 
    projectsData, 
    achievementsData, 
    openEditModal 
  } = usePortfolio();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className={`max-w-4xl w-full rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-display">
                Resume Preview • {personalInfo.fullName}
              </h3>
              <p className="text-[11px] text-emerald-500 font-mono">
                {personalInfo.degree} • {personalInfo.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                openEditModal('personal');
              }}
              title="Edit Profile & Resume Info"
              className="px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-300 font-mono text-xs hidden sm:flex items-center gap-1 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              <span>Edit Details</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              download={`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              title="Print Resume"
              className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 hidden sm:flex"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Interactive Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-sm leading-relaxed">
          
          {/* Header Contact Block */}
          <div className="border-b pb-6 border-slate-800/80 dark:border-slate-800 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-500">
                {personalInfo.fullName}
              </h1>
              <p className="text-sm font-semibold mt-0.5">
                {personalInfo.degree} • 3rd Year
              </p>
              <p className="text-xs text-slate-400">
                {personalInfo.institution} • {personalInfo.location}
              </p>
            </div>

            <div className="text-xs space-y-1 sm:text-right font-mono text-slate-400">
              <p>Email: {personalInfo.socials.email}</p>
              <p>LinkedIn: [YOUR LINKEDIN PROFILE]</p>
              <p>GitHub: [YOUR GITHUB PROFILE]</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 border-b border-emerald-500/30 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Dedicated 3rd-year Computer Science and Engineering student at Vignan's University with strong problem-solving skills and academic training in Data Structures, Algorithms, Database Management Systems, and Web Application development. Enthusiastic about building efficient software tools and exploring software engineering internship opportunities.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 border-b border-emerald-500/30 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-emerald-400 text-xs">{edu.institution} — {edu.location}</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">{edu.scorePlaceholder}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-400 shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 border-b border-emerald-500/30 pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p><strong className="text-white">Programming:</strong> Python, C, Java</p>
              <p><strong className="text-white">Web Stack:</strong> HTML5, CSS3, JavaScript</p>
              <p><strong className="text-white">Databases:</strong> SQL, MySQL, Relational Design</p>
              <p><strong className="text-white">CS Fundamentals:</strong> DSA, DBMS, OS, Computer Networks</p>
              <p><strong className="text-white">Tools & Platforms:</strong> Git, GitHub, VS Code</p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 border-b border-emerald-500/30 pb-1">
              Featured Software Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white">{proj.title}</h3>
                    <span className="font-mono text-[11px] text-emerald-400">{proj.technologies.join(', ')}</span>
                  </div>
                  <p className="text-slate-300 text-xs">{proj.description}</p>
                  <ul className="list-disc list-inside text-slate-400 text-[11px] space-y-0.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 border-b border-emerald-500/30 pb-1">
              Achievements & Activities
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              {achievementsData.map((ach) => (
                <li key={ach.id}>
                  <strong className="text-white">{ach.title}:</strong> {ach.description} ({ach.dateOrMetric})
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 dark:bg-slate-950 flex justify-between items-center text-xs">
          <span className="text-slate-400 font-mono">
            File target: assets/resume.pdf
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
            >
              Close Preview
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="Bhattiprolu_Venkateswararao_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
