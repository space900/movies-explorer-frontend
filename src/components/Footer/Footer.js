import React from 'react';

function Footer() {
    return (
        <footer className="footer">
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