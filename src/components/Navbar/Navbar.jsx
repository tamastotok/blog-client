import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Navbar.styles';

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const burgerMenuRef = useRef(!null);
  const navLinksRef = useRef(!null);

  const handleToggleMenu = () => {
    setIsClicked((state) => !state);
  };

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

  return (
    <>
      <S.Nav>
        <ul ref={navLinksRef} className={isClicked ? 'nav-active' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </S.Nav>

      <S.BurgerMenu
        className={isClicked ? 'toggle' : ''}
        onClick={handleToggleMenu}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        ref={burgerMenuRef}
      >
        <div className="line-1" />
        <div className="line-2" />
        <div className="line-3" />
      </S.BurgerMenu>
    </>
  );
}
