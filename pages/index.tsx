import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { ISection } from '@/models/contentful/generated/contentful';

import { selectDataSections, wrapper } from '@/store';
import { fetchData } from '@/store/slices/data';
import { useAppSelector } from '@/hooks/store/useAppSelector';

interface Props {
  response: Array<ISection>;
}

const Home: NextPage<Props> = () => {
  const response = useAppSelector(selectDataSections);
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
      await store.dispatch(fetchData({ type: 'section' })).unwrap();
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
