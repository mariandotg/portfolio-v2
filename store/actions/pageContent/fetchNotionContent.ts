import { createAsyncThunk } from '@reduxjs/toolkit';

import { queryNotionDatabase } from '@/services/notion';

import { ResponseObj } from '@/models/store/actions/pageContent/FetchNotionContent';
import { articlesAdapter, articlesFilter } from '@/adapters/articlesAdapter';
import { projectsAdapter, projectsFilter } from '@/adapters/projectsAdapter';

export const fetchNotionContent = createAsyncThunk<ResponseObj>(
  'pageContent/fetchNotionContent',
  async () => {
    const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGES_DATABASE_ID!;

    const articlesResponse = await queryNotionDatabase({
      databaseId,
      filter: articlesFilter,
    });

    const projectsResponse = await queryNotionDatabase({
      databaseId,
      filter: projectsFilter,
    });

    const articles = articlesAdapter(articlesResponse);
    const projects = projectsAdapter(projectsResponse);

    return { articles, projects };
  }
);
