import React from "react";
import "./MobileHeader.css";
import logo from "../../images/logo.svg";
import profileButton from "../../images/profileButton.svg";
import SearchForm from "../SearchForm/SearchForm";

function MobileHeader() {
  const isMobile = true;
  return (
    <header className="header-mobile">
      <nav className="header-mobile__navigation">
        <img className="header-mobile__logo" alt="Логотип" src={logo} />
        <button className="header-mobile__account-button">
          <img
            className="header-mobile__account-icon"
            src={profileButton}
            alt="Профиль"
          />
        </button>
      </nav>
      <SearchForm isMobile={isMobile} />
    </header>
  );
}

export default MobileHeader;
