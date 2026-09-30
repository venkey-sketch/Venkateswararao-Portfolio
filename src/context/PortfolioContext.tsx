import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PersonalInfo, 
  SkillCategory, 
  ProjectItem, 
  EducationItem, 
  CertificationItem, 
  AchievementItem 
} from '../types';
import {
  personalInfo as defaultPersonalInfo,
  skillsData as defaultSkillsData,
  projectsData as defaultProjectsData,
  educationData as defaultEducationData,
  certificationsData as defaultCertificationsData,
  achievementsData as defaultAchievementsData
} from '../data/portfolioData';

interface PortfolioContextType {
  personalInfo: PersonalInfo;
  skillsData: SkillCategory[];
  projectsData: ProjectItem[];
  educationData: EducationItem[];
  certificationsData: CertificationItem[];
  achievementsData: AchievementItem[];
  
  // Update methods
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  updateSocials: (socials: Partial<PersonalInfo['socials']>) => void;
  
  // Skills methods
  updateSkillCategory: (index: number, category: SkillCategory) => void;
  addSkillCategory: (category: SkillCategory) => void;
  deleteSkillCategory: (index: number) => void;
  addSkillToCategory: (categoryIndex: number, skill: SkillCategory['skills'][0]) => void;
  updateSkill: (categoryIndex: number, skillIndex: number, skill: SkillCategory['skills'][0]) => void;
  deleteSkill: (categoryIndex: number, skillIndex: number) => void;
  
  // Projects methods
  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  
  // Education methods
  addEducation: (item: EducationItem) => void;
  updateEducation: (index: number, item: Partial<EducationItem>) => void;
  deleteEducation: (index: number) => void;
  
  // Certifications methods
  addCertification: (item: CertificationItem) => void;
  updateCertification: (id: string, item: Partial<CertificationItem>) => void;
  deleteCertification: (id: string) => void;
  
  // Achievements methods
  addAchievement: (item: AchievementItem) => void;
  updateAchievement: (id: string, item: Partial<AchievementItem>) => void;
  deleteAchievement: (id: string) => void;
  
  // Reset & Backup
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (jsonString: string) => boolean;

  // Edit Modal Controls
  isEditModalOpen: boolean;
  activeEditTab: 'personal' | 'skills' | 'projects' | 'education' | 'certifications' | 'achievements' | 'backup';
  openEditModal: (tab?: 'personal' | 'skills' | 'projects' | 'education' | 'certifications' | 'achievements' | 'backup') => void;
  closeEditModal: () => void;
  
  // Toast notifications
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const STORAGE_KEYS = {
  PERSONAL: 'portfolio_personal_info_v1',
  SKILLS: 'portfolio_skills_data_v1',
  PROJECTS: 'portfolio_projects_data_v1',
  EDUCATION: 'portfolio_education_data_v1',
  CERTS: 'portfolio_certs_data_v1',
  ACHIEVEMENTS: 'portfolio_achievements_data_v1',
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from localStorage or fallback to defaults
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PERSONAL);
      return saved ? JSON.parse(saved) : defaultPersonalInfo;
    } catch {
      return defaultPersonalInfo;
    }
  });

  const [skillsData, setSkillsData] = useState<SkillCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : defaultSkillsData;
    } catch {
      return defaultSkillsData;
    }
  });

  const [projectsData, setProjectsData] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : defaultProjectsData;
    } catch {
      return defaultProjectsData;
    }
  });

  const [educationData, setEducationData] = useState<EducationItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EDUCATION);
      return saved ? JSON.parse(saved) : defaultEducationData;
    } catch {
      return defaultEducationData;
    }
  });

  const [certificationsData, setCertificationsData] = useState<CertificationItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTS);
      return saved ? JSON.parse(saved) : defaultCertificationsData;
    } catch {
      return defaultCertificationsData;
    }
  });

  const [achievementsData, setAchievementsData] = useState<AchievementItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
      return saved ? JSON.parse(saved) : defaultAchievementsData;
    } catch {
      return defaultAchievementsData;
    }
  });

  // Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeEditTab, setActiveEditTab] = useState<'personal' | 'skills' | 'projects' | 'education' | 'certifications' | 'achievements' | 'backup'>('personal');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PERSONAL, JSON.stringify(personalInfo));
    } catch (e) {
      console.error('Failed to persist personal info', e);
    }
  }, [personalInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skillsData));
    } catch (e) {
      console.error('Failed to persist skills', e);
    }
  }, [skillsData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsData));
    } catch (e) {
      console.error('Failed to persist projects', e);
    }
  }, [projectsData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(educationData));
    } catch (e) {
      console.error('Failed to persist education', e);
    }
  }, [educationData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(certificationsData));
    } catch (e) {
      console.error('Failed to persist certs', e);
    }
  }, [certificationsData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievementsData));
    } catch (e) {
      console.error('Failed to persist achievements', e);
    }
  }, [achievementsData]);

  const openEditModal = (tab?: 'personal' | 'skills' | 'projects' | 'education' | 'certifications' | 'achievements' | 'backup') => {
    if (tab) setActiveEditTab(tab);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Updaters
  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setPersonalInfo(prev => ({ ...prev, ...info }));
    showToast('Personal profile details updated!');
  };

  const updateSocials = (socials: Partial<PersonalInfo['socials']>) => {
    setPersonalInfo(prev => ({
      ...prev,
      socials: { ...prev.socials, ...socials }
    }));
    showToast('Social links updated!');
  };

  // Skills
  const updateSkillCategory = (index: number, category: SkillCategory) => {
    setSkillsData(prev => {
      const next = [...prev];
      next[index] = category;
      return next;
    });
    showToast('Skill category updated!');
  };

  const addSkillCategory = (category: SkillCategory) => {
    setSkillsData(prev => [...prev, category]);
    showToast('New skill category added!');
  };

  const deleteSkillCategory = (index: number) => {
    setSkillsData(prev => prev.filter((_, i) => i !== index));
    showToast('Skill category removed!');
  };

  const addSkillToCategory = (categoryIndex: number, skill: SkillCategory['skills'][0]) => {
    setSkillsData(prev => {
      const next = [...prev];
      if (next[categoryIndex]) {
        next[categoryIndex] = {
          ...next[categoryIndex],
          skills: [...next[categoryIndex].skills, skill]
        };
      }
      return next;
    });
    showToast(`Added ${skill.name} to skills!`);
  };

  const updateSkill = (categoryIndex: number, skillIndex: number, skill: SkillCategory['skills'][0]) => {
    setSkillsData(prev => {
      const next = [...prev];
      if (next[categoryIndex] && next[categoryIndex].skills[skillIndex]) {
        const nextSkills = [...next[categoryIndex].skills];
        nextSkills[skillIndex] = skill;
        next[categoryIndex] = {
          ...next[categoryIndex],
          skills: nextSkills
        };
      }
      return next;
    });
    showToast(`Updated ${skill.name}!`);
  };

  const deleteSkill = (categoryIndex: number, skillIndex: number) => {
    setSkillsData(prev => {
      const next = [...prev];
      if (next[categoryIndex]) {
        next[categoryIndex] = {
          ...next[categoryIndex],
          skills: next[categoryIndex].skills.filter((_, i) => i !== skillIndex)
        };
      }
      return next;
    });
    showToast('Skill removed!');
  };

  // Projects
  const addProject = (project: ProjectItem) => {
    setProjectsData(prev => [project, ...prev]);
    showToast(`Project "${project.title}" added!`);
  };

  const updateProject = (id: string, project: Partial<ProjectItem>) => {
    setProjectsData(prev => prev.map(p => p.id === id ? { ...p, ...project } : p));
    showToast('Project updated!');
  };

  const deleteProject = (id: string) => {
    setProjectsData(prev => prev.filter(p => p.id !== id));
    showToast('Project removed!');
  };

  // Education
  const addEducation = (item: EducationItem) => {
    setEducationData(prev => [...prev, item]);
    showToast('Education milestone added!');
  };

  const updateEducation = (index: number, item: Partial<EducationItem>) => {
    setEducationData(prev => {
      const next = [...prev];
      if (next[index]) {
        next[index] = { ...next[index], ...item };
      }
      return next;
    });
    showToast('Education updated!');
  };

  const deleteEducation = (index: number) => {
    setEducationData(prev => prev.filter((_, i) => i !== index));
    showToast('Education entry removed!');
  };

  // Certifications
  const addCertification = (item: CertificationItem) => {
    setCertificationsData(prev => [item, ...prev]);
    showToast(`Certification "${item.title}" added!`);
  };

  const updateCertification = (id: string, item: Partial<CertificationItem>) => {
    setCertificationsData(prev => prev.map(c => c.id === id ? { ...c, ...item } : c));
    showToast('Certification updated!');
  };

  const deleteCertification = (id: string) => {
    setCertificationsData(prev => prev.filter(c => c.id !== id));
    showToast('Certification removed!');
  };

  // Achievements
  const addAchievement = (item: AchievementItem) => {
    setAchievementsData(prev => [item, ...prev]);
    showToast(`Achievement "${item.title}" added!`);
  };

  const updateAchievement = (id: string, item: Partial<AchievementItem>) => {
    setAchievementsData(prev => prev.map(a => a.id === id ? { ...a, ...item } : a));
    showToast('Achievement updated!');
  };

  const deleteAchievement = (id: string) => {
    setAchievementsData(prev => prev.filter(a => a.id !== id));
    showToast('Achievement removed!');
  };

  // Reset to Defaults
  const resetToDefaults = () => {
    setPersonalInfo(defaultPersonalInfo);
    setSkillsData(defaultSkillsData);
    setProjectsData(defaultProjectsData);
    setEducationData(defaultEducationData);
    setCertificationsData(defaultCertificationsData);
    setAchievementsData(defaultAchievementsData);

    try {
      localStorage.removeItem(STORAGE_KEYS.PERSONAL);
      localStorage.removeItem(STORAGE_KEYS.SKILLS);
      localStorage.removeItem(STORAGE_KEYS.PROJECTS);
      localStorage.removeItem(STORAGE_KEYS.EDUCATION);
      localStorage.removeItem(STORAGE_KEYS.CERTS);
      localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
    } catch (e) {
      console.error(e);
    }
    showToast('All portfolio data reset to original defaults!');
  };

  // Export / Import JSON
  const exportJSON = (): string => {
    const data = {
      personalInfo,
      skillsData,
      projectsData,
      educationData,
      certificationsData,
      achievementsData,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };

  const importJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.personalInfo) setPersonalInfo(parsed.personalInfo);
      if (parsed.skillsData) setSkillsData(parsed.skillsData);
      if (parsed.projectsData) setProjectsData(parsed.projectsData);
      if (parsed.educationData) setEducationData(parsed.educationData);
      if (parsed.certificationsData) setCertificationsData(parsed.certificationsData);
      if (parsed.achievementsData) setAchievementsData(parsed.achievementsData);
      showToast('Custom portfolio data imported successfully!');
      return true;
    } catch {
      showToast('Error: Invalid JSON format!');
      return false;
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
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
        toastMessage,
        showToast,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
