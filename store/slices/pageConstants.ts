import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '@/services/contentful';

import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';
import { pageConstantsAdapter } from '@/adapters/pageConstantsAdapter';
import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageConstants/FetchPageConstants';
import { PageConstants } from '@/models/store/state/PageConstants';
import { PageConstantsConstants } from '@/models/store/state/PageConstantsConstants';
import { IConstants } from '@/models/contentful/generated/contentful';

export const fetchPageConstants = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageConstants/fetchPageConstants',
  async (params) => {
    const response = await getContentfulData<IConstants>(params);
    return { response };
  }
);

const initialState: PageConstants = {
  constants: {} as PageConstantsConstants,
  loading: true,
};

export const pageConstants = createSlice({
  name: 'pageConstants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageConstants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPageConstants.fulfilled, (state, action) => {
        state.constants = pageConstantsAdapter(
          action.payload!.response[0].fields
        );
        state.loading = false;
      })
      .addCase(fetchPageConstants.rejected, (state) => {
        state.loading = false;
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.pageConstants.constants) return state;
        state.constants = { ...action.payload!.pageConstants.constants };
        state.loading = false;
      });
  },
});

export default pageConstants.reducer;
