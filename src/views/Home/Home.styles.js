import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const Welcome_Section = styled.section`
  position: relative;
  min-height: 800px;
  & img:nth-child(1) {
    position: absolute;
    z-index: -20;
    top: 0;
    display: none;
    width: 50%;
    height: 700px;
    object-fit: cover;
  }
  & img:nth-child(2) {
    display: block;
    margin: auto;
    width: 320px;
    height: 450px;
    object-fit: cover;
  }

  @media screen and (min-width: ${size.lg}) {
    & img:nth-child(1) {
      display: initial;
    }
    & img:nth-child(2) {
      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
`;

export const Welcome_Text_Content = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 340px;
  height: fit-content;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  @media screen and (min-width: ${size.lg}) {
    position: absolute;
    top: 20rem;
    left: calc(50% + 11.25rem);
    margin: 0;
    padding: 0;
  }
`;

export const Main_Wrapper = styled.main`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  @media screen and (min-width: ${size.lg}) {
    position: relative;
  }
`;

export const About_Section = styled.section`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  & img {
    display: block;
    margin: auto;
    max-width: 380px;
    height: 450px;
    object-fit: cover;
  }
  @media screen and (min-width: ${size.lg}) {
    position: relative;
    margin-top: 0;
    margin-bottom: 5rem;
    margin-left: 0;
    margin-right: 0;
    height: 450px;
    & img {
      position: absolute;
      left: calc(50% - 0.125rem);
    }
  }
`;

export const About_Text = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 340px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  @media screen and (min-width: ${size.lg}) {
    position: absolute;
    top: 0;
    right: calc(50% + 1.375rem);
    margin: 0;
    padding: 0;
  }
`;

export const Photos_Section = styled.section`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  & div:first-child {
    display: block;
    margin: auto;
    max-width: 380px;
    height: 450px;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: ${size.lg}) {
    & div:first-child {
      position: relative;
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 50%;
      & img {
        position: absolute;
        width: 100%;
      }
    }
    & div:first-child::before {
      content: '';
      position: absolute;
      right: 0;
      top: -5rem;
      width: 2px;
      height: 80px;
      background-color: ${colors.gray_95};
    }
    & div:first-child::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -6.25rem;
      width: 2px;
      height: 100px;
      background-color: ${colors.gray_95};
    }
  }
`;

export const Photos_Text = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 340px;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  @media screen and (min-width: ${size.lg}) {
    position: absolute;
    bottom: 6.875rem;
    left: calc(50% + 1.25rem);
    margin: 0;
    padding: 0;
  }
`;

export const Blog_Section = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  background-color: ${colors.gray_95};
`;

export const Blog_Header = styled.div`
  margin-top: 0;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  & a {
    color: ${colors.black};
  }
  @media screen and (min-width: ${size.lg}) {
    display: flex;
    align-items: baseline;
    & h2 {
      margin-right: 0.625rem;
    }
  }
`;

export const Blog_Wrapper = styled.div`
  @media screen and (min-width: ${size.lg}) {
    display: flex;
    justify-content: center;
    & div {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }
`;

export const Blog_Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
  & img {
    margin-bottom: 0.625rem;
    width: 100%;
    min-width: 280px;
    max-width: 400px;
    height: 260px;
    object-fit: cover;
    object-position: 0% 80%;
  }
  & a {
    width: 280px;
    line-height: 1.8;
    font-family: 'OldStandardTT';
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${colors.black};
  }
`;
