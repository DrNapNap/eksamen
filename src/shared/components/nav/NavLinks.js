import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Navapi from "./Navapi";

import "./NavLinks.css";

import { useHistory } from "react-router-dom";

const NavLinks = (props) => {
  const soe = useRef(null);

  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  function handleSoeg() {
    history.push("/s/" + soe.current.value);
  }

  return (
    <nav className=" col-12 p-0 m-0 navbar navbar-expand-lg navbar-expand-sm navbar-light row col__nav container-fluid ">
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
        <div className="navbar-nav col-12 col-lg-6 ">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link active" to="/">
            SPONSORE
          </NavLink>
          <NavLink className="nav-link active" to="/">
            OM RUNIT
          </NavLink>
          <NavLink className="nav-link active" to="/">
            KONTAKT
          </NavLink>
        </div>

        <Navapi className="" />
      </div>
    </nav>
  );
};

export default NavLinks;
