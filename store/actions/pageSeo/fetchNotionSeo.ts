import { createAsyncThunk } from '@reduxjs/toolkit';

import { queryNotionDatabase } from '@/services/notion';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageSeo/FetchNotionSeo';
import { pageSeoAdapter } from '@/adapters/pageSeoAdapter';

export const fetchNotionSeo = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageSeo/fetchNotionSeo',
  async (params) => {
    const response = await queryNotionDatabase({
      databaseId: process.env.NEXT_PUBLIC_NOTION_BLOGS_DATABASE_ID!,
      filter: {
        property: 'SeoPath',
        formula: {
          string: {
            equals: params.slug,
          },
        },
      },
    });

    const formattedResponse = pageSeoAdapter(response[0]);

    return { response: formattedResponse, slug: params.slug };
  }
);
