import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sha256 from 'js-sha256';
import { navigate } from 'gatsby-link';

import StyledForm from '../../styles/FormStyles';
import { SubmitButton } from '../Buttons';
import { useAppContext } from '../../providers/AppProvider';
import useForm from '../../hooks/useForm';
import client from '../../utils/sanityClient';
import Loader from '../Loader';

const LoginForm = () => {
  const { setActiveLoginTab } = useAppContext();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [loading, setLoading] = useState(false);

  const form = {
    name: '',
    email: '',
    password: '',
    verifyPassword: '',
  };

  const { values, updateValue } = useForm(form);
  const { name, email, password, verifyPassword } = values;

  useEffect(() => {
    setPasswordMatch(password === verifyPassword);
  }, [password, verifyPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
    setLoading(true);
    if (passwordMatch) {
      const doc = {
        _type: 'users',
        name,
        email,
        password: sha256(password),
      };

      client.create(doc).then(({ res }) => {
        console.log('RES ------>', res);
        setLoading(false);
        document.cookie = `user=${res._id}`;
        navigate('account');
        /**
         * email: "philbrew@hotmail.co.uk"
          name: "Phil"
          password: ""
          _createdAt: "2021-04-11T15:12:55Z"
          _id: "0jJTh4NvratzNvhc76WerW"
          _rev: "0jJTh4NvratzNvhc76Weqb"
          _type: "users"
          _updatedAt: "2021-04-11T15:12:55Z"
         */
      });
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Create an Account</legend>
        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={updateValue}
            />

            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={updateValue}
              required
            />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={updateValue}
              required
            />

            <label htmlFor="verifyPassword">Verify Password*</label>
            <input
              type="password"
              name="verifyPassword"
              value={verifyPassword}
              onChange={updateValue}
              required
            />
            {!passwordMatch && <ErrorText>Passwords do not match</ErrorText>}
            <SubmitButton
              br={5}
              mt={16}
              value="Create an Account"
              disabled={!passwordMatch}
            />
            <p>
              Forgot your password?{' '}
              <ForgotPassword onClick={() => setActiveLoginTab('Reset')}>
                Reset it here
              </ForgotPassword>
            </p>
          </>
        )}
      </fieldset>
    </StyledForm>
  );
};

export default LoginForm;

const ForgotPassword = styled.span`
  color: var(--red);
  cursor: pointer;
`;
const ErrorText = styled.span`
  color: var(--red);
`;
const LoaderContainer = styled.div`
  text-align: center;
`;
