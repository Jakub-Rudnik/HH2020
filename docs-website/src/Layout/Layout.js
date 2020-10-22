import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../Theme/Theme.js';
import '../Fonts/Fonts.css';

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
  background-color: ${theme.colors.grey};
}
`;

const StyledWrapper = styled.div`
  width: 100%;
  color: ${theme.colors.black};
  background: ${theme.colors.grey};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat-Regular';
  padding: 20px;

  ${theme.mq.desktop} {
    width: 75%;
  }
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledWrapper>{children}</StyledWrapper>
      </>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
