import React from "react";
import Form from "../Form/Form";

function Login(props) {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        rout="/signup"
      ></Form>
    </section>
  );
}

export default Login;
