import { Button } from '../Button';
import { CtaContact } from '../CtaContact';
import { CtaContactText } from '../CtaContactText';
import { Input } from '../Input';
import { JobCard } from '../JobCards';
import { SkillCard } from '../SkillCard';

export interface AboutContent {
  ctaDescription: string;
  cta: Button;
}

export interface ProjectsContent {
  projects: any;
}

export interface SkillsContent {
  skillCards: Array<SkillCard>;
}

export interface JobsContent {
  jobCards: Array<JobCard>;
}

export interface ArticlesContent {
  articles: any;
}

export interface ContactContent {
  ctaContact: CtaContact;
  ctaContactText: CtaContactText;
  contactForm: Array<Input>;
  sendMail: Button;
}
