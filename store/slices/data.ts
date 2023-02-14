import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '@/services/contentful';

import { ResponseObj } from '@/models/store/fetchData/ResponseObj';
import { ResponseParams } from '@/models/store/fetchData/ResponseParams';
import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';

export const fetchData = createAsyncThunk<ResponseObj, ResponseParams>(
  'data/fetchData',
  async ({ type }) => {
    const response = await getContentfulData(type);
    return { response };
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    sections: {},
    loading: false,
    language: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.sections = action.payload!.response;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.data.sections) return state;
        state.sections = { ...action.payload!.data.sections };
        state.language = action.payload!.data.language;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
