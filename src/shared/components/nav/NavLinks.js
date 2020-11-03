import React from "react";
import { NavLink } from "react-router-dom";
import Navapi from "./Navapi";
import img from "../img/logo.png"


import "./NavLinks.css";



const NavLinks = (props) => {


  return (
    <nav className="  navbar-expand-lg navbar-light container-fluid  white sticky-top ">
<div className="container ">
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
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <img alt="logo" className="col-1 my-3 img-fluid" src={img}/> <h4 className="my-4">BOSTON GAMING</h4>
        <div className="navbar-nav col-12 col-lg-6 my-2">
          <NavLink className="nav-link active" to="/">
            PRODUCTS
          </NavLink>
          <NavLink className="nav-link active" to="/">
            DESIGN YOUR OWN
          </NavLink>
          <NavLink className="nav-link active" to="/">
           ABOUT
          </NavLink>
          <NavLink className="nav-link active" to="/">
            CONTACT
          </NavLink>
        </div>

        <Navapi className="" />
      </div>
      </div>
    </nav>
  );
};

export default NavLinks;
