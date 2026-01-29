import React from "react";
import "./OnlyHead.css"
import logo_site from "../../assets/logo.png";
import rocket from '../../assets/inter-logo.png';
import cart_icon from "../../assets/cart.png";
import heart_icon from "../../assets/heart.png";
import { Link } from "react-router-dom";

const OnlyHead = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-site">
            <img src={logo_site} alt="Logo" className="logo" />
          </div>
          <div className="info-column">
            <div className="top-row">
              <a href="#">Help Center</a>
              <a href="#">Order Tracking</a>
            </div>
            <div className="bottom-row">
              <div className="search-bar">
                <input type="text" placeholder="Search products here..." />
                <button>SEARCH</button>
              </div>
              {/* <a className="Logincolor" href="#">Login / Register</a> */}
              {/* <p><Link to="/login-main">Login / Register</Link></p> */}
              <div className="icons">
                <img src={heart_icon} alt="Wishlist" />
                <img src={cart_icon} alt="Cart" />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="categories">
            <button>SHOP BY CATEGORIES ▼</button>
          </div>
          <div className="menu-links">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">New Arrivals</a>
            <a href="#">More</a>
          </div>
          <div className="delivery-info">
            {/* <img src={rocket} alt="Free Delivery" /> */}
            <span>Fast & Secure Service</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default OnlyHead;
