import React from "react";
import { Link } from 'react-router-dom';

function Form(props) {

    return (
        <div className="form__entry">
            <h2 className="form__title">{props.title}</h2>
            <form className="form__auth" /* onSubmit={handleSubmit} */>
                <fieldset className="form__data">
                    {props.children}
                    <label className="input__label">E-mail</label>
                    <input className="form__item form__item_email" /* value={email} */  type="email" required={true} minLength="8" maxLength="40" name="email" />
                    <span className="form__item-error"></span>
                    <label className="input__label">Пароль</label>
                    <input className="form__item form__item_password" type="password" required={true} minLength="8" maxLength="40" name="password" />
                    <span className="form__item-error"></span>
                </fieldset>
                <button className="form__submit" type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
            </form>
            <div className="form__signup">
                <p className="form__text">{props.text}</p>
                {/* <Link to={props.rout} className="form__link">{props.link}</Link> */}
            </div>
        </div>
    )
}

export default Form;