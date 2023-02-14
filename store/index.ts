import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import dataReducer from './slices/data';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: true,
});

export const makeStore = () => {
  return store;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;

export const selectDataSections = (state) => state.data.sections;

export const wrapper = createWrapper<AppStore>(makeStore);
