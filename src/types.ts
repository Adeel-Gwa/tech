export type ProjectCategory =
  | 'ALL'
  | 'WEB APPS'
  | 'SAAS'
  | 'AI'
  | 'E-COMMERCE'
  | 'BUSINESS'
  | 'EDUCATION'
  | 'DASHBOARDS'
  | 'CYBERSECURITY'
  | 'DESIGN';

export type ProjectStatus = 'Live' | 'Client Deployed' | 'Production' | 'Enterprise' | 'Design Concept';

export interface Project {
  id: number;
  code: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  result: string;
  features: string[];
  technologies: string[];
  image?: string;
  mockupBadge?: string;
  previewType?: 'realestate' | 'health' | 'recipe' | 'travel' | 'learning' | 'ai' | 'saas' | 'cyber' | 'ecommerce' | 'dashboard';
  accentGradient: string;
  liveUrl: string | null;
  githubUrl?: string | null;
  caseStudyUrl?: string | null;
  status: ProjectStatus;
  featured: boolean;
  clientMarket?: 'Pakistan' | 'United Kingdom' | 'Global' | 'UAE';
  year?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  icon: string;
  gradient: string;
}

export interface TechSkill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Machine Learning' | 'Database & Cloud' | 'Design & Tools';
  level: string;
  iconName: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  client: string;
  role: string;
  company: string;
  market: string;
  feedback: string;
  projectTitle: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}
