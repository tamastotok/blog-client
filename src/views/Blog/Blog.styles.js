import styled from "styled-components";
import { colors, size } from "../../styles/global";

export const BlogSection = styled.section`
  padding-top: 40px;
  padding-bottom: 80px;
  & img {
    display: block;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
  & div {
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 750px;
    height: fit-content;
  }
  & div::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 10px;
    width: calc(100% - 20px);
    height: 2px;
    background-color: ${colors.gray_95};
  }

  @media screen and (min-width: ${size.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "img text";
    place-content: center;
    & img {
      grid-area: img;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: 0;
    }
    & div {
      grid-area: text;
      margin-left: 10px;
      margin-right: 0;
      padding-right: 10px;
    }
  }
`;

export const BlogContent = styled.main`
  padding-top: 40px;
  padding-bottom: 80px;
  background-color: ${colors.gray_95};
  & div {
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    place-items: center;
    place-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
  }
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px;
  }
  & a:hover {
    outline: 1px solid ${colors.black};
    background-color: ${colors.white};
  }
  & a::after {
    display: none;
  }
  & img {
    margin-bottom: 10px;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;
