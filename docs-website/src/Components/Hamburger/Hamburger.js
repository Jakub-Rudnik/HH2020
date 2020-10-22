import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  border: none;
  padding: 15px 0;
  position: absolute;
  left: 0;
  background: none;
  z-index: 30;
  width: 30px;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledHamburger = styled.div`
  position: relative;

  ::before,
  ::after {
    position: absolute;
    width: 30px;
    background: ${({ theme }) => theme.gradient.gradient};
    height: 4px;
    left: 0;
    content: '';
    transition: transform 0.3s ease;
  }

  ::after {
    top: 5px;
    transform: rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')})
      translateY(${({ isOpen }) => (isOpen ? '-7px' : '0')});
  }

  ::before {
    top: -5px;
    transform: rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')})
      translateY(${({ isOpen }) => (isOpen ? '7px' : '0')});
  }
`;

export default function Hamburger({ handleOnPress, isOpen }) {
  return (
    <StyledWrapper onClick={handleOnPress}>
      <StyledHamburger isOpen={isOpen} />
    </StyledWrapper>
  );
}
