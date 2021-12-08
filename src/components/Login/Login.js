import React from "react";
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Form
            title="Рады видеть!"
            buttonText="Войти"
            text="Ещё не зарегистрированы?"
            link="Регистрация"
            rout="/login"
        >
        </Form>
    );
}

export default Login;