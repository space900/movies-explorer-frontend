import React from 'react';
import logo from '../../../src/images/header_logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип сайта" className="header__logo" />
            <div className="header__nav">
                <h2 className="header__link">Регистрация</h2>
                <h2 className="header__link header__link_entry">Войти</h2>
            </div>
        </header>
    );
}

export default Header;