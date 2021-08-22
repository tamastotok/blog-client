import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  & div {
    margin-top: 40px;
    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    height: fit-content;
    padding-left: 10px;
    padding-right: 10px;
  }
  & img {
    max-height: 650px;
    object-fit: cover;
  }
  @media screen and (min-width: ${size.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 80px;
    & div {
      margin-top: auto;
      margin-bottom: auto;
      margin-right: 0;
      width: 100%;
      max-width: 440px;
      padding-left: 20px;
      padding-right: 20px;
    }
    & img {
      margin-left: 20px;
      margin-right: auto;
      width: 400px;
    }
  }
`;

export const AboutMain = styled.main`
  & h2 {
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
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
    padding-top: 40px;
    padding-bottom: 80px;
    & h2 {
      grid-area: title;
      margin-bottom: 40px;
    }
    & img {
      grid-area: img;
      width: 400px;
      height: 510px;
      margin-left: auto;
    }
  }
`;

export const AboutTextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: ${size.md}) {
    grid-area: content;
    margin: 0;
    width: 100%;
    max-width: 420px;
    padding-left: 40px;
  }
`;

export const FunFacts = styled.section`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${colors.gray_95};
  & h2 {
    margin-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  & div {
    margin-bottom: 20px;
    width: 280px;
    padding-left: 10px;
    padding-right: 10px;
  }
  & h1 {
    position: absolute;
    z-index: -20;
    bottom: 0;
    left: calc(50% + 200px);
    width: fit-content;
    height: 200px;
    color: ${colors.white};
  }
  @media screen and (min-width: ${size.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 80px;
    & h2 {
      width: 100%;
      text-align: center;
    }
    & div {
      padding: 0;
    }
  }
`;
