import React from "react";
import styled from "styled-components";

import SEO from "../components/SEO";

const Home = () => (
  <Container>
    <SEO title="Home Page" />
    <H1>Website coming soon!</H1>
  </Container>
);

export default Home;

const Container = styled.div`
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 1.75em;
`;
