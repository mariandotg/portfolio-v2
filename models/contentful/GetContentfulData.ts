import { ISection } from './generated/contentful';

export type GetContentfulData = (type: string) => Promise<Array<ISection>>;
