import { CompoundFilterObj } from '@/models/notion/Filters';

export const articlesAdapter = (post: any[]) => {
  return post.map((p) => {
    return {
      id: p.id,
      date: p.properties.Date.date,
      image: p.properties.Image.files[0].external.url,
      name: p.properties.Name.title[0].plain_text,
      tags: p.properties.Tags.multi_select,
    };
  });
};

export const articlesFilter: CompoundFilterObj = {
  and: [
    {
      property: 'Stage',
      select: {
        equals: 'Published',
      },
    },
    {
      property: 'Database',
      select: {
        equals: 'Articles Database',
      },
    },
  ],
};
