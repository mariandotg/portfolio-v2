import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { ISection } from '@/models/contentful/generated/contentful';

import { wrapper } from '@/store';
import { useAppSelector } from '@/hooks/store/useAppSelector';

import { fetchPageContent } from '@/store/actions/pageContent/fetchPageContent';
import { fetchNotionContent } from '@/store/actions/pageContent/fetchNotionContent';
import { fetchPageConstants } from '@/store/actions/pageConstants/fetchPageConstants';

interface Props {
  response: Array<ISection>;
}

const Home: NextPage<Props> = () => {
  const response = useAppSelector((state) => state.pageContent.sections);
  console.log(response.about);
  return (
    <>
      <div>Home</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const filter = {
      property: 'Stage',
      select: {
        equals: 'Published',
      },
    };
    try {
      await store
        .dispatch(fetchPageContent({ type: 'page', locale: 'es' }))
        .unwrap();
      await store
        .dispatch(fetchPageConstants({ type: 'constants', locale: 'en-US' }))
        .unwrap();
      await store
        .dispatch(
          fetchNotionContent({
            section: 'featuredProjects',
            property: 'projects',
            filter,
            databaseId: process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID!,
          })
        )
        .unwrap();
      await store
        .dispatch(
          fetchNotionContent({
            section: 'latestArticles',
            property: 'articles',
            filter,
            databaseId: process.env.NEXT_PUBLIC_NOTION_BLOGS_DATABASE_ID!,
          })
        )
        .unwrap();
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
