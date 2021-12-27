import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Blog_Text_Section = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & img {
    margin-bottom: 2rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    width: 350px;
    height: 350px;
    object-fit: cover;
  }
  & div {
    position: relative;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    max-width: 350px;
    height: fit-content;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  & div::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.625rem;
    width: calc(100% - 20px);
    height: 2px;
    background-color: ${colors.gray_95};
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
