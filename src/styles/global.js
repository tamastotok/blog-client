import { createGlobalStyle } from 'styled-components';
import Lato from '../assets/fonts/Lato-Regular.ttf';
import Montserrat from '../assets/fonts/Montserrat-Bold.ttf';
import OldStandardTT from '../assets/fonts/OldStandardTT-Regular.ttf';
import Silhouetto from '../assets/fonts/Silhouetto-Script.ttf';

//  Colors
export const colors = {
  black: 'hsl(0, 0%, 0%)',
  gray_50: 'hsl(0, 0%, 45%)',
  gray_80: 'hsl(0, 0%, 80%)',
  gray_95: 'hsl(0, 0%, 95%)',
  white: 'hsl(0, 0%, 100%)',
};

export const size = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

//  CSS Reset
export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Lato';
    font-display: swap;
    src: url(${Lato}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-display: swap;
    src: url(${Montserrat}) format('truetype');
  }

  @font-face {
    font-family: 'OldStandardTT';
    font-display: swap;
    src: url(${OldStandardTT}) format('truetype');
  }

  @font-face {
    font-family: 'Silhouetto';
    font-display: swap;
    src: url(${Silhouetto}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: auto;
  }

  body {
    overflow-x: hidden;
    font-size: 16px;
    
  }

  h1 {
    width: fit-content;
    height: fit-content;
    font-size: 12rem;
    font-family: 'Silhouetto';
    font-weight: 400;
    color: ${colors.black};
  }

  h2 {
    margin-bottom: 20px;
    width: fit-content;
    height: fit-content;
    font-family: 'Montserrat';
    text-transform: uppercase;
    color: ${colors.black};
  }

  p {
    margin-bottom: 10px;
    width: fit-content;
    height: fit-content;
    font-size: 1.2rem;
    line-height: 1.6;
    font-family: 'OldStandardTT';
    font-weight: 400;
    color: ${colors.black};
  }

  a {
    position: relative;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    font-size: 0.8rem;
    font-family: 'Lato';
    font-weight: 600;
    font-style: italic;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.gray_50};
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.gray_50}
  }

  a:hover {
    color: ${colors.black};
  }
`;
