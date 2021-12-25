import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const Blog_Text_Section = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  & img {
    display: block;
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
  & div {
    position: relative;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    max-width: 750px;
    height: fit-content;
  }
  & div::after {
    content: '';
    position: absolute;
    bottom: -0.625rem;
    left: 0.625rem;
    width: calc(100% - 20px);
    height: 2px;
    background-color: ${colors.gray_95};
  }

  @media screen and (min-width: ${size.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'img text';
    place-content: center;
    & img {
      grid-area: img;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: 0;
    }
    & div {
      grid-area: text;
      margin-left: 0.625rem;
      margin-right: 0;
      padding-right: 0.625rem;
    }
  }
`;

export const Blog_Posts = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  background-color: ${colors.gray_95};
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  place-items: center;
  place-content: center;
  margin-left: auto;
  margin-right: auto;
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    padding: 0.3125rem;
  }
  & a:hover {
    outline: 1px solid ${colors.black};
    background-color: ${colors.white};
  }
  & a::after {
    display: none;
  }
  & img {
    margin-bottom: 0.625rem;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;
