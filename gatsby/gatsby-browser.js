import { graphql } from 'gatsby';
import React from 'react';
import Layout from './src/components/Layout';

import AppProvider from './src/providers/AppProvider';

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export const SiteSettingsQuery = graphql`
  query siteSettings {
    allSanitySettings {
      nodes {
        name
        code
        termsEnabled
        privacyEnabled
        cookieEnabled
      }
    }
  }
`;

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
