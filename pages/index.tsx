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
      <Section>
        <h2 className='italic font-medium text-section-title font-monospace text-light-headlines'>
          {response.featuredProjects.title}
        </h2>
        <div className='flex flex-col gap-y-8'>
          {response.featuredProjects.content.projects.map((p) => {
            return (
              <div key={p.id} className='flex flex-col gap-y-2 text'>
                <img
                  src={p.image}
                  className='object-cover w-full rounded h-[187px]'
                />
                <h3 className='font-medium text-title font-display text-light-headlines'>
                  {p.name}
                </h3>
                <p className='text-light-text'>{p.description}</p>
                <span className='font-medium '>{p.tags[0].name}</span>
              </div>
            );
          })}
        </div>
        <button className='w-full px-6 py-3 italic font-bold text-center rounded bg-light-text text-light font-monospace'>
          View more
        </button>
      </Section>
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
