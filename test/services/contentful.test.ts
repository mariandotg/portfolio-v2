import { getContentfulData } from '@/services/contentful';

describe('Contentful service', () => {
  it('Return correct array length', async () => {
    const response = await getContentfulData('section');

    expect(response.length).toBe(6);
  });
  it('Return correct content type', async () => {
    const contentType = 'section';
    const response = await getContentfulData(contentType);

    expect(response[0].sys.contentType.sys.id).toBe(contentType);
  });
});
