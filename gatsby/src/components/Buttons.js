import React from 'react';
import styled from 'styled-components';

const Button = ({
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  br,
  width,
  text,
  onClick,
}) => (
  <StyledButton
    onClick={onClick}
    width={width}
    br={br}
    mt={mt}
    mr={mr}
    mb={mb}
    ml={ml}
    pt={pt}
    pr={pr}
    pb={pb}
    pl={pl}
  >
    {text}
  </StyledButton>
);

export const SubmitButton = ({
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  br,
  value,
  onClick,
  disabled,
  type,
}) => (
  <StyledSubmitButton
    type={type || 'submit'}
    value={value}
    onClick={onClick}
    br={br}
    mt={mt}
    mr={mr}
    mb={mb}
    ml={ml}
    pt={pt}
    pr={pr}
    pb={pb}
    pl={pl}
    disabled={disabled}
  />
);

export default Button;

const StyledButton = styled.button`
  margin: ${({ mt, mr, mb, ml }) =>
    `${mt || '0'}px ${mr || '0'}px ${mb || '0'}px ${ml || '0'}px`};
  padding: ${({ pt, pr, pb, pl }) =>
    `${pt || '16'}px ${pr || '16'}px ${pb || '16'}px ${pl || '16'}px`};
  border-radius: ${({ br }) => br || 0}px;
  align-items: center;
  justify-content: center;
  ${({ width }) => width && `width: ${width};`}
`;

const StyledSubmitButton = styled.input`
  cursor: pointer;
  margin: ${({ mt, mr, mb, ml }) =>
    `${mt || '0'}px ${mr || '0'}px ${mb || '0'}px ${ml || '0'}px`};
  padding: ${({ pt, pr, pb, pl }) =>
    `${pt || '16'}px ${pr || '16'}px ${pb || '16'}px ${pl || '16'}px`};
  border-radius: ${({ br }) => br || 0}px;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: ${({ disabled }) =>
    disabled ? 'var(--grey)' : 'var(--red)'};
  color: var(--white);
  &:hover {
    background-color: var(--red-darkened);
  }
`;
