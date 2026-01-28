import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import site_logo from "../../assets/logo.png";
import search_icon from "../../assets/Component 4.png";
import heart_icon from "../../assets/heart.png";
import cart_icon from "../../assets/cart.png";
import menu_icon from "../../assets/Hamburger.png";
import world_icon from "../../assets/inter-logo.png";
import down_arrow from "../../assets/small.png";
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <div className="navbar">
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="top-links">
                        <Link to="/help" onClick={handleLinkClick}>Help Center</Link>
                        <Link to="/tracking" onClick={handleLinkClick}>Order Tracking</Link>
                    </div>
                    <div className="top-options">
                        <div className="language">
                            <img src={world_icon} alt="Language" className="icon" /> English
                            <img src={down_arrow} alt="Dropdown" className="icon small-icon" />
                        </div>
                        <div className="currency">
                            AED
                            <img src={down_arrow} alt="Dropdown" className="icon small-icon" />
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="main-nav">
                    <div className="logo">
                        <Link to="/" onClick={handleLinkClick}><img src={site_logo} alt="Makan Care Logo" /></Link>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search products here..." />
                        <button>
                            <img src={search_icon} alt="Search" className="icon" />
                            SEARCH
                        </button>
                    </div>
                    <div className="user-actions">
                        <Link to="/login" onClick={handleLinkClick}>Login / Register</Link>
                        <Link to="/wishlist" onClick={handleLinkClick}><img src={heart_icon} alt="Wishlist" className="icon" /></Link>
                        <Link to="/cart" onClick={handleLinkClick}><img src={cart_icon} alt="Shopping Cart" className="icon" /></Link>
                    </div>
                    <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <img src={menu_icon} alt="Menu" className="icon" />
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className={`bottom-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <button className="categories-btn">
                        <img src={menu_icon} alt="Menu" className="icon" />
                        SHOP BY CATEGORIES
                        <img src={down_arrow} alt="Dropdown" className="icon small-icon" />
                    </button>
                    <ul className="nav-links">
                        <li>
                            <Link to="/" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={handleLinkClick}>Services</Link>
                        </li>
                        <li>
                            <Link to="/new-arrivals" onClick={handleLinkClick}>New Arrivals</Link>
                        </li>
                        <li>
                            <Link to="/more" onClick={handleLinkClick}>More</Link>
                        </li>
                    </ul>
                    <div className="promo-text">🚀 Free International Delivery</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
