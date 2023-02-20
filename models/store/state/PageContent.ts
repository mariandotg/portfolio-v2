import { PageContentSections } from './PageContentSections';

export interface PageContent {
  name: string;
  sections: PageContentSections;
  loading: boolean;
  locale: string;
}
