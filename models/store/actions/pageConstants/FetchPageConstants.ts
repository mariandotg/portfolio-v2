import {
  CONTENT_TYPE,
  IConstants,
  LOCALE_CODE,
} from '@/models/contentful/generated/contentful';

export interface ResponseParams {
  type: CONTENT_TYPE;
  locale: LOCALE_CODE;
}

export interface ResponseObj {
  response: Array<IConstants>;
}

export type FetchPageConstants = ({
  type,
  locale,
}: ResponseParams) => ResponseObj;
