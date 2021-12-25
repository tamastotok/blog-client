import { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.styles';

export default function Header({ navbarIsClosed, changeNavbar }) {
  const burgerMenuRef = useRef(!null);
  const navLinksRef = useRef(!null);

  const closeNavbar = () => {
    changeNavbar(true);
  };

  const toggleNavbar = () => {
    changeNavbar((state) => !state);
  };

  //  Hover effect on burger div
  const handleOnMouseEnter = () => {
    [...burgerMenuRef.current.children].map(
      (item) => (item.style.backgroundColor = '#000')
    );
  };

  const handleOnMouseLeave = () => {
    [...burgerMenuRef.current.children].map(
      (item) => (item.style.backgroundColor = '')
    );
  };
  //  ---

  return (
    <>
      <S.Nav>
        <ul ref={navLinksRef} className={!navbarIsClosed ? 'nav-active' : ''}>
          <li>
            <Link onClick={closeNavbar} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/photos">
              Photos
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </S.Nav>

      <S.BurgerMenu
        className={!navbarIsClosed ? 'toggle' : ''}
        onClick={toggleNavbar}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        ref={burgerMenuRef}
      >
        <div className="line-1" />
        <div className="line-2" />
        <div className="line-3" />
      </S.BurgerMenu>

      <S.Header>Lily</S.Header>
    </>
  );
}
