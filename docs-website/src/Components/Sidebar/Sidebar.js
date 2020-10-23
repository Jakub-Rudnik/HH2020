import React from 'react';
import styled from 'styled-components';
import handleBackgroundColor from '../../Scripts/handleBackgroundColor.js';
import handleHeadingColor from '../../Scripts/handleHeadingColor.js';
import handleParagraphColor from '../../Scripts/handleParagraphColor.js';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 25px;
  min-height: 100vh;
  border-right: 1px solid ${({ color }) => handleParagraphColor(color)};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  left: 12.5%;
  top: 90.5px;
  z-inddex: 20;
  background: ${({ background }) => handleBackgroundColor(background)};

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    background: transparent;
  }
`;

const StyledMenuHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.size.menuheadnig};
  background: ${({ color }) => handleHeadingColor(color)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat-Bold';
  transition: transform 0.5s ease;
  margin-top: 15px;

  :hover {
    cursor: pointer;
    transform: translateX(10px);
  }
`;

const StyledMenuParagraph = styled.p`
  color: ${({ color }) => handleParagraphColor(color)};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  margin-top: 6px;
  transition: transform 0.5s ease;

  :hover {
    cursor: pointer;
    transform: translateX(10px);
  }
`;

const Sidebar = ({ isOpen, background, color }) => {
  return (
    <StyledWrapper isOpen={isOpen} background={background} color={color}>
      <StyledMenuHeading color={color}>Wstęp</StyledMenuHeading>
      <StyledMenuParagraph color={color}>Cel</StyledMenuParagraph>
      <StyledMenuParagraph color={color}>Licencja</StyledMenuParagraph>
      <StyledMenuParagraph color={color}>Autorzy</StyledMenuParagraph>
    </StyledWrapper>
  );
};

export default Sidebar;
