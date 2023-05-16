import React from 'react';
import { GetServerSideProps } from 'next';

import { wrapper } from '@/store';
import { fetchPageConstants } from '@/store/actions/pageConstants/fetchPageConstants';
import { fetchNotionSeo } from '@/store/actions/pageSeo/fetchNotionSeo';

import { useAppSelector } from '@/hooks/store/useAppSelector';
import Head from 'next/head';
import { fetchNotionSinglePage } from '@/store/actions/pageContent/fetchNotionSinglePage';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PageLayout from '@/components/PageLayout';
import ContentLayout from '@/components/ContentLayout';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Page = () => {
  const content = useAppSelector((state) => state.pageContent.sections.blog);
  const settings = useAppSelector((state) => state.pageSeo);

  const twitterUrl = 'https://twitter.com/home';

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
    <PageLayout>
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
      <Navbar />
      <div className='flex flex-col gap-8'>
        <div className='relative h-64'>
          <Image
            src={settings.image}
            alt={settings.imageAlt}
            className='absolute object-cover'
            fill={true}
            priority
            quality={90}
          />
        </div>
        <ContentLayout>
          <div className='flex flex-col gap-y-4'>
            <ReactMarkdown
              components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: ({ node, ...props }) => (
                  <h1
                    className='font-medium text-title dark:text-dark-headlines text-light-headlines'
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className='italic font-medium font-monospace dark:text-dark-headlines text-light-headlines'
                    {...props}
                  />
                ),
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                p: ({ node, ...props }) => (
                  <p
                    className='dark:text-dark-text text-light-text'
                    {...props}
                  />
                ),
              }}
            >
              {content?.parent}
            </ReactMarkdown>
          </div>
        </ContentLayout>
      </div>
      <Footer />
    </PageLayout>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale, params }) => {
    const { path } = params!;
    try {
      await store
        .dispatch(fetchNotionSinglePage({ slug: path as string }))
        .unwrap();
      await store.dispatch(fetchPageConstants({ locale: locale! })).unwrap();
      await store.dispatch(fetchNotionSeo({ slug: path as string })).unwrap();
    } catch (rejectedValueOrSerializedError) {
      console.log('error', rejectedValueOrSerializedError);
    }
    return {
      props: {},
    };
  });
