import { Tag } from './Tag';

export interface Project {
  id: string;
  image: string;
  name: string;
  tags: Array<Tag>;
  description: string;
  repository: string;
  live: string;
}
