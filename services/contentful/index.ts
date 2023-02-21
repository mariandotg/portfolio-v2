import { Params } from '@/models/contentful/GetContentfulData';
import { RawData } from '@/models/contentful/RawData';

const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const getContentfulData = <T>({ type, locale = 'en-US' }: Params): Array<T> => {
  return client
    .getEntries({
      content_type: type,
      include: 3,
      locale,
    })
    .then((response: RawData<T>) => response.items)
    .catch((error: object) => console.log(error));
};

const contentfulService = {
  client,
  getContentfulData,
};

export default contentfulService;
