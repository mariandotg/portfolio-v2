import { Date } from './Date';
import { Tag } from './Tag';

export interface Article {
  id: string;
  date: Date;
  image: string;
  name: string;
  tags: Array<Tag>;
}
