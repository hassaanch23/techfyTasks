import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="header-contact">
          <span>📧 info@company.com</span>
          <span>📞 010-020-0340</span>
        </div>
        <div className="header-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="header-nav">
        <div className="Logo">Logo</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>

        <div className="header-icons">
          <span role="img" aria-label="search">🔍</span>
          <span role="img" aria-label="cart">🛒 <sup>7</sup></span>
          <span role="img" aria-label="user">👤 <sup>+99</sup></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
