import { IConstants } from '@/models/contentful/generated/contentful';

export interface ResponseParams {
  type: string;
}

export interface ResponseObj {
  response: Array<IConstants>;
}

export type FetchPageConstants = ({ type }: ResponseParams) => ResponseObj;
