import React from 'react';
import Navbar from '../Navbar/Navbar';
import * as S from './Header.styles';

export default function Header() {
  return (
    <>
      <Navbar />
      <S.Header>Lily</S.Header>
    </>
  );
}
