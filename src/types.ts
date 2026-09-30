export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'ai' | 'web' | 'data' | 'all';
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Intermediate", "Familiar", "Core Concept"
    percentage: number;
    iconName: string;
    topics?: string[];
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  scorePlaceholder: string;
  description: string;
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  skillsCovered: string[];
  category: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Coding Practice' | 'Competitions' | 'College Activities' | 'Projects' | 'Academic' | 'Internships' | string;
  description: string;
  dateOrMetric: string;
  iconName: string;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  degree: string;
  year: string;
  institution: string;
  location: string;
  status: string;
  bio: string;
  shortBio: string;
  resumeUrl: string;
  avatarUrl?: string;
  socials: SocialLinks;
  focusAreas: string[];
}
