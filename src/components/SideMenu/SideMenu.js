import React from "react";
import "./SideMenu.css";

import CloseButton from "../CloseButton/CloseButton";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

function SideMenu({ isOpen, onClose, onMobileLink }) {
  return (
    <div className={`side-menu ${isOpen && "side-menu_opened"}`}>
      <div
        className={`side-menu__container ${
          isOpen && "side-menu__container_opened"
        }`}
      >
        <CloseButton
          classNameModifier="close-btn_place_side-menu"
          onClose={onClose}
        />
        <MobileNavigation onMobileLink={onMobileLink} />
      </div>
    </div>
  );
}

export default SideMenu;
