import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__box">
                <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <div className="footer__border" />
                <nav className="footer__line">
                    <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
                    <ul className="footer__line-links">
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a href="https://github.com/space900" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                        </li>
                        <li>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="footer__link">Facebook</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;