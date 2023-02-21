import {
  CONTENT_TYPE,
  IPage,
  LOCALE_CODE,
} from '@/models/contentful/generated/contentful';

export interface ResponseParams {
  type: CONTENT_TYPE;
  locale: LOCALE_CODE;
}

export interface ResponseObj {
  response: Array<IPage>;
}

export type FetchPageContent = ({
  type,
  locale,
}: ResponseParams) => ResponseObj;
