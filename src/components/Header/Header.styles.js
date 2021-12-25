import styled from 'styled-components';
import { size } from '../../styles/global';

export const Header = styled.h1`
  margin-top: 2.5rem;
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
