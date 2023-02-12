import { getContentfulData } from '@/services/contentful';

describe('Contentful service', () => {
  it('Return correct array length', async () => {
    const response = await getContentfulData('section');

    expect(response.length).toBe(6);
  });
});
