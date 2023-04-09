import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '1r0x1pwf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-22',
});

export default sanityClient;
