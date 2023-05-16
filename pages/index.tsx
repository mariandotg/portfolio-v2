import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { wrapper } from '@/store';
import { useAppSelector } from '@/hooks/store/useAppSelector';

import { fetchPageContent } from '@/store/actions/pageContent/fetchPageContent';
import { fetchNotionContent } from '@/store/actions/pageContent/fetchNotionContent';
import { fetchPageConstants } from '@/store/actions/pageConstants/fetchPageConstants';
import { fetchNotionSeo } from '@/store/actions/pageSeo/fetchNotionSeo';

import PageLayout from '@/components/PageLayout';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import Skills from '@/components/Skills';
import JobExperience from '@/components/JobExperience';
import Footer from '@/components/Footer';
import ContentLayout from '@/components/ContentLayout';
import Navbar from '@/components/Navbar';
import LatestArticles from '@/components/LatestArticles';
import Image from 'next/image';

const Home: NextPage = () => {
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
            src='/header-web.webp'
            alt='page header'
            className='absolute object-cover'
            fill={true}
            priority
            quality={90}
          />
        </div>
        <ContentLayout>
          <About />
          <FeaturedProjects />
          <Skills />
          <JobExperience />
          <LatestArticles />
        </ContentLayout>
      </div>
      <Footer />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      try {
        await store.dispatch(fetchPageContent({ locale: locale! })).unwrap();
        await store.dispatch(fetchPageConstants({ locale: locale! })).unwrap();
        await store.dispatch(fetchNotionContent()).unwrap();
        await store.dispatch(fetchNotionSeo({ slug: 'home' })).unwrap();
      } catch (rejectedValueOrSerializedError) {
        console.log('error', rejectedValueOrSerializedError);
      }
      return {
        props: {},
        revalidate: 1,
      };
    }
);

export default Home;
