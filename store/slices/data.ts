import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getContentfulData } from '@/services/contentful';

import { ResponseObj } from '@/models/store/fetchData/ResponseObj';
import { ResponseParams } from '@/models/store/fetchData/ResponseParams';

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
});

export default dataSlice.reducer;
