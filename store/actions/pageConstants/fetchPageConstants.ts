import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContentfulData } from '@/services/contentful';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageConstants/FetchPageConstants';
import { IConstants } from '@/models/contentful/generated/contentful';
import { Params } from '@/models/contentful/GetContentfulData';

export const fetchPageConstants = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageConstants/fetchPageConstants',
  async (params) => {
    const contentfulParams: Params = { ...params, type: 'constants' };

    const response = await getContentfulData<IConstants>(contentfulParams);

    return { response };
  }
);
