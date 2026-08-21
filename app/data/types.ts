export interface Testimonial {
  text: string;
  name: string;
  position: string;
}

export interface WorkExperienceItem {
  title: string;
  company: string;
  companyLogo: string;
  companyLogoIsSvg?: boolean;
  companyUrl?: string;
  period: string;
  duration?: string;
  location: string;
  technologies?: string[];
  responsibilities: string[];
  testimonials?: Testimonial[];
  highlight?: boolean;
}

export interface SkillItem {
  label: string;
  years?: string;
}

export interface SkillCategory {
  label: string;
  items: SkillItem[];
}

export interface Interest {
  label: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface App {
  name: string;
  url: string;
  icon: string;
  tagline: string;
  description: string;
  technologies?: string[];
}

export interface PullQuote {
  text: string;
  name: string;
  position: string;
}
