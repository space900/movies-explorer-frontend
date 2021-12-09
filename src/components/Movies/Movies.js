import React from "react";
import SearchForm from "./SearchForm";
import moviesList from "./MoviesCardList";
import likeEmpty from "../../images/like_empty.svg";
import deleteIcon from "../../images/delete.svg";
import logo from "../../../src/images/header_logo.png";
import burger from "../../../src/images/burger.svg";
import { Link, useLocation } from "react-router-dom";

function Movies(props) {
  const location = useLocation();
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;
  // const [isLiked, setIsLiked] = React.useState(false);

  // function handleLikeClick() {
  //     setIsLiked(true);
  // }

  return (
    <section className="movies">
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

      <SearchForm />
      <div className="movies__box">
        <ul className="movies__list">
          {moviesList.map((i) => (
            <li className="movies__item">
              <img className="movies__image" src={i.img} alt={i.title} />
              <div className="movies__text">
                <div className="movies__text_grid">
                  <p className="movies__title">{i.title}</p>
                  <p className="movies__duration">{i.duration}</p>
                </div>
                {location.pathname === "/saved-movies" ? (
                  <img
                    src={deleteIcon}
                    className="movies__icon"
                    alt="пустой лайк"
                  />
                ) : (
                  <img
                    src={likeEmpty}
                    className="movies__icon"
                    alt="пустой лайк"
                  />
                )}
                {/* <img src={like} className={`movies__icon_hidden ${isLiked ? ('movies__icon_active') : ''}`} alt="лайк" /> */}
              </div>
            </li>
          ))}
        </ul>
        {location.pathname === "/movies" ? (
          <button className="movies__button" type="button">
            Ещё
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Movies;
