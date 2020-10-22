import React, { useContext } from 'react';
import styled from 'styled-components';
import Section from '../Section/Section.js';
import Sidebar from '../Sidebar/Sidebar.js';
import menuContext from '../../Scripts/createContext.js';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
`;

const ContentContainer = () => {
  const { open } = useContext(menuContext);
  return (
    <StyledWrapper>
      <Sidebar isOpen={open} />
      <Section isOpen={open} />
    </StyledWrapper>
  );
};

export default ContentContainer;
