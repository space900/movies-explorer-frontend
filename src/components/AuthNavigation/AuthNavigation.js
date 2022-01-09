import React from 'react';
import './AuthNavigation.css';
import { NavLink } from 'react-router-dom';

import SigninButton from '../SigninButton/SigninButton';

function AuthNavigation() {
	const authNavLinks = [
		{
			key: 1,
			linkText: 'Регистрация',
			linkPath: '/signup',
			exact: false,
		},
	]

  return (
    <nav className="auth-navigation">
      <ul className="auth-navigation__items">
  			{authNavLinks.map((item) => (
          <li className="mobile-navigation__list-item" key={item.key}>
            <NavLink
              className="auth-navigation__link"
              to={{ pathname: item.linkPath }}
              exact={item.exact}
            >
              {item.linkText}
            </NavLink>
          </li>
        ))}
        <li>
          <SigninButton />
        </li>
      </ul>
    </nav>
  )
}

export default AuthNavigation;
