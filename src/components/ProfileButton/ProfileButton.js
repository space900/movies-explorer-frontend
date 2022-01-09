import React from "react";
import "./ProfileButton.css";
import { NavLink } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "../../images/profile_icon.svg";

function ProfileButton({ onClick }) {
  return (
    <NavLink
      className="profile-btn"
      to={{ pathname: "/profile" }}
      onClick={onClick}
    >
      Аккаунт
      <ProfileIcon className="profile-btn__icon" fill="currentColor" />
    </NavLink>
  );
}

export default ProfileButton;
