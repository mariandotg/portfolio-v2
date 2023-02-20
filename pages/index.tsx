import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { ISection } from '@/models/contentful/generated/contentful';

import { wrapper } from '@/store';
import { fetchPageContent } from '@/store/slices/pageContent';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { fetchPageConstants } from '@/store/slices/pageConstants';

interface Props {
  response: Array<ISection>;
}

const Home: NextPage<Props> = () => {
  const response = useAppSelector((state) => state.pageContent.sections);
  console.log(response.contact);
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
      await store.dispatch(fetchPageConstants({ type: 'constants' })).unwrap();
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
