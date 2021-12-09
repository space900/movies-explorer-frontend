import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/header_logo.png';

function Header() {

    return (

        <header className="header">
            <img src={logo} alt="логотип сайта" className="header__logo" />
            <nav className="header__nav">
                <Link to="signup" className="header__link">Регистрация</Link>
                <Link to="signin" className="header__link header__link_entry">Войти</Link>
            </nav>
        </header>

        

    );
}

export default Header;