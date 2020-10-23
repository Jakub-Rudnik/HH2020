import React, { useContext } from 'react';
import styled from 'styled-components';
import Section from '../Section/Section.js';
import Sidebar from '../Sidebar/Sidebar.js';
import menuContext from '../../Scripts/menuContext.js';
import colorContext from '../../Scripts/colorContext.js';
import backgroundContext from '../../Scripts/backgroundContext.js';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 90.5px;

  ${({ theme }) => theme.mq.desktop} {
    width: 75%;
  }
`;

const ContentContainer = () => {
  const { open } = useContext(menuContext);
  const { color } = useContext(colorContext);
  const { background } = useContext(backgroundContext);

  return (
    <StyledWrapper>
      <Sidebar isOpen={open} color={color} background={background} />
      <Section isOpen={open} color={color} />
    </StyledWrapper>
  );
};

export default ContentContainer;
