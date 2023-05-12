import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { wrapper } from '@/store';

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

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Navbar />
      <div className='flex flex-col gap-8'>
        <div className='relative h-64'>
          <img
            src='./header-web.webp'
            className='absolute object-cover w-full h-full'
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
