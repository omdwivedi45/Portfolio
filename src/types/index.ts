export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export interface UserProfile {
  name: string;
  title: string;
  tagline: string;
  heading: string;
  subtitle: string;
  statusBadge: string;
  bio: string[];
  education: EducationItem;
  careerObjective: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period?: string;
  description: string;
  achievements: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface MilestoneItem {
  id: string;
  title: string;
  icon: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  year: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: string;
}
