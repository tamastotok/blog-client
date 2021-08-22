import { useRef, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as S from './Navbar.styles';

function NavLink({ direction, text }) {
  return (
    <S.Li>
      <Link to={direction}>
        <S.LinkButton>{text}</S.LinkButton>
      </Link>
    </S.Li>
  );
}

function Navbar() {
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
        <S.Ul ref={navLinksRef} className={isClicked ? 'nav-active' : ''}>
          <NavLink direction="/" text="Home" />
          <NavLink direction="/about" text="About" />
          <NavLink direction="/photos" text="Photos" />
          <NavLink direction="/blog" text="Blog" />
          <NavLink direction="/contact" text="Contact" />
        </S.Ul>
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

export default Navbar;
