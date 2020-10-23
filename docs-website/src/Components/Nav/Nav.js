import React, { useContext } from 'react';
import styled from 'styled-components';
import menuContext from '../../Scripts/menuContext.js';
import colorContext from '../../Scripts/colorContext.js';
import backgroundContext from '../../Scripts/backgroundContext.js';
import handleBackgroundContext from '../../Scripts/handleBackgroundColor.js';
import Hamburger from '../Hamburger/Hamburger.js';
import StyledLogo from '../Logo/Logo.js';
import ColorChanger from '../ColorChanger/ColorChanger.js';

const StyledWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 30;
  background: ${({ background }) => handleBackgroundContext(background)};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${({ theme }) => theme.mq.desktop} {
    width: 75%;
    padding: 20px 0;
  }
`;

const Nav = () => {
  const { open, setOpen } = useContext(menuContext);
  const { color } = useContext(colorContext);
  const { background } = useContext(backgroundContext);

  const isClicked = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledWrapper background={background}>
      <StyledNav>
        <Hamburger handleOnPress={isClicked} isOpen={open} color={color} />
        <StyledLogo color={color}>LogoDocs</StyledLogo>
        <ColorChanger />
      </StyledNav>
    </StyledWrapper>
  );
};

export default Nav;
