import React, { useContext } from 'react';
import styled from 'styled-components';
import colorContext from '../../Scripts/colorContext.js';
import backgroundContext from '../../Scripts/backgroundContext.js';

const handleBackgroundColor = (background) => {
  switch (background) {
    case 'black':
      return '#303030';
    case 'yellow':
      return 'yellow';
    default:
      return 'transparent';
  }
};

const handleTextColor = (color) => {
  switch (color) {
    case 'grey':
      return '#F5F5F7';
    case 'yellow':
      return 'yellow';
    default:
      return '#303030';
  }
};

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 24px 24px;
  grid-gap: 2.5px;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(4, 24px);
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  margin: 0 2.5px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: 'Montserrat-Bold';
  background: ${({ background }) => handleBackgroundColor(background)};
  color: ${({ color }) => handleTextColor(color)};

  :hover {
    cursor: pointer;
  }
`;

const ColorChanger = () => {
  const { color, setColor } = useContext(colorContext);
  const { background, setBackground } = useContext(backgroundContext);

  return (
    <StyledWrapper>
      <StyledButton
        onClick={() => {
          setColor('black');
          setBackground('grey');
        }}
      >
        A
      </StyledButton>
      <StyledButton
        background="black"
        color="grey"
        onClick={() => {
          setColor('grey');
          setBackground('black');
        }}
      >
        A
      </StyledButton>
      <StyledButton
        background="black"
        color="yellow"
        onClick={() => {
          setColor('yellow');
          setBackground('black');
        }}
      >
        A
      </StyledButton>
      <StyledButton
        background="yellow"
        onClick={() => {
          setColor('black');
          setBackground('yellow');
        }}
      >
        A
      </StyledButton>
    </StyledWrapper>
  );
};

export default ColorChanger;
