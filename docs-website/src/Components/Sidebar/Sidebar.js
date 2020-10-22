import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 25px;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;

const StyledMenuHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.size.menuheadnig};
  background: ${({ theme }) => theme.gradient.textgradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat-Bold';
`;

const StyledMenuParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  margin-top: 6px;
`;

const Sidebar = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledMenuHeading>Wstęp</StyledMenuHeading>
      <StyledMenuParagraph>Cel</StyledMenuParagraph>
      <StyledMenuParagraph>Licencja</StyledMenuParagraph>
      <StyledMenuParagraph>Autorzy</StyledMenuParagraph>
    </StyledWrapper>
  );
};

export default Sidebar;
