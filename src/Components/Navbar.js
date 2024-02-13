import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1><Link to="/">CrunchBite</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><a href="#">Github</a></li>
      </ul>
      <i className="fa-solid fa-bars"></i>
    </div>
  );
};

export default Navbar;
