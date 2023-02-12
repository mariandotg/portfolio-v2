import React from 'react';
import { getContentfulData } from '@/services/contentful';
import { ISection } from '@/models/contentful/generated/contentful';

interface Props {
  response: Array<ISection>;
}

function Home({ response }: Props) {
  console.log(response[0].fields.title);
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
