import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { ISection } from '@/models/contentful/generated/contentful';

import { selectPageContentSections, wrapper } from '@/store';
import { fetchPageContent } from '@/store/slices/pageContent';
import { useAppSelector } from '@/hooks/store/useAppSelector';

interface Props {
  response: Array<ISection>;
}

const Home: NextPage<Props> = () => {
  const response = useAppSelector(selectPageContentSections);
  console.log(response);
  return (
    <>
      <div>Home</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    try {
      await store.dispatch(fetchPageContent({ type: 'page' })).unwrap();
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
