import { IPage } from './generated/contentful';

export type GetContentfulData = (type: string) => Promise<Array<IPage>>;
