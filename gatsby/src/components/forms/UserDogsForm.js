import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

import StyledForm from "../../styles/FormStyles";
import UserDogsFormItem from "./UsersDogsFormItem";
import { SubmitButton } from "../Buttons";

const UserDogsForm = ({ dogs }) => {
  const [opened, setOpened] = useState(false);
  const [newName, setNewName] = useState("");

  const [dogImgSrc, setDogImgSrc] = useState(false);
  const [vaccImgSrc, setVaccImgSrc] = useState(false);

  const handleFileChange = (event, type) => {
    const input = event.target;

    const imageType = input.files[0].type.split("image/").pop();

    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;

      const body = {
        type: imageType,
        image: dataURL,
      };
      // TODO: Send this to serverless function for upload...
    };
    reader.readAsDataURL(input.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    const body = {
      name: newName,
      picture: "",
      vaccination: "",
    };
  };
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Edit or add a new dog</legend>

        {dogs.map(({ name, picture, vaccination }, i) => (
          <UserDogsFormItem
            name={name}
            picture={picture}
            vaccination={vaccination}
            key={i}
          />
        ))}

        <AccordionRow>
          <StyledTitle onClick={() => setOpened(!opened)}>
            <h2>Add a new dog</h2>
            <StyledIcon open={opened} />
          </StyledTitle>
          <FormContent open={opened}>
            <label htmlFor="newDogName">New Name</label>
            <input
              type="text"
              name="newDogName"
              value={newName}
              onChange={({ target }) => setNewName(target.value)}
            />
            <Row>
              <DogImgContainer>
                <h3>Picture</h3>
                {dogImgSrc && <DogImg src={dogImgSrc} alt="dog image" />}
                <SubmitImgButton
                  name="dogImg"
                  type="file"
                  mt={30}
                  text="Add New Image"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleFileChange(e, "dog")}
                />
              </DogImgContainer>
              <DogImgContainer>
                <h3>Vaccination</h3>
                {vaccImgSrc && (
                  <DogImg src={vaccImgSrc} alt="vaccination image" />
                )}

                <SubmitImgButton
                  name="vaccinationImg"
                  type="file"
                  mt={30}
                  text="Add New Image"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
              </DogImgContainer>
            </Row>
            <SubmitButton value="Add Dog" />
          </FormContent>
        </AccordionRow>
      </fieldset>
    </StyledForm>
  );
};

export default UserDogsForm;

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
const DogImg = styled.img`
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
  max-height: ${({ open }) => (open ? "100%" : "0")};
  overflow: hidden;
  padding: ${({ open }) => (open ? "25px 16px;" : "0 16px;")};
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
