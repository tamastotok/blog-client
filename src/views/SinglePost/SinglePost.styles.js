import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Post = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: ${colors.gray_95};
  & .back-button {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    text-transform: uppercase;
    color: black;
  }
  & .back-button:hover {
    color: rgb(26, 13, 171);
    border-bottom: 1px solid rgb(26, 13, 171);
  }
  & h1 {
    margin-top: 2.5rem;
    font-size: 6rem;
    font-family: OldStandardTT;
  }
  & p {
    margin-bottom: 2.5rem;
    font-family: OldStandardTT;
    font-weight: 400;
  }
  & img {
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 20px);
    max-width: 600px;
    object-fit: cover;
  }
  & a {
    font-size: 1.2rem;
    font-family: OldStandardTT;
    font-weight: 400;
    text-transform: none;
    color: rgb(26, 13, 171);
  }
  & a::after {
    display: none;
  }
  & .author {
    margin-left: auto;
  }
`;
