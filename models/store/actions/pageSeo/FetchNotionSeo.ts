import { PageSeo } from '../../state/PageSeo';

export interface ResponseParams {
  slug: string;
}

export interface ResponseObj {
  response: Omit<PageSeo, 'loading'>;
  slug: string;
}
