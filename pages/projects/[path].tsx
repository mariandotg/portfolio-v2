import React from 'react';
import { GetServerSideProps } from 'next';

import { wrapper } from '@/store';
import { fetchPageConstants } from '@/store/actions/pageConstants/fetchPageConstants';
import { fetchNotionContent } from '@/store/actions/pageContent/fetchNotionContent';
import { fetchPageContent } from '@/store/actions/pageContent/fetchPageContent';
import { fetchNotionSeo } from '@/store/actions/pageSeo/fetchNotionSeo';

import { useAppSelector } from '@/hooks/store/useAppSelector';
import Head from 'next/head';

const Page = () => {
  const social = useAppSelector(
    (state) => state.pageConstants.constants.social
  );
  const settings = useAppSelector((state) => state.pageSeo);

  const twitterUrl = social.find(
    (socialMedia) => socialMedia.icon === 'twitter'
  )!.url;

  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: settings.url },
    { name: 'twitter:title', content: settings.title },
    { name: 'twitter:description', content: settings.description },
    { name: 'twitter:image:src', content: settings.image },
    { name: 'twitter:image', content: settings.image },
    { name: 'twitter:image:alt', content: settings.imageAlt },
    { name: 'twitter:creator', content: twitterUrl },
    { name: 'twitter:site', content: twitterUrl },
    { name: 'og:type', content: settings.openGraphType },
    { name: 'og:url', content: settings.url },
    { name: 'og:title', content: settings.title },
    { name: 'og:description', content: settings.description },
    { name: 'og:image', content: settings.image },
    { name: 'og:site_name', content: settings.title },
  ];

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel='icon' href='./favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com/' />
        <meta name='description' content={settings.description} />
        <meta itemProp='name' content={settings.title} />
        <meta itemProp='description' content={settings.description} />
        <meta itemProp='image' content={settings.image} />
        {metaTags.map(({ name, content }) => {
          return <meta key={name} name={name} content={content} />;
        })}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': settings.schemaType,
              name: settings.title,
              about: settings.description,
              url: settings.url,
            }),
          }}
        />
      </Head>
      <div className='bg-primary'>Page {settings.title}</div>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale, params }) => {
    const { path } = params!;
    try {
      await store.dispatch(fetchPageContent({ locale: locale! })).unwrap();
      await store.dispatch(fetchPageConstants({ locale: locale! })).unwrap();
      await store.dispatch(fetchNotionContent()).unwrap();
      await store.dispatch(fetchNotionSeo({ slug: path as string })).unwrap();
    } catch (rejectedValueOrSerializedError) {
      console.log('error', rejectedValueOrSerializedError);
    }
    return {
      props: {},
    };
  });
