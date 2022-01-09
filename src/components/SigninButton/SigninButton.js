import React from "react";
import "./SigninButton.css";
import { NavLink } from "react-router-dom";

function SigninButton() {
  return (
    <NavLink className="auth-navigation__link signin-btn" to={{ pathname: "/signin" }}>
      Войти
    </NavLink>
  );
}

export default SigninButton;
