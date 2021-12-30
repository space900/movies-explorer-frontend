import React from "react";
import Preloader from "../Preloader/Preloader";

function SearchForm() {
  const [search, setSearch] = React.useState(false);

  function loading() {
    setSearch(true);
  }

  return (
    <section className="search">
      <Preloader isOpen={search} />
      <div className="search__box">
        <div className="search__container">
          <form className="search__form">
            <input
              className="search__input"
              name="search"
              required
              type="search"
              placeholder="Фильм"
              minLength="2"
            />
            <button
              className="search__button"
              onClick={loading}
              type="submit"
              aria-label="Найти"
            >
              Найти
            </button>
          </form>
          <fieldset className="search__type">
            <p className="search__title">Короткометражки</p>
            <input
              className="search__switch"
              placeholder="Короткометражки"
              name="short"
              type="range"
              min="1"
              max="2"
            />
          </fieldset>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
