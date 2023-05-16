import { createAsyncThunk } from '@reduxjs/toolkit';

import { getNotionSinglePage } from '@/services/notion/getSinglePost';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageContent/FetchNotionSinglePage';

export const fetchNotionSinglePage = createAsyncThunk<
  ResponseObj,
  ResponseParams
>('pageContent/fetchNotionSinglePage', async (params) => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGES_DATABASE_ID!;

  const pageResponse = await getNotionSinglePage({
    databaseId,
    filter: {
      property: 'SeoPath',
      formula: {
        string: {
          equals: params.slug,
        },
      },
    },
  });

  return { page: pageResponse };
});
