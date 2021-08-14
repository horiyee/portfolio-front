import { createGlobalStyle } from 'styled-components';
import { fontSize, mqSp } from './mixins';
import { colors, fontFamilies } from './variables';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    background: ${colors.white};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    ${fontSize(16)}
  }

  body {
    font-family: ${fontFamilies.jpFont};
    color: ${colors.defaultBlack};
  }

  h1 {
    font-weight: 700;
    ${fontSize(24)}
  }

  h2 {
    font-weight: 500;
    ${fontSize(20)}
  }

  h3 {
    font-weight: 400;
    ${fontSize(18)}
  }

  h4 {
    font-weight: 400;
    ${fontSize(16)}
  }

  p {
    font-weight: 300;
    ${mqSp(`font-weight: 400;`)}
    ${fontSize(16)}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    color: inherit;
    cursor: pointer;
    font-family: ${fontFamilies.jpFont};
  }

  input {
    font-family: ${fontFamilies.jpFont};
  }

  textarea {
    font-family: ${fontFamilies.jpFont};
  }
`;
