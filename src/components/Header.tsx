import React from "react";
import logo from "../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
