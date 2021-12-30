import { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onCheckboxChange, onSubmit, handleShortMovies, isSavedMovies }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      setErrorMessage("Нужно ввести ключевое слово");
      return;
    }

    onSubmit(searchQuery);
  };

  const handleSearchQueryChange = (e) => {
    const target = e.target;
    setSearchQuery(target.value);
  };

  const handleCheckboxChange = (e) => {
    const target = e.target;
    onCheckboxChange(target.checked);
  };

  return (
    <section className="search-form main__section">
      <div className="search-form__container main__section-container main__section-container_size_xs">
        <form onSubmit={handleSubmit} className="search-form__content" name="search-form" noValidate>
          <label className="search-form__label" htmlFor="search-form-movie">
            <input
              className="search-form__item"
              id="search-form-movie"
              type="text"
              name="keyword"
              placeholder={
                isSavedMovies
                  ? localStorage.getItem("lastSavedMoviesRequest")
                    ? JSON.parse(localStorage.getItem("lastSavedMoviesRequest"))
                    : "Фильм"
                  : localStorage.getItem("lastMoviesRequest")
                  ? JSON.parse(localStorage.getItem("lastMoviesRequest"))
                  : "Фильм"
              }
              required
              onChange={handleSearchQueryChange}
            />
            <p className="search-form__item-error">{errorMessage}</p>
          </label>
          <button className="search-form__submit-btn" type="submit" aria-label="Найти фильмы">
            Найти
          </button>
        </form>
        <FilterCheckbox onChange={handleCheckboxChange} handleShortMovies={handleShortMovies} />
      </div>
    </section>
  );
}

export default SearchForm;
