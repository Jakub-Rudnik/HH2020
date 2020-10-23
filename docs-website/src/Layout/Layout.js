import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../Theme/Theme.js';
import '../Fonts/Fonts.css';
import backgroundContext from '../Scripts/backgroundContext.js';
import handleBackgroundColor from '../Scripts/handleBackgroundColor.js';

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
#___gatsby {
  width: 100%;
}

#gatsby-focus-wrapper {
  margin: 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
`;

const StyledWrapper = styled.div`
  width: 100%;
  background: ${({ background }) => handleBackgroundColor(background)};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat-Regular';
  padding: 20px;
`;

export default function Layout({ children }) {
  const { background } = useContext(backgroundContext);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledWrapper background={background}>{children}</StyledWrapper>
      </>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
