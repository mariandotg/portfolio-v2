import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { fetchNotionSeo } from '../actions/pageSeo/fetchNotionSeo';

import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';
import { PageSeo } from '@/models/store/state/PageSeo';

const initialState: PageSeo = {
  title: '',
  description: '',
  image: '',
  imageAlt: '',
  id: '',
  openGraphType: '',
  schemaType: '',
  path: '',
  url: '',
  slug: '',
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
        state.title = action.payload.response.title;
        state.description = action.payload.response.description;
        state.image = action.payload.response.image;
        state.id = action.payload.response.id;
        state.openGraphType = action.payload.response.openGraphType;
        state.path = action.payload.response.path;
        state.slug = action.payload.response.slug;
        state.loading = false;
      })
      .addCase(fetchNotionSeo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.pageSeo) return state;
        state.title = action.payload!.pageSeo.title;
        state.description = action.payload!.pageSeo.description;
        state.image = action.payload!.pageSeo.image;
        state.id = action.payload!.pageSeo.id;
        state.openGraphType = action.payload!.pageSeo.openGraphType;
        state.path = action.payload!.pageSeo.path;
        state.slug = action.payload!.pageSeo.slug;
        state.loading = false;
      });
  },
});

export default pageSeo.reducer;
