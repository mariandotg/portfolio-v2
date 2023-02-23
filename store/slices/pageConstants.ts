import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { fetchPageConstants } from '../actions/pageConstants/fetchPageConstants';

import { pageConstantsAdapter } from '@/adapters/pageConstantsAdapter';

import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';
import { PageConstants } from '@/models/store/state/PageConstants';
import { PageConstantsConstants } from '@/models/store/state/PageConstantsConstants';

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
