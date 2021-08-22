import { colors, size } from '../../styles/global';

import styled from 'styled-components';

export const BurgerMenu = styled.div`
  position: absolute;
  z-index: 40;
  top: 41px;
  right: 15px;
  padding: 5px;
  cursor: pointer;
  & div {
    transition: all 0.3s ease;
    margin-top: 4px;
    margin-bottom: 4px;
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
  top: 0;
  border-top: 10px solid ${colors.gray_80};
  padding-top: 20px;
  background-color: ${colors.white};
`;

export const Ul = styled.ul`
  position: absolute;
  z-index: 20;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.5s ease-in;
  width: 100%;
  padding: 20px;
  background-color: ${colors.white};
  list-style-type: none;
  &.nav-active {
    transform: translateX(0%);
  }
  @media only screen and (min-width: ${size.md}) {
    flex-direction: row;
    justify-content: center;
    transform: translateX(0);
  }
`;

export const Li = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  & a::after {
    display: none;
  }
`;

export const LinkButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  padding: 10px;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Lato';
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.gray_80};
  &:hover {
    color: ${colors.black};
  }
  @media only screen and (min-width: ${size.md}) {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
