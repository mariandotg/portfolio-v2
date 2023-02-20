import { IPage } from '@/models/contentful/generated/contentful';

export interface ResponseParams {
  type: string;
}

export interface ResponseObj {
  response: Array<IPage>;
}

export type FetchPageContent = ({ type }: ResponseParams) => ResponseObj;
