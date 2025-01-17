import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Daily Mood Tracker</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#reports">Reports</a>
        </div>
        {/* <button className="logout-btn">Logout</button> */}
        <button className="logout-btn">
          <Link to="/login">Login</Link>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
