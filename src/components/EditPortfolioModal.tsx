import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Trophy, 
  FileJson, 
  Copy, 
  Check, 
  Download, 
  Upload, 
  ExternalLink,
  Sparkles,
  Info,
  Sliders,
  Eye
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem, EducationItem, CertificationItem, AchievementItem, SkillCategory } from '../types';

interface EditPortfolioModalProps {
  darkMode: boolean;
}

export const EditPortfolioModal: React.FC<EditPortfolioModalProps> = ({ darkMode }) => {
  const {
    personalInfo,
    skillsData,
    projectsData,
    educationData,
    certificationsData,
    achievementsData,
    updatePersonalInfo,
    updateSocials,
    updateSkillCategory,
    addSkillCategory,
    deleteSkillCategory,
    addSkillToCategory,
    updateSkill,
    deleteSkill,
    addProject,
    updateProject,
    deleteProject,
    addEducation,
    updateEducation,
    deleteEducation,
    addCertification,
    updateCertification,
    deleteCertification,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    resetToDefaults,
    exportJSON,
    importJSON,
    isEditModalOpen,
    activeEditTab,
    openEditModal,
    closeEditModal,
    showToast
  } = usePortfolio();

  const [copiedJson, setCopiedJson] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [newFocusArea, setNewFocusArea] = useState('');
  
  // Quick tag inputs
  const [newTechTag, setNewTechTag] = useState<Record<string, string>>({});
  const [newHighlight, setNewHighlight] = useState<Record<string, string>>({});
  const [newCoursework, setNewCoursework] = useState<Record<number, string>>({});
  const [newCertSkill, setNewCertSkill] = useState<Record<string, string>>({});
  const [newSkillTopic, setNewSkillTopic] = useState<Record<string, string>>({});

  if (!isEditModalOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(exportJSON());
    setCopiedJson(true);
    showToast('Portfolio JSON copied to clipboard!');
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const handleDownloadJson = () => {
    const jsonStr = exportJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `venkateswararao_portfolio_data_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Portfolio JSON exported as file!');
  };

  const handleApplyJsonImport = () => {
    if (!jsonInput.trim()) {
      showToast('Please paste JSON data first!');
      return;
    }
    const success = importJSON(jsonInput);
    if (success) {
      setJsonInput('');
    }
  };

  const handleAddFocusArea = () => {
    if (newFocusArea.trim() && !personalInfo.focusAreas.includes(newFocusArea.trim())) {
      updatePersonalInfo({
        focusAreas: [...personalInfo.focusAreas, newFocusArea.trim()]
      });
      setNewFocusArea('');
    }
  };

  const handleRemoveFocusArea = (tag: string) => {
    updatePersonalInfo({
      focusAreas: personalInfo.focusAreas.filter(t => t !== tag)
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className={`relative w-full max-w-5xl max-h-[90vh] rounded-3xl border flex flex-col shadow-2xl overflow-hidden ${
          darkMode 
            ? 'bg-slate-900 border-slate-800 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between shrink-0 ${
          darkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-sky-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display flex items-center gap-2">
                <span>Portfolio Customizer & Editor</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                  Live Editing
                </span>
              </h2>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Edit and update all portfolio details in real time. Changes automatically sync to browser storage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all data to default templates? Any custom edits will be reverted.')) {
                  resetToDefaults();
                }
              }}
              title="Reset all content to original defaults"
              className={`p-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-amber-500/10' 
                  : 'bg-white border-slate-300 text-amber-700 hover:bg-amber-50'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={closeEditModal}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-600'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex items-center gap-1.5 p-2 overflow-x-auto border-b shrink-0 scrollbar-none ${
          darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-100/60'
        }`}>
          {[
            { id: 'personal', label: 'Profile & Bio', icon: User },
            { id: 'skills', label: 'Skills Matrix', icon: Code2 },
            { id: 'projects', label: 'Projects', icon: FolderGit2 },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'certifications', label: 'Certifications', icon: Award },
            { id: 'achievements', label: 'Achievements', icon: Trophy },
            { id: 'backup', label: 'JSON Backup / Restore', icon: FileJson },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeEditTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => openEditModal(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 shadow-md font-bold'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: PERSONAL INFO */}
          {activeEditTab === 'personal' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">First/Display Name</label>
                  <input
                    type="text"
                    value={personalInfo.name}
                    onChange={(e) => updatePersonalInfo({ name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Full Official Name</label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Headline / Professional Title</label>
                  <input
                    type="text"
                    value={personalInfo.title}
                    onChange={(e) => updatePersonalInfo({ title: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Degree & Branch</label>
                  <input
                    type="text"
                    value={personalInfo.degree}
                    onChange={(e) => updatePersonalInfo({ degree: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Current Academic Year</label>
                  <input
                    type="text"
                    value={personalInfo.year}
                    onChange={(e) => updatePersonalInfo({ year: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">University / College Name</label>
                  <input
                    type="text"
                    value={personalInfo.institution}
                    onChange={(e) => updatePersonalInfo({ institution: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Location</label>
                  <input
                    type="text"
                    value={personalInfo.location}
                    onChange={(e) => updatePersonalInfo({ location: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Availability / Status Badge</label>
                  <input
                    type="text"
                    value={personalInfo.status}
                    onChange={(e) => updatePersonalInfo({ status: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Short Pitch / Hero Bio</label>
                  <input
                    type="text"
                    value={personalInfo.shortBio}
                    onChange={(e) => updatePersonalInfo({ shortBio: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Full About Me Narrative</label>
                  <textarea
                    rows={4}
                    value={personalInfo.bio}
                    onChange={(e) => updatePersonalInfo({ bio: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none resize-y ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Profile Photo / Avatar URL (optional)</label>
                  <input
                    type="text"
                    value={personalInfo.avatarUrl || ''}
                    placeholder="https://example.com/avatar.jpg"
                    onChange={(e) => updatePersonalInfo({ avatarUrl: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-mono text-sky-400">Resume PDF URL / Path</label>
                  <input
                    type="text"
                    value={personalInfo.resumeUrl}
                    onChange={(e) => updatePersonalInfo({ resumeUrl: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-sky-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                </div>
              </div>

              {/* Social Links Sub-section */}
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <h3 className="text-sm font-bold font-display mb-3 text-sky-400 flex items-center gap-2">
                  <span>Contact & Social Links</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono mb-1 text-slate-400">Direct Email</label>
                    <input
                      type="email"
                      value={personalInfo.socials.email}
                      onChange={(e) => updateSocials({ email: e.target.value })}
                      className={`w-full px-3 py-2 rounded-xl border text-xs outline-none ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono mb-1 text-slate-400">LinkedIn URL</label>
                    <input
                      type="text"
                      value={personalInfo.socials.linkedin}
                      onChange={(e) => updateSocials({ linkedin: e.target.value })}
                      className={`w-full px-3 py-2 rounded-xl border text-xs outline-none ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono mb-1 text-slate-400">GitHub URL</label>
                    <input
                      type="text"
                      value={personalInfo.socials.github}
                      onChange={(e) => updateSocials({ github: e.target.value })}
                      className={`w-full px-3 py-2 rounded-xl border text-xs outline-none ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Focus Areas Tags */}
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <h3 className="text-sm font-bold font-display mb-2 text-sky-400">
                  Focus Areas & Technical Pillars
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {personalInfo.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      <span>{area}</span>
                      <button
                        onClick={() => handleRemoveFocusArea(area)}
                        className="hover:text-red-400"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFocusArea}
                    onChange={(e) => setNewFocusArea(e.target.value)}
                    placeholder="Add focus area (e.g. Cloud Computing)"
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddFocusArea(); } }}
                    className={`flex-1 px-3 py-2 text-xs rounded-xl border outline-none ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                  <button
                    onClick={handleAddFocusArea}
                    className="px-4 py-2 text-xs font-bold rounded-xl bg-sky-500 text-slate-950 hover:bg-sky-400 cursor-pointer"
                  >
                    Add Tag
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SKILLS MATRIX */}
          {activeEditTab === 'skills' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display">Technical Skill Categories</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Configure language proficiencies, percentages (0-100%), and framework tags.
                  </p>
                </div>
                <button
                  onClick={() => {
                    addSkillCategory({
                      title: "New Category",
                      description: "Category description",
                      skills: [{ name: "New Skill", level: "Proficient", percentage: 80, iconName: "Code", topics: ["Topic 1"] }]
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 hover:opacity-90 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Category</span>
                </button>
              </div>

              {skillsData.map((category, catIdx) => (
                <div 
                  key={catIdx}
                  className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 border-b pb-3 border-slate-800/60">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-sky-400 mb-1">Category Title</label>
                        <input
                          type="text"
                          value={category.title}
                          onChange={(e) => {
                            const updated = { ...category, title: e.target.value };
                            updateSkillCategory(catIdx, updated);
                          }}
                          className={`w-full px-3 py-1.5 text-xs font-bold rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Category Summary</label>
                        <input
                          type="text"
                          value={category.description}
                          onChange={(e) => {
                            const updated = { ...category, description: e.target.value };
                            updateSkillCategory(catIdx, updated);
                          }}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => deleteSkillCategory(catIdx)}
                      title="Delete category"
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Skills in Category */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold font-mono text-slate-400">Skills in this category:</span>
                      <button
                        onClick={() => {
                          addSkillToCategory(catIdx, {
                            name: "New Skill",
                            level: "Intermediate",
                            percentage: 75,
                            iconName: "Code",
                            topics: ["Basics"]
                          });
                        }}
                        className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Skill</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIdx) => {
                        const skillKey = `${catIdx}-${skillIdx}`;
                        return (
                          <div
                            key={skillIdx}
                            className={`p-3.5 rounded-xl border space-y-2.5 ${
                              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => {
                                  updateSkill(catIdx, skillIdx, { ...skill, name: e.target.value });
                                }}
                                className={`font-bold text-xs px-2 py-1 rounded border outline-none ${
                                  darkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                                }`}
                              />
                              
                              <select
                                value={skill.level}
                                onChange={(e) => {
                                  updateSkill(catIdx, skillIdx, { ...skill, level: e.target.value });
                                }}
                                className={`text-[11px] font-mono px-2 py-1 rounded border outline-none ${
                                  darkMode ? 'bg-slate-950 border-slate-700 text-sky-400' : 'bg-slate-50 border-slate-300 text-sky-700'
                                }`}
                              >
                                <option value="Proficient">Proficient</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Foundational">Foundational</option>
                                <option value="Advanced">Advanced</option>
                              </select>

                              <button
                                onClick={() => deleteSkill(catIdx, skillIdx)}
                                className="text-red-400 hover:text-red-300 p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* Percentage Slider */}
                            <div className="flex items-center gap-3">
                              <span className="text-[11px] font-mono text-slate-400">Proficiency:</span>
                              <input
                                type="range"
                                min="10"
                                max="100"
                                value={skill.percentage}
                                onChange={(e) => {
                                  updateSkill(catIdx, skillIdx, { ...skill, percentage: parseInt(e.target.value) || 0 });
                                }}
                                className="flex-1 accent-sky-400 cursor-pointer"
                              />
                              <span className="text-xs font-mono font-bold text-sky-400 w-10 text-right">{skill.percentage}%</span>
                            </div>

                            {/* Topics Tags */}
                            <div>
                              <div className="flex flex-wrap gap-1 mb-1.5">
                                {(skill.topics || []).map((t, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 flex items-center gap-1 border border-slate-700"
                                  >
                                    <span>{t}</span>
                                    <button
                                      onClick={() => {
                                        const newTopics = (skill.topics || []).filter((_, i) => i !== tIdx);
                                        updateSkill(catIdx, skillIdx, { ...skill, topics: newTopics });
                                      }}
                                      className="hover:text-red-400"
                                    >
                                      ×
                                    </button>
                                  </span>
                                ))}
                              </div>
                              <div className="flex gap-1.5">
                                <input
                                  type="text"
                                  placeholder="Add subtopic..."
                                  value={newSkillTopic[skillKey] || ''}
                                  onChange={(e) => setNewSkillTopic({ ...newSkillTopic, [skillKey]: e.target.value })}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      e.preventDefault();
                                      const val = (newSkillTopic[skillKey] || '').trim();
                                      if (val) {
                                        updateSkill(catIdx, skillIdx, {
                                          ...skill,
                                          topics: [...(skill.topics || []), val]
                                        });
                                        setNewSkillTopic({ ...newSkillTopic, [skillKey]: '' });
                                      }
                                    }
                                  }}
                                  className={`flex-1 text-[11px] px-2 py-1 rounded border outline-none ${
                                    darkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                                  }`}
                                />
                                <button
                                  onClick={() => {
                                    const val = (newSkillTopic[skillKey] || '').trim();
                                    if (val) {
                                      updateSkill(catIdx, skillIdx, {
                                        ...skill,
                                        topics: [...(skill.topics || []), val]
                                      });
                                      setNewSkillTopic({ ...newSkillTopic, [skillKey]: '' });
                                    }
                                  }}
                                  className="text-[11px] px-2.5 py-1 rounded bg-sky-500 text-slate-950 font-bold hover:bg-sky-400"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeEditTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display">Featured Projects</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Add, edit, or remove software development projects, demo links, and GitHub repositories.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newId = `project-${Date.now()}`;
                    addProject({
                      id: newId,
                      title: "New Project Title",
                      tagline: "Short tagline describing this project",
                      description: "Detailed description of the application, architecture, and key problem it solves.",
                      technologies: ["JavaScript", "HTML", "CSS", "Python"],
                      githubUrl: "https://github.com/[YOUR-GITHUB]/new-project",
                      liveUrl: "https://example.com/demo",
                      category: "web",
                      featured: true,
                      highlights: [
                        "Key architecture milestone or algorithm",
                        "Responsive UI design with accessible controls"
                      ]
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 hover:opacity-90 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="space-y-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className={`p-5 rounded-2xl border space-y-4 ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 border-b pb-3 border-slate-800/60">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Project Title</label>
                          <input
                            type="text"
                            value={project.title}
                            onChange={(e) => updateProject(project.id, { title: e.target.value })}
                            className={`w-full px-3 py-1.5 text-sm font-bold rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Category</label>
                          <select
                            value={project.category}
                            onChange={(e) => updateProject(project.id, { category: e.target.value as any })}
                            className={`w-full px-3 py-1.5 text-xs font-mono rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-sky-400' : 'bg-white border-slate-300 text-sky-700'
                            }`}
                          >
                            <option value="ai">AI / ML</option>
                            <option value="web">Web Application</option>
                            <option value="data">Data Analytics</option>
                            <option value="all">General / Systems</option>
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Tagline</label>
                        <input
                          type="text"
                          value={project.tagline}
                          onChange={(e) => updateProject(project.id, { tagline: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Description</label>
                        <textarea
                          rows={2}
                          value={project.description}
                          onChange={(e) => updateProject(project.id, { description: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none resize-y ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">GitHub Repo URL</label>
                        <input
                          type="text"
                          value={project.githubUrl}
                          onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Live Demo URL</label>
                        <input
                          type="text"
                          value={project.liveUrl}
                          onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Technologies Tag Editor */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Technologies Used:</label>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1"
                          >
                            <span>{tech}</span>
                            <button
                              onClick={() => {
                                const newTech = project.technologies.filter((_, i) => i !== tIdx);
                                updateProject(project.id, { technologies: newTech });
                              }}
                              className="hover:text-red-400 ml-1"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add technology (e.g. React, Docker)..."
                          value={newTechTag[project.id] || ''}
                          onChange={(e) => setNewTechTag({ ...newTechTag, [project.id]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              const val = (newTechTag[project.id] || '').trim();
                              if (val) {
                                updateProject(project.id, { technologies: [...project.technologies, val] });
                                setNewTechTag({ ...newTechTag, [project.id]: '' });
                              }
                            }
                          }}
                          className={`flex-1 text-xs px-3 py-1.5 rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                        <button
                          onClick={() => {
                            const val = (newTechTag[project.id] || '').trim();
                            if (val) {
                              updateProject(project.id, { technologies: [...project.technologies, val] });
                              setNewTechTag({ ...newTechTag, [project.id]: '' });
                            }
                          }}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400"
                        >
                          Add Tech
                        </button>
                      </div>
                    </div>

                    {/* Highlights Bullet Points */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Key Highlights & Metrics:</label>
                      <div className="space-y-1.5 mb-2">
                        {project.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="flex-1 text-slate-300">{hl}</span>
                            <button
                              onClick={() => {
                                const newHls = project.highlights.filter((_, i) => i !== hIdx);
                                updateProject(project.id, { highlights: newHls });
                              }}
                              className="text-red-400 hover:text-red-300 text-xs px-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add project milestone or architectural highlight..."
                          value={newHighlight[project.id] || ''}
                          onChange={(e) => setNewHighlight({ ...newHighlight, [project.id]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              const val = (newHighlight[project.id] || '').trim();
                              if (val) {
                                updateProject(project.id, { highlights: [...project.highlights, val] });
                                setNewHighlight({ ...newHighlight, [project.id]: '' });
                              }
                            }
                          }}
                          className={`flex-1 text-xs px-3 py-1.5 rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                        <button
                          onClick={() => {
                            const val = (newHighlight[project.id] || '').trim();
                            if (val) {
                              updateProject(project.id, { highlights: [...project.highlights, val] });
                              setNewHighlight({ ...newHighlight, [project.id]: '' });
                            }
                          }}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                        >
                          Add Bullet
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EDUCATION */}
          {activeEditTab === 'education' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display">Academic Qualifications</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Configure degrees, Vignan's University coursework, CGPA scores, and timelines.
                  </p>
                </div>
                <button
                  onClick={() => {
                    addEducation({
                      degree: "Degree / Certification Title",
                      institution: "Institution / College Name",
                      period: "202X – Present",
                      location: "India",
                      scorePlaceholder: "[CGPA / Percentage - Update]",
                      description: "Detailed description of academic performance and major subject focus.",
                      coursework: ["Course 1", "Course 2"]
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 hover:opacity-90 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Education</span>
                </button>
              </div>

              <div className="space-y-4">
                {educationData.map((item, eduIdx) => (
                  <div
                    key={eduIdx}
                    className={`p-5 rounded-2xl border space-y-4 ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 border-b pb-3 border-slate-800/60">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Degree Title</label>
                          <input
                            type="text"
                            value={item.degree}
                            onChange={(e) => updateEducation(eduIdx, { degree: e.target.value })}
                            className={`w-full px-3 py-1.5 text-xs font-bold rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Institution Name</label>
                          <input
                            type="text"
                            value={item.institution}
                            onChange={(e) => updateEducation(eduIdx, { institution: e.target.value })}
                            className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => deleteEducation(eduIdx)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg cursor-pointer"
                        title="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Period (Years)</label>
                        <input
                          type="text"
                          value={item.period}
                          onChange={(e) => updateEducation(eduIdx, { period: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">CGPA / Percentage Score</label>
                        <input
                          type="text"
                          value={item.scorePlaceholder}
                          onChange={(e) => updateEducation(eduIdx, { scorePlaceholder: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs font-mono text-emerald-400 rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Location</label>
                        <input
                          type="text"
                          value={item.location}
                          onChange={(e) => updateEducation(eduIdx, { location: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Description & Overview</label>
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => updateEducation(eduIdx, { description: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none resize-y ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Coursework Tags */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Key Coursework Subjects:</label>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1"
                          >
                            <span>{course}</span>
                            <button
                              onClick={() => {
                                const newCourses = item.coursework.filter((_, i) => i !== cIdx);
                                updateEducation(eduIdx, { coursework: newCourses });
                              }}
                              className="hover:text-red-400 ml-1"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add coursework (e.g. Distributed Systems)..."
                          value={newCoursework[eduIdx] || ''}
                          onChange={(e) => setNewCoursework({ ...newCoursework, [eduIdx]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              const val = (newCoursework[eduIdx] || '').trim();
                              if (val) {
                                updateEducation(eduIdx, { coursework: [...item.coursework, val] });
                                setNewCoursework({ ...newCoursework, [eduIdx]: '' });
                              }
                            }
                          }}
                          className={`flex-1 text-xs px-3 py-1.5 rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                        <button
                          onClick={() => {
                            const val = (newCoursework[eduIdx] || '').trim();
                            if (val) {
                              updateEducation(eduIdx, { coursework: [...item.coursework, val] });
                              setNewCoursework({ ...newCoursework, [eduIdx]: '' });
                            }
                          }}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400"
                        >
                          Add Subject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CERTIFICATIONS */}
          {activeEditTab === 'certifications' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display">Certifications & Training</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Add certificates, verification credentials, issuing organizations, and dates.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newId = `cert-${Date.now()}`;
                    addCertification({
                      id: newId,
                      title: "New Certification Title",
                      issuer: "Issuing Organization (e.g. Coursera / HackerRank)",
                      issueDate: "2025",
                      credentialUrl: "https://example.com/verify",
                      skillsCovered: ["Skill 1", "Skill 2"],
                      category: "Programming"
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 hover:opacity-90 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Certification</span>
                </button>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className={`p-5 rounded-2xl border space-y-4 ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 border-b pb-3 border-slate-800/60">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Certification Title</label>
                          <input
                            type="text"
                            value={cert.title}
                            onChange={(e) => updateCertification(cert.id, { title: e.target.value })}
                            className={`w-full px-3 py-1.5 text-xs font-bold rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Category Badge</label>
                          <input
                            type="text"
                            value={cert.category}
                            onChange={(e) => updateCertification(cert.id, { category: e.target.value })}
                            className={`w-full px-3 py-1.5 text-xs font-mono rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-sky-400' : 'bg-white border-slate-300 text-sky-700'
                            }`}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => deleteCertification(cert.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg cursor-pointer"
                        title="Delete certificate"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Issuing Body</label>
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Issue Date</label>
                        <input
                          type="text"
                          value={cert.issueDate}
                          onChange={(e) => updateCertification(cert.id, { issueDate: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Verification URL</label>
                        <input
                          type="text"
                          value={cert.credentialUrl}
                          onChange={(e) => updateCertification(cert.id, { credentialUrl: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Competencies Covered */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Competencies Covered:</label>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {cert.skillsCovered.map((sk, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1"
                          >
                            <span>{sk}</span>
                            <button
                              onClick={() => {
                                const newSkills = cert.skillsCovered.filter((_, i) => i !== sIdx);
                                updateCertification(cert.id, { skillsCovered: newSkills });
                              }}
                              className="hover:text-red-400 ml-1"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add competency..."
                          value={newCertSkill[cert.id] || ''}
                          onChange={(e) => setNewCertSkill({ ...newCertSkill, [cert.id]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              const val = (newCertSkill[cert.id] || '').trim();
                              if (val) {
                                updateCertification(cert.id, { skillsCovered: [...cert.skillsCovered, val] });
                                setNewCertSkill({ ...newCertSkill, [cert.id]: '' });
                              }
                            }
                          }}
                          className={`flex-1 text-xs px-3 py-1.5 rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                        <button
                          onClick={() => {
                            const val = (newCertSkill[cert.id] || '').trim();
                            if (val) {
                              updateCertification(cert.id, { skillsCovered: [...cert.skillsCovered, val] });
                              setNewCertSkill({ ...newCertSkill, [cert.id]: '' });
                            }
                          }}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400"
                        >
                          Add Skill
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: ACHIEVEMENTS */}
          {activeEditTab === 'achievements' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display">Honors, Activities & Milestones</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Configure hackathon milestones, coding practice statistics, and club memberships.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newId = `ach-${Date.now()}`;
                    addAchievement({
                      id: newId,
                      title: "New Milestone / Award",
                      category: "Competitions",
                      description: "Summary of the honor, extracurricular achievement, or project milestone.",
                      dateOrMetric: "Milestone Metric",
                      iconName: "Trophy"
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 hover:opacity-90 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Achievement</span>
                </button>
              </div>

              <div className="space-y-4">
                {achievementsData.map((item) => (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl border space-y-4 ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 border-b pb-3 border-slate-800/60">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Achievement Title</label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updateAchievement(item.id, { title: e.target.value })}
                            className={`w-full px-3 py-1.5 text-xs font-bold rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-sky-400 mb-1">Category Badge</label>
                          <input
                            type="text"
                            value={item.category}
                            onChange={(e) => updateAchievement(item.id, { category: e.target.value })}
                            className={`w-full px-3 py-1.5 text-xs font-mono rounded-lg border outline-none ${
                              darkMode ? 'bg-slate-900 border-slate-700 text-sky-400' : 'bg-white border-slate-300 text-sky-700'
                            }`}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => deleteAchievement(item.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg cursor-pointer"
                        title="Delete achievement"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Description</label>
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => updateAchievement(item.id, { description: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border outline-none resize-y ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Date / Metric Badge</label>
                        <input
                          type="text"
                          value={item.dateOrMetric}
                          onChange={(e) => updateAchievement(item.id, { dateOrMetric: e.target.value })}
                          className={`w-full px-3 py-1.5 text-xs font-mono text-emerald-400 rounded-lg border outline-none ${
                            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: BACKUP & RESTORE JSON */}
          {activeEditTab === 'backup' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold font-display">Data Backup, Export & Restore</h3>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Export your customized portfolio data as a JSON file or copy it to your clipboard. You can also paste previously exported JSON to restore your data instantly.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleCopyJson}
                  className={`p-4 rounded-2xl border flex items-center justify-center gap-2.5 font-bold text-xs transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-sky-400 hover:border-sky-500'
                      : 'bg-slate-50 border-slate-300 text-sky-700 hover:border-sky-600'
                  }`}
                >
                  {copiedJson ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedJson ? 'Copied JSON to Clipboard!' : 'Copy Full Portfolio JSON'}</span>
                </button>

                <button
                  onClick={handleDownloadJson}
                  className="p-4 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer hover:opacity-90"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .JSON Backup File</span>
                </button>
              </div>

              {/* Import JSON textarea */}
              <div className={`p-5 rounded-2xl border space-y-3 ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-xs font-mono font-bold uppercase text-sky-400 flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>Import / Restore JSON Data</span>
                </h4>
                <textarea
                  rows={6}
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="Paste exported portfolio JSON structure here..."
                  className={`w-full p-3 text-xs font-mono rounded-xl border outline-none resize-y ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
                <button
                  onClick={handleApplyJsonImport}
                  className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs cursor-pointer transition-all"
                >
                  Validate & Apply Imported JSON
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className={`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 ${
          darkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Check className="w-4 h-4 shrink-0" />
            <span>Edits are automatically saved to your browser!</span>
          </div>

          <button
            onClick={closeEditModal}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-95"
          >
            <Eye className="w-4 h-4" />
            <span>Done & View Portfolio</span>
          </button>
        </div>

      </div>
    </div>
  );
};
