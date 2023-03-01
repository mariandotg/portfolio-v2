import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContentfulData } from '@/services/contentful';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageContent/FetchPageContent';
import { IPage } from '@/models/contentful/generated/contentful';
import { Params } from '@/models/contentful/GetContentfulData';

export const fetchPageContent = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageContent/fetchPageContent',
  async (params) => {
    const contentfulParams: Params = { ...params, type: 'page' };

    const response = await getContentfulData<IPage>(contentfulParams);

    return { response };
  }
);
