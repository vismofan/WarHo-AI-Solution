export interface LandingCopy {
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  advantages: {
    title: string;
    description: string;
  }[];
  assessmentLeadIn: string;
}

export interface AssessmentData {
  companyName: string;
  role: string;
  challenge: string;
  techStack: string;
}

export interface StrategicAnalysis {
  summary: string;
  useCases: string[];
  recommendedModel: string;
}

export enum CopyVariant {
  COMPLEXITY = 'COMPLEXITY',
  GROWTH = 'GROWTH',
  CUSTOM = 'CUSTOM'
}