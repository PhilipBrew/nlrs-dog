import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { navigate } from 'gatsby-link';

import Button from '../components/Buttons';
import { deleteCookie } from '../utils/functions';
import UserDetailsForm from '../components/forms/UserDetailsForm';

const SingleUser = ({ data: { user } }) => {
  const { name, email, slug } = user;

  // if (slug.current !== getCookie('user')) {
  //   navigate('/login');
  // }

  return (
    <>
      <h1>{`Hi ${name}`}</h1>
      <UserDetails>
        <UserDetailsForm name={name} email={email} />
      </UserDetails>
      <Button
        onClick={() => {
          deleteCookie('user');
          navigate('/login');
        }}
        text="Logout"
      />
    </>
  );
};

export default SingleUser;

const UserDetails = styled.div`
  padding: 2rem 0;
`;

export const query = graphql`
  query($slug: String!) {
    user: sanityUsers(slug: { current: { eq: $slug } }) {
      id
      name
      email
      slug {
        current
      }
      dogArr {
        id
        name
        vaccination {
          asset {
            fixed(width: 600, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
