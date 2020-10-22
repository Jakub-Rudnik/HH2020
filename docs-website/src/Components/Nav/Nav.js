import React, { useContext } from 'react';
import styled from 'styled-components';
import menuContext from '../../Scripts/createContext.js';
import Hamburger from '../Hamburger/Hamburger.js';
import StyledLogo from '../Logo/Logo.js';

const StyledWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function Nav() {
  const { open, setOpen } = useContext(menuContext);

  const isClicked = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <Hamburger handleOnPress={isClicked} isOpen={open} />
      <StyledLogo>LogoDocs</StyledLogo>
    </StyledWrapper>
  );
}
