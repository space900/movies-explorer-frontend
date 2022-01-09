import React, { useContext } from "react";
import "./ProfileForm.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import SubmitGroup from "../SubmitGroup/SubmitGroup";

function ProfileForm({
  name,
  inputsData,
  errorMessage,
  submitGroupModifier,
  submitButtonText,
  isBeingEdited,
  infoHasBeenChanged,
  onEditProfile,
  onChange,
  onSubmit,
  values,
  errors,
  isValid,
  onSignOut,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <form onSubmit={onSubmit} className="profile-form" name={name} noValidate>
      <h2 className="profile-form__heading">Привет, {currentUser.name}!</h2>
      <fieldset className="profile-form__items">
        {inputsData.map((item) => (
          <div className="profile-form__item-container" key={item.key}>
            <label className="profile-form__label" htmlFor={item.id}>
              {item.label}
            </label>
            <input
              className={`profile-form__item profile-form__item_el_${item.name}`}
              id={item.id}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              minLength={item.minLength}
              maxLength={item.maxLength}
              required={item.required}
              disabled={!isBeingEdited}
              onChange={onChange}
              value={values[item.name]}
              pattern={item.pattern}
            />
            <p className="profile-form__item-error" id={item.errorId}>
              {errors[item.name] && item.customErrorMessage}
            </p>
          </div>
        ))}
      </fieldset>
      {isBeingEdited ? (
        <SubmitGroup
          classNameModifier={submitGroupModifier}
          errorMessage={errorMessage}
          buttonText={submitButtonText}
          buttonDisabled={!isValid || !infoHasBeenChanged}
        />
      ) : (
        <div className="profile-form__btns">
          <button
            type="button"
            className="profile-form__btn profile-form__btn_use_edit"
            onClick={onEditProfile}
            aria-label="Редактировать профиль"
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile-form__btn profile-form__btn_use_signout"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      )}
    </form>
  );
}

export default ProfileForm;
