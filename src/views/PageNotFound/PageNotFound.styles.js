import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Message = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  & h1 {
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 0;
    margin-right: 0;
    font-size: calc(1rem + 8vmax);
    font-weight: 400;
  }
  & a {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${colors.gray_50};
  }
  & a:hover {
    color: ${colors.black};
  }
`;
