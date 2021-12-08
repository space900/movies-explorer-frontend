import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../src/images/header_logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип сайта" className="header__logo" />
            <div className="header__nav">
                <Link to="signup" className="header__link">Регистрация</Link>
                <Link to="login" className="header__link header__link_entry">Войти</Link>
            </div>
        </header>
    );
}

export default Header;