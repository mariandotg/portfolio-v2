import { PageSeo } from '@/models/store/state/PageSeo';

export const pageSeoAdapter = (post: any): Omit<PageSeo, 'loading'> => {
  return {
    id: post.id,
    title: post.properties.SeoTitle.rich_text[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    image: post.properties.Image.files[0].external.url,
    slug: post.properties.SeoSlug.rich_text[0].plain_text,
    path: post.properties.SeoPath.formula.string,
    openGraphType: post.properties.SeoOpenGraphType.rich_text[0].plain_text,
  };
};
