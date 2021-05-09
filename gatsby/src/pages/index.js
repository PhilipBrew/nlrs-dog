import React from 'react';
import { graphql, navigate } from 'gatsby';
import {
  AiTwotonePhone as PhoneIcon,
  AiTwotoneMail as EmailIcon,
} from 'react-icons/ai';

import styled from 'styled-components';
import SEO from '../components/SEO';
import Button from '../components/Buttons';
import Gmap from '../assets/images/gmap.png';

const HomePage = ({ data: { allSanityContact } }) => {
  const { nodes } = allSanityContact;
  const { title, content, phone, email, coordinates } = nodes[0];

  return (
    <>
      <SEO title="Home Page" />
      <h1>{title}</h1>
      <h2>{content}</h2>
      <GoogleMap />
      <Row>
        <ContactBox>
          <h3>Phone Us</h3>
          <Item>
            <PhoneIcon />
            <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
          </Item>
        </ContactBox>
        <ContactBox>
          <h3>Email Us</h3>
          <Item>
            <EmailIcon />
            <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
          </Item>
        </ContactBox>
      </Row>
      <Row>
        <Button
          onClick={() => navigate('/order')}
          width="100%"
          text="Book Now"
        />
      </Row>
    </>
  );
};

export default HomePage;

const GoogleMap = styled.div`
  background-image: url(${Gmap});
  width: 100%;
  height: 452px;
  background-size: contain;
  margin-top: 3rem;
`;
const ContactBox = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--grey);
  padding: 3rem;
  border-radius: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
`;
const Item = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const ContactLink = styled.a`
  padding-left: 0.5rem;
`;

export const query = graphql`
  query AllContact {
    allSanityContact {
      nodes {
        title
        content
        phone
        email
        coordinates {
          lat
          lon
        }
      }
    }
  }
`;
