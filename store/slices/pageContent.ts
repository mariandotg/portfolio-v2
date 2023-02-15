import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '@/services/contentful';

import { ResponseObj } from '@/models/store/fetchData/ResponseObj';
import { ResponseParams } from '@/models/store/fetchData/ResponseParams';
import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';

export const fetchPageContent = createAsyncThunk<ResponseObj, ResponseParams>(
  'pageContent/fetchPageContent',
  async ({ type }) => {
    const response = await getContentfulData(type);
    return { response };
  }
);

export const pageContent = createSlice({
  name: 'pageContent',
  initialState: {
    sections: {},
    loading: false,
    locale: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPageContent.fulfilled, (state, action) => {
        state.sections = action.payload!.response[0].fields;
        state.loading = false;
      })
      .addCase(fetchPageContent.rejected, (state) => {
        state.loading = false;
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.pageContent.sections) return state;
        state.sections = { ...action.payload!.pageContent.sections };
        state.locale = action.payload!.pageContent.locale;
        state.loading = false;
      });
  },
});

export default pageContent.reducer;
