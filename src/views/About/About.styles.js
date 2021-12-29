import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const About_Me_Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  padding-bottom: 6rem;
  & div {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    max-width: 400px;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  & img {
    margin-bottom: 2.5rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    max-width: 400px;
    max-height: 650px;
    object-fit: cover;
  }
`;

export const Quote = styled.h2`
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  text-align: center;
`;

export const About_Me_Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 6rem;
  & img {
    margin-bottom: 2.5rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    max-width: 400px;
    height: 500px;
    object-fit: cover;
    filter: grayscale(100);
  }
  & div {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    max-width: 400px;
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
    left: 45%;
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
    & h1 {
      left: 60%;
    }
  }
`;
