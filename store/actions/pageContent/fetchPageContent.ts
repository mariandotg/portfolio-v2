import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContentfulData } from '@/services/contentful';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageContent/FetchPageContent';
import { IPage } from '@/models/contentful/generated/contentful';

export const fetchPageContent = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageContent/fetchPageContent',
  async (params) => {
    const response = await getContentfulData<IPage>(params);
    return { response };
  }
);
