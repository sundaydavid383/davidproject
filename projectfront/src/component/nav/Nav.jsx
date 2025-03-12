import React, { useState } from "react";
import "./nav.css"

const Nav = () => {
  return (
    <div className="nav">
      <div className="navupper">
        <div className="logo">
          <span>AB</span>NATIONS<i className="fa-solid fa-building"></i>
        </div>
        <form action="" className="form">
          <input type="text" placeholder="search for company" />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        <div className="icons">
          <div className="icon">
            <i class="fa fa-user"></i>
          </div>
          <div className="icon">
            <i class="fa fa-reply"></i>
            <span>1</span>
          </div>
          <div className="icon">
            <i class="fa fa-tasks"></i>
            <span>2</span>
          </div>
        </div>
      </div>
      <ul className="navlower">
        <a href="#home"><span></span>Home</a>
        <a href="#about"><span></span>About Us</a>
        <a href="#services"><span></span>Services</a>
        <a href="#careers"><span></span>Careers</a>
        <a href="#contact"><span></span>Contact Us</a>
      </ul>
    </div>
  );
};

export default Nav;
