import { notionDataAdapter } from '@/adapters/notionDataAdapter';

const { Client } = require('@notionhq/client');

const client = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_AUTH_TOKEN,
});

export const queryNotionDatabase = async ({
  databaseId,
  filter,
}: any): Promise<Array<any>> => {
  const response = await client.databases.query({
    database_id: databaseId,
    filter,
  });

  return notionDataAdapter(response);
};
