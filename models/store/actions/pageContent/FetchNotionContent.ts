import { Article } from '@/models/domain/Article';

export interface ResponseParams {}

export interface ResponseObj {
  projects: Array<any>;
  articles: Array<Article>;
}
