import React from 'react';
import { GetServerSideProps } from 'next';

import { wrapper } from '@/store';
import { fetchPageConstants } from '@/store/actions/pageConstants/fetchPageConstants';
import { fetchNotionContent } from '@/store/actions/pageContent/fetchNotionContent';
import { fetchPageContent } from '@/store/actions/pageContent/fetchPageContent';
import { fetchNotionSeo } from '@/store/actions/pageSeo/fetchNotionSeo';

import { useAppSelector } from '@/hooks/store/useAppSelector';

const Page = () => {
  const settings = useAppSelector((state) => state.pageSeo);
  return <div className='bg-primary'>Page {settings.title}</div>;
};

export default Page;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale, params }) => {
    const { path } = params!;
    try {
      await store.dispatch(fetchPageContent({ locale: locale! })).unwrap();
      await store.dispatch(fetchPageConstants({ locale: locale! })).unwrap();
      await store.dispatch(fetchNotionContent()).unwrap();
      await store.dispatch(fetchNotionSeo({ slug: path as string })).unwrap();
    } catch (rejectedValueOrSerializedError) {
      console.log('error', rejectedValueOrSerializedError);
    }
    return {
      props: {},
    };
  });
