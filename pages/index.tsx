import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { getContentfulData } from '@/services/contentful';
import { ISection } from '@/models/contentful/generated/contentful';

import { wrapper } from '@/store';

interface Props {
  response: Array<ISection>;
}

const Home: NextPage<Props> = ({ response }) => {
  console.log(response[0].fields.title);
  return (
    <>
      <div>Home</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const response = await getContentfulData('section');

    return {
      props: {
        response,
      },
    };
  }
);

export default Home;
