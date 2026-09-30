import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Building2, 
  CheckCircle, 
  Sparkles,
  Binary,
  Globe,
  BarChart,
  Brain,
  Database,
  X,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CertificationItem } from '../types';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const { certificationsData, openEditModal } = usePortfolio();
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  const getCertIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Binary className="w-6 h-6 text-emerald-400" />;
      case 'Web Development':
        return <Globe className="w-6 h-6 text-teal-400" />;
      case 'Data Science':
        return <BarChart className="w-6 h-6 text-cyan-400" />;
      case 'Machine Learning':
        return <Brain className="w-6 h-6 text-emerald-400" />;
      default:
        return <Database className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section
      id="certifications"
      className={`py-24 relative ${darkMode ? 'bg-slate-950/70' : 'bg-slate-50/70'} border-t border-b ${
        darkMode ? 'border-slate-900' : 'border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <button
              onClick={() => openEditModal('certifications')}
              title="Edit Certifications"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-400'
                  : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500 shadow-sm'
              }`}
            >
              <Sliders className="w-3 h-3 text-sky-400" />
              <span>Edit Certs</span>
            </button>
          </div>
          <h2
            id="certifications-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Certifications
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional certifications and verified online coursework in Python, web development, data analytics, and machine learning.
          </p>
        </div>

        {/* Certifications Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/20 hover:border-sky-500/50 hover:shadow-sky-950/20'
                  : 'bg-white border-slate-200/90 shadow-md hover:border-sky-400 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-105 transition-transform text-sky-400">
                    {getCertIcon(cert.category)}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold font-display mb-3 group-hover:text-sky-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="space-y-2 text-xs mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      <strong>Issuer:</strong> {cert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      <strong>Date:</strong> {cert.issueDate}
                    </span>
                  </div>
                </div>

                {/* Skills Covered Badges */}
                <div className="pt-2">
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 font-semibold ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-xl border ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View / Verify Button */}
              <div className="pt-6 mt-4 border-t border-slate-800/60 dark:border-slate-800">
                <button
                  onClick={() => setActiveCert(cert)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-slate-950/80 border-slate-700 text-sky-400 hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 hover:text-slate-950 hover:border-transparent'
                      : 'bg-slate-50 border-slate-300 text-sky-700 hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 hover:text-slate-950 hover:border-transparent'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className={`max-w-lg w-full rounded-3xl border p-6 sm:p-7 ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-400" />
                  <h3 className="font-bold font-display">{activeCert.title}</h3>
                </div>
                <button onClick={() => setActiveCert(null)} className="p-1 rounded-xl hover:bg-slate-800 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-sky-500/10 border-2 border-dashed border-sky-500/30 flex items-center justify-center">
                  <Award className="w-10 h-10 text-sky-400" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-lg">{activeCert.title}</h4>
                  <p className="text-sm text-slate-400">{activeCert.issuer} • {activeCert.issueDate}</p>
                </div>

                <div className="p-3 rounded-2xl bg-sky-500/5 border border-sky-500/20 text-xs text-sky-400 font-mono">
                  [Credential ID & Verification Link Placeholder]
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-2">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-300 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Open Verification URL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
