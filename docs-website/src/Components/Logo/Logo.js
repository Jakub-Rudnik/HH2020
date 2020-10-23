import styled from 'styled-components';
import handleHeadingColor from '../../Scripts/handleHeadingColor.js';

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.font.size.menuheadnig};
  background: ${({ color }) => handleHeadingColor(color)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat-Bold';
`;

export default StyledLogo;
