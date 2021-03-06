import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, checked, handleShortMovies }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        Короткометражки
        <input
          className="filter-checkbox__input"
          type="checkbox"
          name="shortfilm"
          onChange={onChange}
          checked={checked}
        />
        <span className="filter-checkbox__slider" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
