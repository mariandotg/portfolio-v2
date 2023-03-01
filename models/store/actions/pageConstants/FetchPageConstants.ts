import {
  IConstants,
  LOCALE_CODE,
} from '@/models/contentful/generated/contentful';

export interface ResponseParams {
  locale: LOCALE_CODE;
}

export interface ResponseObj {
  response: Array<IConstants>;
}
