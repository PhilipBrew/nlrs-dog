import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'fm755ymi',
  dataset: 'production',
  apiVersion: '2021-04-10',
  token:
    'sk93Xas64Iy3g0E2vBljmvOJhn31s9XKXeDL235VJzjUSgtuQEB5GENspukpl2SAMjAY4GwgzaG5cga7HnXfwgaacnnuLES1GI7PBNCMoGNn6ifto0JslSbqVHFTMRCLXgXNolXHUqBEl7YO7FCbsP3GVqfbITr7X6oDQVKJWq40HBSqhyGb',
  // useCdn: true,
});

export default client;
