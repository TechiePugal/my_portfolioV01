export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  logo: string;
  achievements?: string[];
  coursework?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  logo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}