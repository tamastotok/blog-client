import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const About_Me_Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  & div {
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    height: fit-content;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  & img {
    max-height: 650px;
    object-fit: cover;
  }
  @media screen and (min-width: ${size.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 5rem;
    & div {
      margin-top: auto;
      margin-bottom: auto;
      margin-right: 0;
      width: 100%;
      max-width: 440px;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    & img {
      margin-left: 1.25rem;
      margin-right: auto;
      width: 400px;
    }
  }
`;

export const About_Me_Main = styled.main`
  & h2 {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    text-align: center;
  }
  & img {
    max-height: 520px;
    object-fit: cover;
    filter: grayscale(100);
  }
  @media screen and (min-width: ${size.md}) {
    position: relative;
    display: grid;
    grid-template-areas:
      'title title'
      'img content';
    padding-top: 2.5rem;
    padding-bottom: 5rem;
    & h2 {
      grid-area: title;
      margin-bottom: 2.5rem;
    }
    & img {
      grid-area: img;
      width: 400px;
      height: 510px;
      margin-left: auto;
    }
  }
`;

export const Text_Div = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  @media screen and (min-width: ${size.md}) {
    grid-area: content;
    margin: 0;
    width: 100%;
    max-width: 420px;
    padding-left: 2.5rem;
  }
`;

export const Fun_Facts_Section = styled.section`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: ${colors.gray_95};
  & h2 {
    margin-bottom: 2.5rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  & div {
    margin-bottom: 1.25rem;
    width: 280px;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  & h1 {
    position: absolute;
    z-index: -20;
    bottom: 0;
    left: calc(50% + 12.5rem);
    width: fit-content;
    height: 200px;
    color: ${colors.white};
  }
  @media screen and (min-width: ${size.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 5rem;
    & h2 {
      width: 100%;
      text-align: center;
    }
    & div {
      padding: 0;
    }
  }
`;
