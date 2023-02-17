import { IPage } from '@/models/contentful/generated/contentful';
import { RawData } from '@/models/contentful/RawData';
import { GetContentfulData } from '@/models/contentful/GetContentfulData';

export const getContentfulData: GetContentfulData = (type: string) => {
  const contentful = require('contentful');
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  return client
    .getEntries({
      content_type: type,
      include: 3,
    })
    .then((response: RawData<IPage>) => response.items)
    .catch((error: object) => console.log(error));
};
