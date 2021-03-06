import styled from 'styled-components';
import { colors, size } from '../../styles/global';

export const Contact = styled.section`
  & img {
    margin-bottom: 2.5rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  @media screen and (min-width: ${size.md}) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'img text'
      'img form';
    & img {
      grid-area: img;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: 0;
      width: 100%;
      max-width: 768px;
      height: 760px;
    }
  }
`;

export const Text = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  @media screen and (min-width: ${size.md}) {
    grid-area: text;
    margin-left: 0;
    margin-right: auto;
    padding-left: 1.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  & div {
    margin-bottom: 1.25rem;
    width: 100%;
  }
  & label {
    display: block;
    margin-bottom: 0.3125rem;
  }
  & input {
    border: 2px solid ${colors.gray_80};
    border-radius: 5px;
    width: 100%;
    height: 30px;
    padding: 0.3125rem;
    background-color: $white2;
    outline: none;
    font-size: 1rem;
    font-family: 'Lato';
    letter-spacing: 1px;
    color: $black;
  }
  & input:focus {
    border: 2px solid ${colors.black};
  }
  & textarea {
    width: 100%;
    height: 280px;
    padding: 0.3125rem;
    resize: none;
    border: 2px solid ${colors.gray_80};
    border-radius: 5px;
    font-size: 1rem;
  }
  & textarea:focus {
    border: 2px solid ${colors.black};
  }
  & button {
    margin-left: auto;
    border: 2px solid ${colors.gray_80};
    border-radius: 5px;
    width: 100px;
    height: 25px;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.8rem;
    font-family: 'Lato';
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.gray_50};
  }
  & button:hover {
    border: 2px solid ${colors.black};
    color: ${colors.black};
  }
  & button:disabled {
    border: 2px solid ${colors.gray_50};
    cursor: not-allowed;
    color: ${colors.gray_50};
  }

  @media screen and (min-width: ${size.md}) {
    grid-area: form;
    margin-left: 0;
    margin-right: auto;
    width: 100%;
    padding-left: 1.25rem;
  }
`;
