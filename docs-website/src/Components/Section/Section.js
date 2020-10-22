import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  padding-left: ${({ isOpen }) => (isOpen ? '25px' : '0')};

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 90px;
  }
`;

const StyledHeading = styled.h1`
  background: ${({ theme }) => theme.gradient.textgradient};
  font-size: ${({ theme }) => theme.font.size.heading};
  font-family: 'Raleway';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSubHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.size.subheading};
  font-family: 'Montserrat-Bold';
  margin-top: 40px;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  margin-top: 20px;
`;

const Section = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledHeading>Wstęp</StyledHeading>
      <StyledParagraph>
        Aplikacja XDADY ma za zadanie pomagać troszczyć się o nasze zdrowie
        poprzez dawanie dobrego żarełka na ruszt. Została ona stworzona na
        hackaton HackHeroes2020.
      </StyledParagraph>
      <StyledSubHeading>Cel</StyledSubHeading>
      <StyledParagraph>
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
