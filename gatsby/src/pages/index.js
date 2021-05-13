import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';

const HomePage = () => (
  <Container>
    <SEO title="Home Page" />
    <H1>The Wonderful World of Dogs</H1>
    <h2>Website coming soon!</h2>
  </Container>
);

export default HomePage;

const Container = styled.div`
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 1.75em;
`;
