import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    {
      title: "Яндекс.Практикум",
      link: "https://practicum.yandex.ru",
    },
    {
      title: "GitHub",
      link: "https://github.com/",
    },
    {
      title: "Facebook",
      link: "https://facebook.com",
    },
  ];

  return (
    <footer className="footer page__footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__content">
          <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
          <ul className="footer__links">
            {footerLinks.map((item, i) => (
              <li key={i}>
                <Link
                  className="footer__link"
                  to={{ pathname: item.link }}
                  target="_blank"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
