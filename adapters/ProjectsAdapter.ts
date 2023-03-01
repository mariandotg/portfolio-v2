import { CompoundFilterObj } from '@/models/notion/Filters';

export const projectsAdapter = (post: any[]) => {
  return post.map((p) => {
    return {
      id: p.id,
      image: p.properties.Image.files[0].external.url,
      name: p.properties.Name.title[0].plain_text,
      tags: p.properties.Tags.multi_select,
      description: p.properties.Description.rich_text[0].plain_text,
      repository: p.properties.Repository.url,
      live: p.properties.Live.url,
    };
  });
};

export const projectsFilter: CompoundFilterObj = {
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
        equals: 'Projects Database',
      },
    },
  ],
};
