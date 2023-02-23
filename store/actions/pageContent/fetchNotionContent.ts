import { createAsyncThunk } from '@reduxjs/toolkit';

import { queryNotionDatabase } from '@/services/notion';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageContent/FetchNotionContent';

export const fetchNotionContent = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageContent/fetchNotionContent',
  async (params) => {
    const { section, property, filter, databaseId } = params;

    const response = await queryNotionDatabase({
      databaseId,
      filter,
    });

    return { response, section, property };
  }
);
