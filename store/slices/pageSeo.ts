import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { fetchNotionSeo } from '../actions/pageSeo/fetchNotionSeo';

import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';
import { PageSeo } from '@/models/store/state/PageSeo';

const initialState: PageSeo = {
  title: '',
  response: [],
  loading: true,
};

export const pageSeo = createSlice({
  name: 'pageSeo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotionSeo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotionSeo.fulfilled, (state, action) => {
        state.title = action.payload.slug;
        state.response = action.payload.response;
        state.loading = false;
      })
      .addCase(fetchNotionSeo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.pageSeo) return state;
        state.title = action.payload!.pageSeo.title;
        state.response = action.payload!.pageSeo.response;
        state.loading = false;
      });
  },
});

export default pageSeo.reducer;
