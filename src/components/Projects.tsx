import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  X,
  Code2,
  Bot,
  ListTodo,
  BarChart3,
  Sliders,
  Play,
  FileCode,
  Zap,
  ArrowRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../types';
import { AiProjectModal } from './AiProjectModal';
import { TaskAppModal } from './TaskAppModal';
import { DataDashboardModal } from './DataDashboardModal';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const { projectsData, openEditModal } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Dedicated interactive modal states
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiModalTab, setAiModalTab] = useState<'demo' | 'code' | 'guide'>('demo');
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [dataModalOpen, setDataModalOpen] = useState(false);

  const handleOpenLiveProject = (project: ProjectItem) => {
    if (project.id === 'ai-career-mentor') {
      setAiModalTab('demo');
      setAiModalOpen(true);
    } else if (project.id === 'task-management-app') {
      setTaskModalOpen(true);
    } else if (project.id === 'data-analytics-dashboard') {
      setDataModalOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  const handleOpenCodeProject = (project: ProjectItem) => {
    if (project.id === 'ai-career-mentor') {
      setAiModalTab('code');
      setAiModalOpen(true);
    } else if (project.id === 'task-management-app') {
      setTaskModalOpen(true);
    } else if (project.id === 'data-analytics-dashboard') {
      setDataModalOpen(true);
    } else if (project.githubUrl && !project.githubUrl.includes('[YOUR-GITHUB]')) {
      window.open(project.githubUrl, '_blank');
    } else {
      setSelectedProject(project);
    }
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ai-career-mentor':
        return <Bot className="w-8 h-8 text-sky-400" />;
      case 'task-management-app':
        return <ListTodo className="w-8 h-8 text-teal-400" />;
      case 'data-analytics-dashboard':
        return <BarChart3 className="w-8 h-8 text-emerald-400" />;
      default:
        return <Code2 className="w-8 h-8 text-sky-400" />;
    }
  };

  return (
    <section
      id="projects"
      className={`py-24 relative ${darkMode ? 'bg-slate-950/70' : 'bg-slate-50/70'} border-t border-b ${
        darkMode ? 'border-slate-900' : 'border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Bento Project Showcase</span>
            </div>
            <button
              onClick={() => openEditModal('projects')}
              title="Edit Projects Showcase"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-sky-400 hover:border-sky-400'
                  : 'bg-white border-slate-300 text-sky-700 hover:border-sky-500 shadow-sm'
              }`}
            >
              <Sliders className="w-3 h-3 text-sky-400" />
              <span>Edit Projects</span>
            </button>
          </div>
          <h2
            id="projects-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Featured Projects
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world software applications demonstrating full-stack engineering, API architecture, data analytics, and modern UI execution.
          </p>
        </div>

        {/* Featured Callout Banner for AI Project */}
        <div className={`mb-10 p-4 sm:p-5 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-4 transition-all ${
          darkMode 
            ? 'bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-900/60 border-sky-500/30 text-slate-200' 
            : 'bg-gradient-to-r from-sky-50 via-indigo-50 to-white border-sky-200 text-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  Featured AI Innovation: AI Career Mentor
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Full Code Pack Included
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Complete runnable prototype, GitHub README, Python Flask REST API server, and step-by-step how-to guide.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={() => {
                setAiModalTab('demo');
                setAiModalOpen(true);
              }}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Launch Live AI App</span>
            </button>
            <button
              onClick={() => {
                setAiModalTab('code');
                setAiModalOpen(true);
              }}
              className={`flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-sky-400' : 'bg-white border-slate-300 text-slate-700 hover:border-sky-500'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo Pack</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/30 hover:border-sky-500/50 hover:shadow-sky-950/30'
                  : 'bg-white border-slate-200/90 shadow-md hover:border-sky-400 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Project Visual Banner */}
                <div 
                  onClick={() => handleOpenLiveProject(project)}
                  className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800/80 flex flex-col items-center justify-center p-6 text-center overflow-hidden cursor-pointer group/banner"
                >
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/90 text-sky-400 border border-sky-500/30">
                    {project.category.toUpperCase()}
                  </div>

                  {/* Play Overlay Indicator on Hover */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 opacity-90 group-hover/banner:opacity-100">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Run App</span>
                  </div>

                  {/* Center Icon & Placeholder Tag */}
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 tracking-wide font-display">
                    {project.title}
                  </span>
                  <span className="text-[10px] font-mono text-sky-400 mt-1 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>Interactive Prototype Available</span>
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className={`text-xl font-bold font-display group-hover:text-sky-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="pt-2">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 font-semibold ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono px-2.5 py-1 rounded-xl border ${
                            darkMode
                              ? 'bg-slate-950/80 border-slate-800 text-sky-400'
                              : 'bg-slate-100 border-slate-200 text-sky-800 font-medium'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className={`p-6 pt-0 border-t ${darkMode ? 'border-slate-800/80' : 'border-slate-100'} mt-4 pt-4 flex items-center gap-3`}>
                <button
                  onClick={() => handleOpenCodeProject(project)}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-sky-500 hover:text-sky-400'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-sky-600 hover:text-slate-900'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Code</span>
                </button>

                <button
                  onClick={() => handleOpenLiveProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-95 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Live App</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Generic Details (fallback) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`max-w-2xl w-full rounded-2xl border p-6 max-h-[90vh] overflow-y-auto ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold font-display">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="p-1.5 rounded-lg hover:bg-slate-800">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-4 space-y-4 text-sm">
                <p>{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deep Interactive AI Career Mentor Modal */}
        <AiProjectModal
          isOpen={aiModalOpen}
          onClose={() => setAiModalOpen(false)}
          darkMode={darkMode}
          initialTab={aiModalTab}
        />

        {/* Interactive Task Management App Modal */}
        <TaskAppModal
          isOpen={taskModalOpen}
          onClose={() => setTaskModalOpen(false)}
          darkMode={darkMode}
        />

        {/* Interactive Data Analytics Dashboard Modal */}
        <DataDashboardModal
          isOpen={dataModalOpen}
          onClose={() => setDataModalOpen(false)}
          darkMode={darkMode}
        />

      </div>
    </section>
  );
};

