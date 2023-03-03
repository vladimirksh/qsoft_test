import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import Profile from "../Profile/Profile";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <SearchForm />
      <Profile />
    </header>
  );
}

export default Header;
