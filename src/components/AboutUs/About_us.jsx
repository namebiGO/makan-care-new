import React from "react";
import logo_site from "../../assets/logo.png";
import rocket from "../../assets/inter-logo.png";
import cart_icon from "../../assets/cart.png";
import heart_icon from "../../assets/heart.png";
import CounterApp from "../CounterApp/CounterApp";
import TeamSection from "../TeamSection/TeamSection";
import BlogSite from "../Blogsite/BlogSite";
import CounterApp2 from "../CounterApp2/CounterApp2";
import Footer from "../Footer/Footer";

const AboutUs = () => {
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
              <a href="#">Login / Register</a>
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
            <img src={rocket} alt="Free Delivery" />
            <span>Free International Delivery</span>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <div className="text-columns">
          <div className="text-column-left">
            <h2>Left Column</h2>
            <p>Content for the left column.</p>
          </div>
          <div className="text-column-right">
            <h2>Right Column</h2>
            <p>Content for the right column.</p>
          </div>
        </div>
        <div className="image-display">
          <img src="your-image.jpg" alt="Centered Display" />
        </div>
      </div>

      <div className="content-container alternate">
        <div className="text-column-alt-left">
          <h2>Second Left Column</h2>
          <p>Different styling from the first section.</p>
        </div>
        <div className="text-column-alt-right">
          <h2>Second Right Column</h2>
          <p>Following the same layout.</p>
        </div>
      </div>

      <div className="achievements-container">
        <div className="achievements-text">
          <h2>Our Achievements</h2>
          <p>We have achieved great milestones with a strong customer base.</p>
          <div className="counters">
            <CounterApp />
            <CounterApp2 />
          </div>
        </div>
        <div className="achievements-image">
          <img src="your-image.jpg" alt="Achievement" />
        </div>
      </div>

      <TeamSection />
      <BlogSite />
      <Footer />
    </div>
  );
};

export default AboutUs;
