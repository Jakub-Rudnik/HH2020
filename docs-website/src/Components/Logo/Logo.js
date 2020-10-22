import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.font.size.menuheadnig};
  background: ${({ theme }) => theme.gradient.textgradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat-Bold';
`;

export default StyledLogo;
