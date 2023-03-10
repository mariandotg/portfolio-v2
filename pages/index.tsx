import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { wrapper } from '@/store';
import { useAppSelector } from '@/hooks/store/useAppSelector';

import { fetchPageContent } from '@/store/actions/pageContent/fetchPageContent';
import { fetchNotionContent } from '@/store/actions/pageContent/fetchNotionContent';
import { fetchPageConstants } from '@/store/actions/pageConstants/fetchPageConstants';
import { fetchNotionSeo } from '@/store/actions/pageSeo/fetchNotionSeo';

import PageLayout from '@/components/PageLayout';
import Section from '@/components/Section';
import FeaturedProjects from '@/components/FeaturedProjects';

const Home: NextPage = () => {
  const response = useAppSelector((state) => state.pageContent.sections);
  console.log(response.about);
  return (
    <PageLayout>
      <Section>
        <div className='flex flex-col col-span-3 gap-y-4'>
          <h1 className='flex justify-center italic font-medium text-section-title text-light-headlines font-monospace'>
            {response.about.title}
          </h1>
          <p className='font-display text'>
            {response.about.content.ctaDescription.text}
          </p>
        </div>
        <button className='col-span-3 py-3 italic font-bold rounded mobile:col-span-1 mobile:col-end-4 bg-primary font-monospace text-light'>
          {response.about.content.cta.label}
        </button>
      </Section>
      <FeaturedProjects />
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
