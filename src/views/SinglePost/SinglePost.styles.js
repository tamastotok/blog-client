import styled from "styled-components";

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  & .back-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  & h1 {
    margin-top: 40px;
  }
  & p {
    margin-bottom: 40px;
    font-family: OldStandardTT;
    font-weight: 400;
  }
  & img {
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
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
