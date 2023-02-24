import { createAsyncThunk } from '@reduxjs/toolkit';

import { queryNotionDatabase } from '@/services/notion';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageSeo/FetchNotionSeo';
import { getPageMetaData } from '@/utils/getPageMetaData';

export const fetchNotionSeo = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageSeo/fetchNotionSeo',
  async (params) => {
    const response = await queryNotionDatabase({
      databaseId: process.env.NEXT_PUBLIC_NOTION_BLOGS_DATABASE_ID,
      filter: {
        property: 'Path',
        formula: {
          string: {
            equals: params.slug,
          },
        },
      },
    });
    
    const formattedResponse: {
      [key: string]: string;
    } = getPageMetaData(response[0]);

    return { response: formattedResponse, slug: params.slug };
  }
);
