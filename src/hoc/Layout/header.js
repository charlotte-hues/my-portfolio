import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="navText">
          <span>CHARLOTTE HUES</span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="navText">
          <span>MENU</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
