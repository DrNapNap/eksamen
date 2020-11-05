import React from "react";
import { useHistory } from "react-router-dom";

import img from "../img/logo.png"


import "./NavLinks.css";



const NavLinks = (props) => {

  let history = useHistory();

  const handleSoeg = (e) => {

      e.preventDefault(); // undgå at component reloader/re-mounter
      history.push("/soeg/" + e.target.soeg.value)

  }
  return (
    <nav className="  navbar-expand-lg  navbar-light container-fluid  white sticky-top ">
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
      <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
 <img alt="logo" className="col-3 my-3 img-fluid col-lg-1" src={img}/>      <a className="nav-link" href="/"> <h4 className="my-4">BOSTON GAMING</h4></a> 
        <div className="navbar-nav col-12 col-lg-6 my-2 justify-content-end">
          <a className="nav-link active" href="#products">
            PRODUCTS
          </a>
          <a className="nav-link active" href="#design">
            DESIGN YOUR OWN
          </a>
          <a className="nav-link active" href="#aboutus">
           ABOUT
          </a>
          <a className="nav-link active" href="#contact">
            CONTACT
          </a>
        </div>
        <form onSubmit={handleSoeg}>
                            <input name="soeg" type="search" />
                            <input type="submit" value="Søg" />
                        </form>
      </div>
      </div>
    </nav>
  );
};

export default NavLinks;
