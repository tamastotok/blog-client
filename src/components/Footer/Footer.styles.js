import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const Container = styled.div`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const TextContent = styled.div`
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  & h1 {
    top: 0;
    margin-bottom: -80px;
    color: ${colors.gray_50};
  }
  @media only screen and (min-width: ${size.lg}) {
    margin-bottom: 120px;
    margin-right: calc(50% + 20px);
  }
`;

export const Center = styled.div`
  @media only screen and (min-width: ${size.lg}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 100%;
    background-color: ${colors.gray_95};
  }
`;

export const Images = styled.div`
  margin: auto;
  max-width: 720px;
  & img {
    margin: 5px;
    width: 170px;
    height: 170px;
    object-fit: cover;
  }
  @media only screen and (min-width: ${size.lg}) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% + 40px);
    height: fit-content;
  }
`;

export const Bottom = styled.div`
  height: 120px;
  background-color: ${colors.gray_95};
`;
