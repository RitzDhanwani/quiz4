import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <span className="logo-name">Your Company Name</span>
      </div>
      <div className="navbar-right">
        <Link to="/product">Product</Link>
        <Link to="/use-cases">Use cases</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/resources">Resources</Link>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
