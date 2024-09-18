import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; // Import the CSS file for styling the navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Company Manager</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/create" className="navbar-item">Create Company</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;