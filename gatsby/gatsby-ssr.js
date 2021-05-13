import React from 'react';
import Layout from './src/components/Layout';

import AppProvider from './src/providers/AppProvider';

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
