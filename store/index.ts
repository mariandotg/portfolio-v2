import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import pageContentReducer from './slices/pageContent';
import pageConstantsReducer from './slices/pageConstants';

export const store = configureStore({
  reducer: {
    pageContent: pageContentReducer,
    pageConstants: pageConstantsReducer,
  },
  devTools: true,
});

export const makeStore = () => {
  return store;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;

export const selectPageContentSections = (state: RootState) =>
  state.pageContent.sections;

export const wrapper = createWrapper<AppStore>(makeStore);
