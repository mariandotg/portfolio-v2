import { createAsyncThunk } from '@reduxjs/toolkit';

import { queryNotionDatabase } from '@/services/notion';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageSeo/FetchNotionSeo';

export const fetchNotionSeo = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageSeo/fetchNotionSeo',
  async (params) => {
    const response = await queryNotionDatabase({
      databaseId: process.env.NEXT_PUBLIC_NOTION_SEO_DATABASE_ID,
      filter: {
        property: 'Slug',
        formula: {
          string: {
            equals: params.slug,
          },
        },
      },
    });

    return { response, slug: params.slug };
  }
);
