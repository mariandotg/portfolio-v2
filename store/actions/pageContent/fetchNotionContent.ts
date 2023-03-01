import { createAsyncThunk } from '@reduxjs/toolkit';

import { queryNotionDatabase } from '@/services/notion';

import { ResponseObj } from '@/models/store/actions/pageContent/FetchNotionContent';
import { articlesAdapter, articlesFilter } from '@/adapters/ArticlesAdapter';
import { projectsAdapter, projectsFilter } from '@/adapters/ProjectsAdapter';

export const fetchNotionContent = createAsyncThunk<ResponseObj>(
  'pageContent/fetchNotionContent',
  async () => {
    const databaseId = process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID!;

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
