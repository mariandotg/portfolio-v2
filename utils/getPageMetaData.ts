export const getPageMetaData = (post: any) => {
  return {
    id: post.id,
    title: post.properties.Title.rich_text[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    slug: post.properties.Slug.rich_text[0].plain_text,
    path: post.properties.Path.formula.string,
    openGraphType: post.properties.OpenGraphType.rich_text[0].plain_text,
  };
};
