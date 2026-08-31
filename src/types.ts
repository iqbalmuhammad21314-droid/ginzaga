export interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  metrics?: string;
  tags: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  years?: string;
  notes?: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  years?: string;
  notes?: string;
}

export interface OrganizationEntry {
  role: string;
  organization: string;
  years?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  location: string;
  yearsOfExperience: number;
  bio: string;
  quote: string;
  skills: string[];
  tools: string[];
  photoUrl: string;
  email: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  education?: EducationEntry[];
  experience?: ExperienceEntry[];
  organizations?: OrganizationEntry[];
  projects: Project[];
  keyHighlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  targetMember?: string;
}
