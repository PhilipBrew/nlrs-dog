import React, { useState } from 'react';
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const form = {
    email: '',
    password: '',
  };

  const { values, updateValue } = useForm(form);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = values;

    const params = {
      email,
      password: sha256(password),
    };
    const query =
      '*[_type == "users" && password == $password && email == $email] {name, email, slug}';
    client.fetch(query, params).then((res) => {
      if (res.length > 0) {
        const { slug } = res[0];
        setLoading(false);
        document.cookie = `user=${slug.current}`;
        navigate(`/user/${slug.current}`);
      } else {
        setLoading(false);
        setError(true);
      }
    });
  };

  return (
    <StyledForm>
      <fieldset>
        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <legend>Login</legend>

            <label htmlFor="email">Email*</label>
            <input type="email" name="email" onChange={updateValue} required />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              onChange={updateValue}
              required
            />
            {error && (
              <ErrorText>
                Username or password is incorrect. Please try again
              </ErrorText>
            )}
            <SubmitButton
              onClick={(e) => handleLogin(e)}
              br={5}
              mt={16}
              value="Login"
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
  margin-top: 4rem;
`;
