const socialTags = ({
    openGraphType,
    url,
    title,
    description,
    image,
    createdAt,
    updatedAt,
  }: any) => {
    const metaTags = [
      // TWITTER
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: "twitter:url", content: url},
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:src', content: image },
      {
        name: 'twitter:site',
        content: settings?.meta?.social?.twitter,
      },
      {
        name: 'twitter:creator',
        content: settings?.meta?.social?.twitter,
      },
      // OPEN GRAPH
      { name: 'og:type', content: openGraphType },
      { name: 'og:url', content: url },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      {
        name: 'og:site_name',
        content: settings?.meta?.siteName,
      },
      {
        name: 'og:published_time',
        content: createdAt || new Date().toISOString(),
      },
      {
        name: 'og:modified_time',
        content: updatedAt || new Date().toISOString(),
      },
    ];

    return metaTags;
  };