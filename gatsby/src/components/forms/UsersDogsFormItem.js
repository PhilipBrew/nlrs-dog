import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { SubmitButton } from '../Buttons';

const UserDogsFormItem = ({ name, vaccination, picture }) => {
  const [opened, setOpened] = useState(false);
  const [formName, setFormName] = useState(name);
  return (
    <AccordionRow>
      <StyledTitle onClick={() => setOpened(!opened)}>
        <h2>{name}</h2>
        <StyledIcon open={opened} />
      </StyledTitle>
      <FormContent open={opened}>
        <label htmlFor="dogName">Name</label>
        <input
          type="text"
          name="dogName"
          value={formName}
          onChange={({ target }) => setFormName(target.value)}
        />
        <Row>
          <DogImgContainer>
            <h3>Picture</h3>
            <DogImg fluid={picture.asset.fluid} alt={`${name} image`} />
            <SubmitImgButton
              name="dogImg"
              type="file"
              mt={30}
              text="Add New Image"
              accept="image/*"
            />
          </DogImgContainer>
          <DogImgContainer>
            <h3>Vaccination</h3>
            <DogImg
              fluid={vaccination.asset.fluid}
              alt={`${name} vaccination`}
            />
            <SubmitImgButton
              name="vaccinationImg"
              type="file"
              mt={30}
              text="Add New Image"
              accept="image/*"
            />
          </DogImgContainer>
        </Row>
        <SubmitButton value={`Update ${formName}`} />
      </FormContent>
    </AccordionRow>
  );
};

export default UserDogsFormItem;

const SubmitImgButton = styled.input`
  margin-top: 2rem;
`;

const DogImgContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  h2 {
    margin-bottom: 2rem;
  }
  img {
    object-fit: contain;
  }
`;
const DogImg = styled(Img)`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`;
const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
`;
const FormContent = styled.div`
  max-height: ${({ open }) => (open ? '100%' : '0')};
  overflow: hidden;
  padding: ${({ open }) => (open ? '25px 16px;' : '0 16px;')};
  transition: all 0.3s ease-out;
`;
const AccordionRow = styled.div`
  transition: 0.4s;
  border: 1px solid var(--red);
  background-color: var(--grey);
  white-space: pre-line;

  :of-first-type {
    border-bottom-width: 0;
  }
  &:hover ${StyledTitle} {
    background-color: var(--grey-darkened);
  }
`;
const StyledIcon = styled(BsChevronDown)`
  ${({ open }) => open && `transform: rotate(180deg);`}
  transition: all 0.3s ease-out;
`;
