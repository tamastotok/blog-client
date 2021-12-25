import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const Photo_Section = styled.section`
  & h2 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  & img:nth-child(2) {
    display: none;
  }
  & div {
    display: block;
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    min-width: 320px;
    max-width: 448px;
    & img {
      width: 100%;
    }
  }
  & a {
    display: none;
  }
  @media screen and (min-width: ${size.lg}) {
    position: relative;
    display: grid;
    grid-template-rows: 107px auto auto;
    grid-template-columns: 520px 520px;
    grid-template-areas:
      'title sunglasses'
      'watch sunglasses'
      'link sunglasses';
    place-content: center;
    padding-top: 2.5rem;
    padding-bottom: 5rem;
    & h2 {
      grid-area: title;
      margin-left: auto;
      margin-right: 2.5rem;
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
    & img:nth-child(2) {
      display: block;
      grid-area: watch;
      justify-self: end;
      margin-top: 0;
      margin-bottom: 1.25rem;
      margin-left: auto;
      margin-right: 2.5rem;
      width: 100%;
      max-width: 400px;
      height: 100%;
      object-fit: cover;
    }
    & div {
      position: relative;
      grid-area: sunglasses;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      & img {
        height: 780px;
        object-fit: cover;
      }
    }
    & div::after {
      content: '';
      position: absolute;
      bottom: -5rem;
      left: 0;
      width: 2px;
      height: 80px;
      background-color: ${colors.gray_95};
    }
    & a {
      grid-area: link;
      display: block;
      margin-top: auto;
      margin-bottom: 0.625rem;
      margin-left: auto;
      margin-right: 2.5rem;
    }
  }
`;

export const Gallery = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  background-color: ${colors.gray_95};
  & h2 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  & p {
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  @media screen and (min-width: ${size.sm}) {
    width: 660px;
  }
  @media screen and (min-width: ${size.md}) {
    width: 740px;
  }
`;

export const Carausel = styled.div`
  display: flex;
  height: 520px;
  & img {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 310px;
    object-fit: cover;
  }
  @media screen and (min-width: ${size.sm}) {
    img {
      width: 320px;
    }
  }
  @media screen and (min-width: ${size.md}) {
    & img {
      width: 360px;
    }
  }
`;

export const Left_Arrow = styled.div`
  &:hover {
    opacity: 0.5;
    background-color: ${colors.gray_50};
    & div {
      background-color: ${colors.white};
    }
  }
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 520px;
  background-color: none;
  cursor: pointer;
  & div {
    position: absolute;
    left: 0.625rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 4px;
    background-color: ${colors.black};
  }
  & div:first-child {
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: top left;
  }
  & div:last-child {
    bottom: 50%;
    transform: rotate(45deg);
    transform-origin: bottom left;
  }
`;

export const Right_Arrow = styled.div`
  &:hover {
    opacity: 0.5;
    background-color: ${colors.gray_50};
    & div {
      background-color: ${colors.white};
    }
  }
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 520px;
  background-color: none;
  & div {
    position: absolute;
    right: 0.625rem;
    margin-left: 0.625rem;
    margin-right: auto;
    width: 80%;
    height: 4px;
    background-color: ${colors.black};
  }
  & div:first-child {
    top: 50%;
    transform: rotate(45deg);
    transform-origin: top right;
  }
  & div:last-child {
    bottom: 50%;
    transform: rotate(-45deg);
    transform-origin: bottom right;
  }
`;

export const Button_Group = styled.div`
  margin-top: 1.25rem;
  margin-left: auto;
  margin-right: 1.25rem;
  width: fit-content;
  & button {
    border: 0;
    cursor: pointer;
    font-size: 0.8rem;
    font-family: 'Lato';
    font-weight: 600;
    font-style: italic;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.gray_50};
  }
  & button:hover {
    text-decoration: underline;
    color: ${colors.black};
  }
`;
