import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const BurgerMenu = styled.div`
  position: absolute;
  z-index: 40;
  top: 1.25rem;
  right: 1rem;
  padding: 0.375rem;
  cursor: pointer;
  & div {
    transition: all 0.3s ease;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    width: 24px;
    height: 4px;
    background-color: ${colors.gray_80};
  }
  & div::hover {
    background-color: ${colors.black};
  }
  &.toggle .line-1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  &.toggle .line-2 {
    opacity: 0;
  }
  &.toggle .line-3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  @media only screen and (min-width: ${size.md}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  border-top: 10px solid ${colors.gray_80};
  background-color: ${colors.white};
  position: relative;
  width: 100%;
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateX(10%);
    transition: all 0.5s ease;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    width: 90%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    background-color: ${colors.white};
    list-style-type: none;
    & li {
      margin-bottom: 2rem;
      margin-left: 1.25rem;
      margin-right: 1.25rem;
      & a {
        font-style: normal;
      }
      & a::after {
        display: none;
      }
    }
  }
  & .nav-active {
    width: 100%;
    z-index: 10;
    opacity: 1;
    transform: translateX(0);
  }
  @media only screen and (min-width: ${size.md}) {
    & ul {
      position: static;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      left: 0;
      opacity: 1;
      transform: translatex(0);
      & li {
        margin-bottom: 0;
      }
    }
  }
`;

export const Header = styled.h1`
  padding-top: 2.5rem;
  margin-bottom: 3.75rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  font-size: 12rem;
  font-family: 'Silhouetto';
  font-weight: 400;
  @media screen and (min-width: ${size.md}) {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
