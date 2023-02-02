import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  bg-info Small shadow"
        data-testid="navbar"
      >
        <NavLink className="navbar-brand" to="./home">
          <img
            className="img-logo"
            alt="logo"
            src="https://hicoders.ch/wp-content/uploads/2022/11/hiCoders-Vector.png"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <NavLink className="linkHover" to="/">
              Home
            </NavLink>
            <NavLink className="linkHover" to="/Features">
              Features
            </NavLink>
            <NavLink className="linkHover" to="/About">
              About
            </NavLink>
            <NavLink className="linkHover" to="/Safi">
              Safi
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
