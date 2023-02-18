import { IPage } from '../contentful/generated/contentful';
import { FormattedData } from '../domain/FormattedData/FormattedData';

export type ContentfulDataAdapter = (data: IPage) => FormattedData;
