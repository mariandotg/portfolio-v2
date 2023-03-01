import { Article } from '@/models/domain/Article';
import { Project } from '@/models/domain/Project';

export interface ResponseParams {}

export interface ResponseObj {
  projects: Array<Project>;
  articles: Array<Article>;
}
