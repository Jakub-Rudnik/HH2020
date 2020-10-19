import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../Theme/Theme.js';

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
  background-color: #f8f8f8;
}
`;

const StyledWrapper = styled.div`
  width: 100%;
  color: ${theme.colors.black};
  background: ${theme.colors.grey};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
