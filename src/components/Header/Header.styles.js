import styled from 'styled-components';
import { size } from '../../styles/global';

export const Header = styled.h1`
  margin-top: 40px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  font-size: 12rem;
  font-family: 'Silhouetto';
  font-weight: 400;
  @media screen and (min-width: ${size.md}) {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
