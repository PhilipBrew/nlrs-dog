import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../providers/AppProvider';

const Tabs = ({ tabs = [] }) => {
  const { activeLoginTab, setActiveLoginTab } = useAppContext();
  return (
    <Container>
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          active={activeLoginTab === tab}
          onClick={() => setActiveLoginTab(tab)}
        >
          <span>{tab}</span>
        </TabItem>
      ))}
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  background-color: var(--grey-darkened);
  display: flex;
  margin-bottom: 3rem;
  height: 7rem;
`;
const TabItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
		background-color: var(--grey);
	`};
`;
