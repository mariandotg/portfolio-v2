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

const Home: NextPage = () => {
  return (
    <PageLayout>
      <About />
      <FeaturedProjects />
      <Skills />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    try {
      await store.dispatch(fetchPageContent({ locale: 'en-US' })).unwrap();
      await store.dispatch(fetchPageConstants({ locale: 'en-US' })).unwrap();
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
