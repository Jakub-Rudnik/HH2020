import React from 'react';
import styled from 'styled-components';
import handleHeadingColor from '../../Scripts/handleHeadingColor.js';
import handleParagraphColor from '../../Scripts/handleParagraphColor.js';

const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  padding-left: ${({ isOpen }) => (isOpen ? '25px' : '0')};

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 180px;
  }
`;

const StyledHeading = styled.h1`
  background: ${({ color }) => handleHeadingColor(color)};
  font-size: ${({ theme }) => theme.font.size.heading};
  font-family: 'Raleway';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSubHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.size.subheading};
  color: ${({ color }) => handleParagraphColor(color)};
  font-family: 'Montserrat-Bold';
  margin-top: 40px;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ color }) => handleParagraphColor(color)};
  margin-top: 20px;
`;

const Section = ({ isOpen, color }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledHeading color={color}>Wstęp</StyledHeading>
      <StyledParagraph color={color}>
        Aplikacja XDADY ma za zadanie pomagać troszczyć się o nasze zdrowie
        poprzez dawanie dobrego żarełka na ruszt. Została ona stworzona na
        hackaton HackHeroes2020.
      </StyledParagraph>
      <StyledSubHeading color={color}>Cel</StyledSubHeading>
      <StyledParagraph color={color}>
        Naszą główną misją jest umożliwienie przygotowywania zdrowych i
        zbilansowanych posiłków bez wielkich zakupów - z produktów, które mamy w
        swojej kuchni. Dzięki prostocie działania aplikacji i opcji szybkiego
        dodawania produktów uważamy, że jest to możliwe. Wykorzystując kamerę w
        telefonie wraz z podpiętą przez nas sztuczną inteligencją dostajemy
        listę zdrowych przepisów wraz z ich makroskładnikami, które możemy
        przygotować. Dodatkowo wykorzystując takie rozwiązanie przyczyniamy się
        do mniejszego marnowania jedzenia, z którego czasami nie wiemy co
        zrobić.
      </StyledParagraph>
    </StyledWrapper>
  );
};

export default Section;
