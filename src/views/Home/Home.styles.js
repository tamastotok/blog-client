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
      top: 80px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
`;

export const Welcome_Text_Content = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 340px;
  height: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: ${size.lg}) {
    position: absolute;
    top: 323px;
    left: calc(50% + 180px);
    margin: 0;
    padding: 0;
  }
`;

export const Main_Wrapper = styled.main`
  padding-top: 40px;
  padding-bottom: 80px;
  @media screen and (min-width: ${size.lg}) {
    position: relative;
  }
`;

export const About_Section = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
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
    margin-bottom: 80px;
    margin-left: 0;
    margin-right: 0;
    height: 450px;
    & img {
      position: absolute;
      left: calc(50% - 2px);
    }
  }
`;

export const About_Text = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 340px;
  padding: 0 10px;
  @media screen and (min-width: ${size.lg}) {
    position: absolute;
    top: 0;
    right: calc(50% + 22px);
    margin: 0;
    padding: 0;
  }
`;

export const Photos_Section = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
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
      top: -80px;
      width: 2px;
      height: 80px;
      background-color: ${colors.gray_95};
    }
    & div:first-child::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -100px;
      width: 2px;
      height: 100px;
      background-color: ${colors.gray_95};
    }
  }
`;

export const Photos_Text = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 340px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: ${size.lg}) {
    position: absolute;
    bottom: 110px;
    left: calc(50% + 20px);
    margin: 0;
    padding: 0;
  }
`;

export const Blog_Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${colors.gray_95};
`;

export const Blog_Header = styled.div`
  margin-top: 0;
  margin-bottom: 40px;
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
      margin-right: 10px;
    }
  }
`;

export const Blog_Wrapper = styled.div`
  @media screen and (min-width: ${size.lg}) {
    display: flex;
    justify-content: center;
    & div {
      margin-left: 45px;
      margin-right: 45px;
    }
  }
`;

export const Blog_Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  & img {
    margin-bottom: 10px;
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
