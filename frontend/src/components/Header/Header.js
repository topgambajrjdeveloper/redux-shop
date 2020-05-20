import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  return (
    <header className="header">
      <div className="brand">
        <button className="header-button" onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">Redux Shop</Link>
      </div>
      <div className="header-links">
        <Link to="/">
          <i className="fas fa-sign-in-alt"></i>
        </Link>
        <Link to="/">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
