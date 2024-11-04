import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/home.png";
import darkmode from "../assets/darkmode.png";
import profile from "../assets/profile.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    navigate("/login"); // Redirect to login page
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="navbar-logo">
        <img src={home} alt="Home" />
        <Link to="/">Claim Manager</Link>
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
        <div className="profile-menu">
          <button onClick={toggleProfileMenu} className="profile-icon-button">
            <img src={profile} alt="User Profile" className="profile-icon" />
          </button>
          {isProfileMenuOpen && (
            <div className="profile-dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
