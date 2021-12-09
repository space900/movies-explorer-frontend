import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../src/images/header_logo.png";

function Form(props) {
  const location = useLocation();
  return (
    <div className="form__entry">
      {location.pathname === "/signin" && (
        <Link to="/">
          <div className="header__grid">
            <img src={logo} alt="логотип сайта" className="header__logo" />
          </div>
        </Link>
      )}
      {location.pathname === "/signup" && (
        <Link to="/">
          <div className="header__grid">
            <img src={logo} alt="логотип сайта" className="header__logo" />
          </div>
        </Link>
      )}

      <h2 className="form__title">{props.title}</h2>
      <form className="form__auth">
        <fieldset className="form__data">
          {props.children}
          <label className="input__label">E-mail</label>
          <input
            className="form__item form__item_email"
            /* value={email} */ type="email"
            required={true}
            minLength="8"
            maxLength="40"
            name="email"
          />
          <span className="form__item-error"></span>
          <label className="input__label">Пароль</label>
          <input
            className="form__item form__item_password"
            type="password"
            required={true}
            minLength="8"
            maxLength="40"
            name="password"
          />
          <span className="form__item-error"></span>
        </fieldset>
        {location.pathname === "/signin" && (
          <Link to="/movies"
            className="form__submit"
            type="submit"
            aria-label={props.buttonText}
          >
            {props.buttonText}
          </Link>
        )}

        {location.pathname === "/signup" && (
          <Link to="/signin"
            className="form__submit form__submit_register"
            type="submit"
            aria-label={props.buttonText}
          >
            {props.buttonText}
          </Link>
        )}
      </form>
      <div className="form__signup">
        <p className="form__text">{props.text}</p>
        <Link to={props.rout} className="form__link">
          {props.link}
        </Link>
      </div>
    </div>
  );
}

export default Form;
