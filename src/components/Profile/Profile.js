import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../src/images/header_logo.png";
import burger from "../../../src/images/burger.svg";

function Profile(props) {
  const location = useLocation();
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;
  return (
    <section className="profile">
      {location.pathname === "/profile" && (
        <div className="header__profile">
          <Link to="/">
            <img src={logo} alt="логотип сайта" className="header__logo" />
          </Link>
          {isMobile ? (
            <img src={burger} className="header__burger" alt="Мобильное меню" />
          ) : (
            ""
          )}

          <nav className="header__nav_movies">
            <Link to="/movies" className="header__movies">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__movies">
              Сохранённые фильмы
            </Link>
            <Link to="/profile" className="header__movies header__account_grid">
              <p className="header__movies header__account">Аккаунт</p>
              <div className="header__account_icon" />
            </Link>
          </nav>
        </div>
      )}
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__label" htmlFor="name">
          Имя
          <input
            className="profile__label"
            placeholder="name"
            defaultValue="Виталий"
            id="name"
            disabled
          />
        </label>
        <span className="profile__border"></span>
        <label className="profile__label" htmlFor="email">
          E-mail
          <input
            className="profile__label"
            placeholder="name"
            defaultValue="pochta@yandex.ru"
            id="email"
            disabled
          />
        </label>
        <button className="profile__edit" type="submit">
          Редактировать
        </button>
        <button className="profile__edit profile__logout" type="button">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
