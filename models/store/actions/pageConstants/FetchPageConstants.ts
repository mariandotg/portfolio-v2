import { IConstants } from '@/models/contentful/generated/contentful';

export interface ResponseParams {
  locale: string;
}

export interface ResponseObj {
  response: Array<IConstants>;
}
