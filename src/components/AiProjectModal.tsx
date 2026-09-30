import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  FileCode, 
  GitBranch, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Send, 
  ListFilter, 
  Play, 
  RotateCcw,
  BookOpen,
  Award,
  Zap,
  Code2,
  FolderGit2
} from 'lucide-react';
import { 
  aiCareerMentorCodeFiles, 
  careerRolesDatabase, 
  CareerRoleData, 
  ProjectCodeFile 
} from '../data/aiProjectData';

interface AiProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  initialTab?: 'demo' | 'code' | 'guide';
}

export const AiProjectModal: React.FC<AiProjectModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  initialTab = 'demo'
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'guide'>(initialTab);
  
  // Interactive Live Demo State
  const [selectedRoleId, setSelectedRoleId] = useState<string>('full-stack-python');
  const [studentYear, setStudentYear] = useState<string>('3rd Year B.Tech CSE');
  const [userSkills, setUserSkills] = useState<string[]>([
    'Python', 
    'HTML5 & CSS3', 
    'JavaScript', 
    'SQL & Relational DBs', 
    'Git & GitHub'
  ]);
  const [customSkillInput, setCustomSkillInput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [hasGenerated, setHasGenerated] = useState<boolean>(true);
  
  // AI Chat Assistant State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'mentor'; text: string; time: string }>>([
    {
      sender: 'mentor',
      text: "👋 Hi Venkateswararao! I'm your AI Career Mentor. I've analyzed industry hiring patterns for CSE students. Ask me anything about skill gaps, project roadmaps, or technical interview questions!",
      time: 'Just now'
    }
  ]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isChatTyping, setIsChatTyping] = useState<boolean>(false);

  // GitHub Code Viewer State
  const [selectedFileIndex, setSelectedFileIndex] = useState<number>(0);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentRole: CareerRoleData = careerRolesDatabase[selectedRoleId] || careerRolesDatabase['full-stack-python'];
  const selectedCodeFile: ProjectCodeFile = aiCareerMentorCodeFiles[selectedFileIndex] || aiCareerMentorCodeFiles[0];

  // Calculate Match Score
  const requiredSkills = currentRole.requiredSkills;
  const acquiredSkills = requiredSkills.filter(req => 
    userSkills.some(u => u.toLowerCase().includes(req.name.toLowerCase()) || req.name.toLowerCase().includes(u.toLowerCase()))
  );
  const missingSkills = requiredSkills.filter(req => !acquiredSkills.includes(req));
  const matchPercentage = Math.round((acquiredSkills.length / Math.max(requiredSkills.length, 1)) * 100);

  // Toggle user skill
  const toggleSkill = (skillName: string) => {
    if (userSkills.includes(skillName)) {
      setUserSkills(userSkills.filter(s => s !== skillName));
    } else {
      setUserSkills([...userSkills, skillName]);
    }
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSkillInput.trim()) return;
    if (!userSkills.includes(customSkillInput.trim())) {
      setUserSkills([...userSkills, customSkillInput.trim()]);
    }
    setCustomSkillInput('');
  };

  const handleRunAnalysis = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 600);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    const newMsg = { sender: 'user' as const, text, time: 'Just now' };
    setChatMessages(prev => [...prev, newMsg]);
    if (!textToSend) setChatInput('');
    setIsChatTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = text.toLowerCase();
      if (lower.includes('interview') || lower.includes('prepare')) {
        reply = "💡 For technical interviews: 1) Master core DSA (Arrays, HashMaps, Two Pointers, Trees on LeetCode), 2) Explain time/space complexity before coding, and 3) Be prepared to describe this AI Career Mentor project using the STAR method (Situation, Task, Action, Result).";
      } else if (lower.includes('project') || lower.includes('portfolio')) {
        reply = "🛠️ For a standout portfolio: Include 2-3 production-grade projects. Always include a live interactive link and a well-structured GitHub README with architecture diagrams and installation commands, just like this project!";
      } else if (lower.includes('resume') || lower.includes('internship')) {
        reply = "📄 Resume tip for 3rd year CSE: Keep it strictly 1 page. List technical skills grouped by category, emphasize your degree at Vignan's University, and mention quantifiable metrics (e.g. 'Reduced skill assessment latency by 40%').";
      } else if (lower.includes('flask') || lower.includes('backend') || lower.includes('python')) {
        reply = "🐍 In Python & Flask: Focus on RESTful principles, clean blueprint routing, CORS headers, and SQLAlchemy ORM. In interviews, explain why Flask is lightweight and how WSGI servers like Gunicorn serve requests in production.";
      } else {
        reply = `🎯 Regarding "${text}": The most effective strategy is consistent 60-90 minute daily hands-on practice. Build real features, write Git commits daily, and pair theory (Operating Systems, DBMS) with active coding!`;
      }

      setChatMessages(prev => [...prev, { sender: 'mentor', text: reply, time: 'Just now' }]);
      setIsChatTyping(false);
    }, 700);
  };

  const handleCopyCode = (filename: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleDownloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadFullRepo = () => {
    aiCareerMentorCodeFiles.forEach((file, idx) => {
      setTimeout(() => {
        handleDownloadFile(file.name, file.content);
      }, idx * 250);
    });
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div
        className={`w-full max-w-6xl max-h-[94vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Top Header Bar */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${
          darkMode ? 'border-slate-800/90 bg-slate-900/70' : 'border-slate-200 bg-slate-100/70'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg font-display tracking-tight">
                  AI Career Mentor & Skill Gap Analyzer
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  Featured Project
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Full-Stack AI Project • Python Flask Backend • Modern Bento Web UI • GitHub Code Package
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className={`flex items-center justify-between border-b px-4 sm:px-6 overflow-x-auto ${
          darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex space-x-1 sm:space-x-3">
            <button
              onClick={() => setActiveTab('demo')}
              className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'demo'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>🚀 Live Interactive App</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'code'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>📦 GitHub Repository & Code Pack</span>
              <span className="px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                Ready to Push
              </span>
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'guide'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>💡 Architecture & Interview Guide</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 py-2">
            <button
              onClick={handleDownloadFullRepo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{copiedAll ? 'Downloaded Repo Files!' : 'Download Full Project'}</span>
            </button>
          </div>
        </div>

        {/* Content Body Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: LIVE INTERACTIVE APP */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              {/* Introduction Banner */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between gap-4 flex-wrap ${
                darkMode ? 'bg-sky-950/20 border-sky-500/30 text-sky-200' : 'bg-sky-50 border-sky-200 text-sky-900'
              }`}>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
                  <p className="text-xs sm:text-sm">
                    <strong>Live In-App Working Prototype:</strong> Test how AI Career Mentor evaluates student competencies, benchmarks against industry job descriptions, and synthesizes 6-month learning sprints.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    🟢 Real-time Engine
                  </span>
                </div>
              </div>

              {/* Two Column Interactive Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Config Panel */}
                <div className={`lg:col-span-5 rounded-2xl border p-5 space-y-5 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-sky-400 mb-1">
                      1. Student Profile & Role Target
                    </h4>
                    <p className="text-xs text-slate-400">
                      Configure career parameters to test roadmap synthesis
                    </p>
                  </div>

                  {/* Target Role Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold block text-slate-300">
                      Target Career Pathway:
                    </label>
                    <select
                      value={selectedRoleId}
                      onChange={(e) => setSelectedRoleId(e.target.value)}
                      className={`w-full p-2.5 rounded-xl border text-xs font-medium outline-none transition-all ${
                        darkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      {Object.values(careerRolesDatabase).map(role => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-slate-400 italic">
                      {currentRole.tagline}
                    </p>
                  </div>

                  {/* Academic Year */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold block text-slate-300">
                      Academic Year / Experience:
                    </label>
                    <select
                      value={studentYear}
                      onChange={(e) => setStudentYear(e.target.value)}
                      className={`w-full p-2.5 rounded-xl border text-xs font-medium outline-none transition-all ${
                        darkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="1st Year B.Tech CSE">1st Year B.Tech CSE (Fundamentals)</option>
                      <option value="2nd Year B.Tech CSE">2nd Year B.Tech CSE (Core Subjects)</option>
                      <option value="3rd Year B.Tech CSE">3rd Year B.Tech CSE (Internship Ready - Current)</option>
                      <option value="4th Year / Final Year">Final Year (Placement & Capstone Focus)</option>
                    </select>
                  </div>

                  {/* Acquired Skills Checkbox List */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-slate-300">
                        Select Current Acquired Skills:
                      </label>
                      <span className="text-[10px] font-mono text-sky-400">
                        {userSkills.length} selected
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 rounded-xl border bg-slate-950/40 border-slate-800">
                      {[
                        'Python', 'Java', 'C', 'HTML5 & CSS3', 'JavaScript', 
                        'SQL & Relational DBs', 'Git & GitHub', 'Flask / FastAPI', 
                        'Docker Containers', 'NumPy & Pandas', 'Matplotlib & Seaborn', 
                        'Scikit-Learn', 'Linux / Bash Scripting', 'CI/CD Pipelines (GitHub Actions)'
                      ].map(skill => {
                        const isSelected = userSkills.includes(skill);
                        return (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => toggleSkill(skill)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-sm'
                                : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:border-slate-500'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{skill}
                          </button>
                        );
                      })}
                    </div>

                    {/* Add Custom Skill */}
                    <form onSubmit={handleAddCustomSkill} className="flex gap-2 pt-1">
                      <input
                        type="text"
                        placeholder="Add custom skill (e.g. Next.js)..."
                        value={customSkillInput}
                        onChange={(e) => setCustomSkillInput(e.target.value)}
                        className={`flex-1 p-2 rounded-xl border text-xs outline-none ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300'
                        }`}
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 cursor-pointer"
                      >
                        Add
                      </button>
                    </form>
                  </div>

                  {/* Run Button */}
                  <button
                    onClick={handleRunAnalysis}
                    disabled={isGenerating}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-lg shadow-sky-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isGenerating ? (
                      <>
                        <RotateCcw className="w-4 h-4 animate-spin" />
                        <span>Synthesizing Industry Skill Analysis...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Regenerate Roadmap & Gap Analysis</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Right Results & Roadmap Panel */}
                <div className={`lg:col-span-7 rounded-2xl border p-5 space-y-6 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  
                  {/* Top Score Bento Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className={`p-4 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Skill Match Index
                      </span>
                      <div className="text-3xl font-extrabold font-mono text-emerald-400">
                        {matchPercentage}%
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {matchPercentage >= 70 ? '🎯 Ready for Internships' : '📈 Good Foundation'}
                      </span>
                    </div>

                    <div className={`p-4 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Target Market
                      </span>
                      <div className="text-xs font-bold text-white mt-1">
                        {currentRole.avgSalary}
                      </div>
                      <span className="text-[10px] text-sky-400 font-mono mt-1 block">
                        Demand: {currentRole.demandLevel}
                      </span>
                    </div>

                    <div className={`p-4 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Missing Priority Skills
                      </span>
                      <div className="text-2xl font-bold font-mono text-rose-400">
                        {missingSkills.length}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        To study in sprints
                      </span>
                    </div>
                  </div>

                  {/* Skill Gap Breakdown */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">
                      Skill Gap Matrix:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* Acquired Skills */}
                      <div className={`p-3 rounded-xl border ${
                        darkMode ? 'bg-slate-950/50 border-emerald-950/40' : 'bg-emerald-50/50 border-emerald-200'
                      }`}>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-2">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Acquired Competencies ({acquiredSkills.length})</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {acquiredSkills.length > 0 ? (
                            acquiredSkills.map(s => (
                              <span key={s.name} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                {s.name}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs text-slate-500">No skills matched yet</span>
                          )}
                        </div>
                      </div>

                      {/* Missing Skills */}
                      <div className={`p-3 rounded-xl border ${
                        darkMode ? 'bg-slate-950/50 border-rose-950/40' : 'bg-rose-50/50 border-rose-200'
                      }`}>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-2">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Recommended Sprints ({missingSkills.length})</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {missingSkills.length > 0 ? (
                            missingSkills.map(s => (
                              <span key={s.name} className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20">
                                {s.name} ({s.importance})
                              </span>
                            ))
                          ) : (
                            <span className="text-xs text-emerald-400">All required skills met!</span>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* 6-Month Roadmap Timeline */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 flex items-center justify-between">
                      <span>Synthesized 6-Month Milestone Roadmap:</span>
                      <span className="text-[10px] text-sky-400 font-normal">Customized for {studentYear}</span>
                    </h5>

                    <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                      {currentRole.milestones.map((m, idx) => (
                        <div
                          key={m.month}
                          className={`p-3.5 rounded-xl border transition-all ${
                            darkMode ? 'bg-slate-950/70 border-slate-800 hover:border-sky-500/40' : 'bg-white border-slate-200 hover:border-sky-400'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
                              {m.month}
                            </span>
                            <span className="text-xs font-bold text-slate-200">
                              {m.title}
                            </span>
                          </div>
                          
                          <p className="text-xs text-slate-400 mb-2">
                            {m.goal}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {m.keyTopics.map(t => (
                              <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                                • {t}
                              </span>
                            ))}
                          </div>

                          <div className="pt-1.5 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-sky-300">
                            <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span><strong>Hands-on Capstone:</strong> {m.handsOnProject}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Interactive AI Career Assistant Chat Box */}
              <div className={`rounded-2xl border p-5 space-y-4 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-sky-400" />
                    <h4 className="text-sm font-bold font-display text-white">
                      Ask AI Career Mentor Q&A Assistant
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    Live Chat Simulation
                  </span>
                </div>

                {/* Pre-prompt Shortcut Pills */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] text-slate-400 self-center mr-1">Quick Prompts:</span>
                  {[
                    "How should I explain this project in interviews?",
                    "What LeetCode DSA topics are must-know?",
                    "How to prepare resume for 3rd year internships?",
                    "What backend concepts are asked in Python/Flask interviews?"
                  ].map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="px-2.5 py-1 rounded-full text-[11px] border bg-slate-800/50 hover:bg-sky-500/20 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 transition-colors cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Chat Log Window */}
                <div className="h-44 overflow-y-auto p-3 rounded-xl border bg-slate-950/60 border-slate-800 space-y-2.5">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.sender === 'mentor' && (
                        <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 text-xs">
                          🤖
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] sm:max-w-[75%] p-2.5 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-sky-500 text-slate-950 font-medium rounded-br-none'
                            : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isChatTyping && (
                    <div className="flex gap-2 items-center text-xs text-sky-400 italic">
                      <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                      <span>AI Mentor is thinking...</span>
                    </div>
                  )}
                </div>

                {/* Chat Input Bar */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask AI Career Mentor anything about skills, placements, projects..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                    className={`flex-1 p-2.5 rounded-xl border text-xs outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-white border-slate-300 text-slate-900 focus:border-sky-500'
                    }`}
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: GITHUB REPOSITORY & CODE PACK */}
          {activeTab === 'code' && (
            <div className="space-y-6">
              
              {/* GitHub Header & Action Banner */}
              <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Github className="w-5 h-5 text-white" />
                    <h4 className="text-base font-bold font-display text-white">
                      Complete GitHub Repository Codebase
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Production-grade files ready to copy into your repository or download as a complete bundle.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => handleCopyCode(selectedCodeFile.name, selectedCodeFile.content)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 cursor-pointer"
                  >
                    {copiedFile === selectedCodeFile.name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFile === selectedCodeFile.name ? 'Copied File!' : `Copy ${selectedCodeFile.name}`}</span>
                  </button>

                  <button
                    onClick={handleDownloadFullRepo}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 cursor-pointer shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{copiedAll ? 'Downloaded All Files!' : 'Download All Repo Files'}</span>
                  </button>
                </div>
              </div>

              {/* Code Explorer Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* File Sidebar List */}
                <div className={`md:col-span-4 rounded-2xl border p-3 space-y-1.5 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Project Repository Files ({aiCareerMentorCodeFiles.length})
                  </div>

                  {aiCareerMentorCodeFiles.map((file, idx) => (
                    <button
                      key={file.name}
                      onClick={() => setSelectedFileIndex(idx)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                        selectedFileIndex === idx
                          ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 font-bold'
                          : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileCode className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {file.language}
                      </span>
                    </button>
                  ))}

                  {/* Git Push Commands Cheat Sheet */}
                  <div className="mt-4 p-3 rounded-xl border bg-slate-950/80 border-slate-800 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-bold">
                      ⚡ Quick Git Push Commands
                    </span>
                    <pre className="text-[10px] font-mono text-slate-400 leading-relaxed overflow-x-auto">
{`git init
git add .
git commit -m "feat: AI Career Mentor"
git branch -M main
git remote add origin https://github.com/bvenkateswararao/ai-career-mentor.git
git push -u origin main`}
                    </pre>
                  </div>
                </div>

                {/* Code Preview Viewer */}
                <div className={`md:col-span-8 rounded-2xl border flex flex-col overflow-hidden ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-700'
                }`}>
                  <div className="p-3 border-b border-slate-800/80 bg-slate-900/90 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="text-xs font-mono text-slate-300 font-semibold ml-2">
                        {selectedCodeFile.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 italic">
                      {selectedCodeFile.description}
                    </span>
                  </div>

                  <div className="p-4 overflow-x-auto max-h-[460px]">
                    <pre className="text-xs font-mono text-slate-200 leading-relaxed">
                      <code>{selectedCodeFile.content}</code>
                    </pre>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: HOW TO BUILD & INTERVIEW GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-6">
              
              {/* Architecture Overview */}
              <div className={`p-6 rounded-2xl border space-y-4 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-base font-bold font-display text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sky-400" />
                  <span>System Architecture & Engineering Design</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The AI Career Mentor application is designed around a decoupled client-server architecture. The frontend handles dynamic user input (career choice, skills matrix, timeline) and communicates via asynchronous JSON requests with the Python Flask backend service.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800 space-y-1.5">
                    <span className="text-xs font-bold text-sky-400 font-mono">1. Client Layer</span>
                    <p className="text-xs text-slate-400">
                      HTML5, Modern CSS Bento Grid & JavaScript (ES6+). Handles user chip selections, client-side validation, and dynamic DOM rendering.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 font-mono">2. Flask REST Backend</span>
                    <p className="text-xs text-slate-400">
                      Flask 3.0 server with CORS enabled. Provides REST endpoints (<code className="text-emerald-300">/api/analyze-skills</code>, <code className="text-emerald-300">/api/roadmap</code>).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800 space-y-1.5">
                    <span className="text-xs font-bold text-indigo-400 font-mono">3. Skill Engine & AI Model</span>
                    <p className="text-xs text-slate-400">
                      Calculates overlap matrices, identifies missing prerequisites, and dynamically constructs 6-month milestones with project briefs.
                    </p>
                  </div>
                </div>
              </div>

              {/* STAR Method Interview Talking Points */}
              <div className={`p-6 rounded-2xl border space-y-4 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h4 className="text-base font-bold font-display text-white">
                    How Venkateswararao Can Explain This Project to Interviewers (STAR Method)
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border bg-slate-950/50 border-slate-800">
                    <span className="text-xs font-bold text-sky-400 block mb-1">
                      Situation (Context):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "During my 3rd year in Computer Science at Vignan's University, I observed that students often struggle to understand which industry skills to learn beyond the college syllabus. Most career advice online is static and generic."
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border bg-slate-950/50 border-slate-800">
                    <span className="text-xs font-bold text-emerald-400 block mb-1">
                      Task (Goal):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "I wanted to build an automated, intelligent web platform that analyzes student skills against live market demands, outputs a quantified gap score, and synthesizes step-by-step month-by-month learning sprints."
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border bg-slate-950/50 border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 block mb-1">
                      Action (Engineering Implementation):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "I architected the backend using Python and Flask, implementing REST endpoints for skill matching and roadmap generation. On the frontend, I crafted a responsive Bento-style UI in JavaScript with asynchronous fetch handlers. I organized the repository with modular structure, complete documentation, and automated requirements."
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border bg-slate-950/50 border-slate-800">
                    <span className="text-xs font-bold text-amber-400 block mb-1">
                      Result (Impact & Learnings):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "The project successfully provides students with clear roadmaps for Full Stack, ML, and Cloud engineering roles. It deepened my mastery of Python API engineering, client-server communication, and modular software design."
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Setup Guide */}
              <div className={`p-6 rounded-2xl border space-y-4 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-base font-bold font-display text-white">
                  Step-by-Step Local Run Instructions
                </h4>
                
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300">
                  <li><strong>Install Python:</strong> Make sure Python 3.9+ is installed (<code className="font-mono text-sky-400">python --version</code>).</li>
                  <li><strong>Clone or Download the Codebase:</strong> Use the "Download All Repo Files" button or copy <code className="font-mono text-sky-400">app.py</code> and <code className="font-mono text-sky-400">requirements.txt</code>.</li>
                  <li><strong>Create a Virtual Environment:</strong> Run <code className="font-mono text-sky-400">python -m venv venv</code> and activate it.</li>
                  <li><strong>Install Dependencies:</strong> Run <code className="font-mono text-sky-400">pip install -r requirements.txt</code>.</li>
                  <li><strong>Start the Backend Server:</strong> Run <code className="font-mono text-sky-400">python app.py</code>.</li>
                  <li><strong>Open Browser:</strong> Visit <code className="font-mono text-sky-400">http://localhost:5000</code> to use the application!</li>
                </ol>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className={`p-4 border-t flex items-center justify-between gap-4 ${
          darkMode ? 'border-slate-800/90 bg-slate-900/70' : 'border-slate-200 bg-slate-100/70'
        }`}>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <FolderGit2 className="w-4 h-4 text-sky-400" />
            <span>Project: <strong>AI Career Mentor</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('code')}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 cursor-pointer"
            >
              View GitHub Repo Files →
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
