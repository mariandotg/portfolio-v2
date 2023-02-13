import { createSlice } from '@reduxjs/toolkit';

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
