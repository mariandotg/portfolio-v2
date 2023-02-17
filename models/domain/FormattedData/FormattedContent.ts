import {
  IButtonFields,
  IHeadlineFields,
  IInputFields,
  IJobCardFields,
  ISkillsCardFields,
} from '../../contentful/generated/contentful';

interface FormattedContent {
  slug?: string;
  id: string;
}

export interface AboutContent extends FormattedContent {
  description: string;
  cta: IButtonFields;
}

export interface ProjectsContent extends FormattedContent {
  projects: any;
}

export interface SkillsContent extends FormattedContent {
  skillCards: ISkillsCardFields[];
}

export interface JobsContent extends FormattedContent {
  jobCards: IJobCardFields[];
}

export interface ArticlesContent extends FormattedContent {
  articles: any;
}

export interface ContactContent extends FormattedContent {
  ctaContactHeadline: IHeadlineFields;
  ctaContactParagraph: string;
  contactForm: IInputFields[];
  sendMail: IButtonFields;
}

export type SectionContent =
  | AboutContent
  | ProjectsContent
  | SkillsContent
  | JobsContent
  | ArticlesContent
  | ContactContent;
