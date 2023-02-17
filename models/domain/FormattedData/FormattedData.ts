import {
  AboutContent,
  ArticlesContent,
  ContactContent,
  JobsContent,
  ProjectsContent,
  SkillsContent,
} from './FormattedContent';
import { FormattedSection } from './FormattedSection';

export interface FormattedData {
  about: FormattedSection<AboutContent>;
  featuredProjects: FormattedSection<ProjectsContent>;
  skills: FormattedSection<SkillsContent>;
  jobExperience: FormattedSection<JobsContent>;
  latestArticles: FormattedSection<ArticlesContent>;
  contact: FormattedSection<ContactContent>;
}
