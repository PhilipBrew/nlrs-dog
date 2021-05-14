import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Divider />
      <StyledFooter>
        <Left>
          <span>
            &copy; The Wonderful World of Dogs {new Date().getFullYear()}
          </span>
        </Left>
        <Right />
      </StyledFooter>
    </>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: var(--grey);
  margin-top: 2rem;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
