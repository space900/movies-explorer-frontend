import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__border" />
            <nav className="footer__line">
                <p className="footer__copyright">&#169; Andrey Khnykin {new Date().getFullYear()}</p>
                <ul className="footer__line-links">
                    <li>
                        <p className="footer__link">Яндекс.Практикум</p>
                    </li>
                    <li>
                        <p className="footer__link">Github</p>
                    </li>
                    <li>
                        <p className="footer__link">Facebook</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;