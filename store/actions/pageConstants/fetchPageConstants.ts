import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContentfulData } from '@/services/contentful';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageConstants/FetchPageConstants';
import { IConstants } from '@/models/contentful/generated/contentful';

export const fetchPageConstants = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageConstants/fetchPageConstants',
  async (params) => {
    const response = await getContentfulData<IConstants>(params);
    return { response };
  }
);
