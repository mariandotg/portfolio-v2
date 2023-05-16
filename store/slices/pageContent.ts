import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { fetchPageContent } from '../actions/pageContent/fetchPageContent';
import { fetchNotionContent } from '../actions/pageContent/fetchNotionContent';
import { fetchNotionSinglePage } from '../actions/pageContent/fetchNotionSinglePage';

import { pageContentAdapter } from '@/adapters/pageContentAdapter';

import { ActionHYDRATE } from '@/models/store/actions/ActionHYDRATE';
import { PageContent } from '@/models/store/state/PageContent';
import { PageContentSections } from '@/models/store/state/PageContentSections';

const initialState: PageContent = {
  name: '',
  sections: {} as PageContentSections,
  loading: false,
  locale: 'en',
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
        state.locale = action.payload!.contentfulParams.locale;
      })
      .addCase(fetchPageContent.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNotionContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotionContent.fulfilled, (state, action) => {
        const { projects, articles } = action.payload;

        state.sections.featuredProjects.content.projects = projects;
        state.sections.latestArticles.content.articles = articles;
        state.loading = false;
      })
      .addCase(fetchNotionContent.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNotionSinglePage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotionSinglePage.fulfilled, (state, action) => {
        const { page } = action.payload;

        state.sections.blog = page.markdown;
        state.loading = false;
      })
      .addCase(fetchNotionSinglePage.rejected, (state) => {
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
