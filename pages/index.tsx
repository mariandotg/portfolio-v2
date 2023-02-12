import { getContentfulData } from '@/services/contentful';
import React from 'react';

function Home({ response }) {
  console.log(response);
  return (
    <>
      <div>Home</div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await getContentfulData('section');

  return {
    props: {
      response,
    },
  };
};
export default Home;
