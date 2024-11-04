import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import darkmode from "../assets/darkmode.png";
import profile from "../assets/profile.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode"); // Toggles dark mode class on body
  };

  return (
    <nav className={`navbar-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="navbar-logo">
        <img src={home} alt="lock" />
        <Link to="/"> Claim Manager</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/submit-claim">Submit Your Claim</Link>
        </li>
        <li>
          <Link to="/track-claim">Track your Claims</Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <button onClick={toggleDarkMode}>
          <img src={darkmode} alt="Toggle Dark Mode" />
        </button>
        <button>
          <img src={profile} alt="User Profile" className="profile-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
