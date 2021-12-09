import React from "react";
import Form from "../Form/Form";

function Register(props) {
    return (
        <section className="login">
            
            <Form
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                text="Уже зарегистрированы?"
                link="Войти"
                rout="/signin"
            >
                <label className="input__label" htmlFor="name">Имя</label>
                <input className="form__item form__item_name" name="name" minLength="2" maxLength="40" required={true} id="name" type="text" />
                <span className="form__item-error"></span>
            </Form>
            
        </section>
    )
}

export default Register;