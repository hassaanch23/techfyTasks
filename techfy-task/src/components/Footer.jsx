import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h2 className="footer-logo">Logo</h2>
          <ul className="footer-contact">
            <li><FiMapPin /> 123 Consectetur at ligula 10660</li>
            <li><FiPhone /> 010-020-0340</li>
            <li><FiMail /> info@company.com</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Products</h3>
          <ul>
            <li>Luxury</li>
            <li>Sport Wear</li>
            <li>Men’s Shoes</li>
            <li>Women’s Shoes</li>
            <li>Popular Dress</li>
            <li>Gym Accessories</li>
            <li>Sport Shoes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Further Info</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop Locations</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
          <span><FaLinkedinIn /></span>
        </div>

        <div className="footer-subscribe">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
