import React, { useState } from 'react';
import styled from 'styled-components';

import { BsChevronDown } from 'react-icons/bs';

const FaqItem = ({ question, answer }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Row onClick={() => setOpened(!opened)}>
      <StyledQuestion>
        <h2>{question}</h2>
        <StyledIcon open={opened} />
      </StyledQuestion>
      <StyledAnswer open={opened}>
        <span>{answer}</span>
      </StyledAnswer>
    </Row>
  );
};

export default FaqItem;

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
const StyledAnswer = styled.div`
  max-height: ${({ open }) => (open ? '100%' : '0')};
  overflow: hidden;
  padding: ${({ open }) => (open ? '25px 16px;' : '0 16px;')};
  transition: all 0.3s ease-out;
`;
const Row = styled.div`
  transition: 0.4s;
  border: 1px solid var(--red);
  background-color: var(--grey);
  white-space: pre-line;
  cursor: pointer;
  :of-first-type {
    border-bottom-width: 0;
  }
  &:hover ${StyledQuestion} {
    background-color: var(--grey-darkened);
  }
`;
const StyledIcon = styled(BsChevronDown)`
  ${({ open }) => open && `transform: rotate(180deg);`}
  transition: all 0.3s ease-out;
`;
