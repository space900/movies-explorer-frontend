import React from "react";
import Form from "../Form/Form";
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <Form
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?"
            link="Войти"
            rout="/login"
        >
            <label className="input__label" htmlFor="name">Имя</label>
            <input className="form__item" name="name" minLength="2" maxLength="40" required={true} id="name" type="text" />
            <span className="form__item-error"></span>
        </Form>
    )
}

export default Register;