import { CONTENT_TYPE, LOCALE_CODE } from './generated/contentful';

export interface Params {
  type: CONTENT_TYPE;
  locale: LOCALE_CODE;
}

export type GetContentfulData = <T>({
  type,
  locale = 'en-US',
}: Params) => Array<T>;
