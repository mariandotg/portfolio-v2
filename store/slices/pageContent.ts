import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '@/services/contentful';

import { pageContentAdapter } from '@/adapters/pageContentAdapter';

import {
  ResponseObj,
  ResponseParams,
} from '@/models/store/actions/pageContent/FetchPageContent';
import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';
import { PageContent } from '@/models/store/state/PageContent';
import { PageContentSections } from '@/models/store/state/PageContentSections';

export const fetchPageContent = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageContent/fetchPageContent',
  async ({ type }) => {
    const response = await getContentfulData(type);
    return { response };
  }
);

const initialState: PageContent = {
  name: '',
  sections: {} as PageContentSections,
  loading: false,
  locale: '',
};

export const pageContent = createSlice({
  name: 'pageContent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPageContent.fulfilled, (state, action) => {
        state.name = action.payload!.response[0].fields.name;
        state.sections = pageContentAdapter(
          action.payload!.response[0].fields.sections
        );
        state.loading = false;
      })
      .addCase(fetchPageContent.rejected, (state) => {
        state.loading = false;
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.pageContent.sections) return state;
        state.name = action.payload!.pageContent.name;
        state.sections = { ...action.payload!.pageContent.sections };
        state.locale = action.payload!.pageContent.locale;
        state.loading = false;
      });
  },
});

export default pageContent.reducer;
