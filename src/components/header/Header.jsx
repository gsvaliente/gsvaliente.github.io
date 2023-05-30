import { useState } from 'react';
import './header.css';

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Gabriel
        </a>

        <div className={isShowMenu ? 'nav__menu show__menu' : 'nav__menu'}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setIsShowMenu(!isShowMenu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setIsShowMenu(!isShowMenu)}>
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
};
