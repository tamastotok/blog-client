import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const Footer = styled.div`
  min-height: 480px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${size.xxl}) {
    padding-bottom: 2.5rem;
  }
`;

export const TextContent = styled.div`
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  max-width: 720px;
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
  & h1 {
    margin-bottom: -5rem;
    color: ${colors.gray_50};
  }
  @media only screen and (max-width: ${size.md}) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`;

export const Center_Line = styled.div`
  width: 2px;
  height: 480px;
  background-color: ${colors.gray_95};
  @media only screen and (max-width: ${size.xxl}) {
    display: none;
  }
`;

export const Images = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 370px;
  max-width: 720px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & img {
    margin: 0.3125rem;
    width: 170px;
    height: 170px;
    object-fit: cover;
  }
  @media only screen and (max-width: 556px) {
    justify-content: center;
  }
  @media only screen and (max-width: 400px) {
    min-width: 320px;
    justify-content: center;
  }
`;

export const Bottom = styled.div`
  height: 120px;
  background-color: ${colors.gray_95};
`;
