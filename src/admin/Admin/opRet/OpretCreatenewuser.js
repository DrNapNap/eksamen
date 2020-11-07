import React from "react";

import {  Opretuser } from "../../helpers/APIkald/apikald";

import { useHistory } from "react-router-dom";




const OpretCreatenewuser = () => {
  const history = useHistory();




  const handleSubmit = (e) => {
    e.preventDefault();

    Opretuser(e.target).then((res) => {
      history.push("/admin");
    });
  };



  return (
    <div className="container whitet">
      <div className="row d">
        <form className="col-10" onSubmit={handleSubmit}>
        <label className="col-12">
        Name
                <input
                  name="name"
                  type="text"
                  id="txtBeskrivelse"
                  placeholder="name"
                  className="col-12 h-75"
                ></input>
              </label>

              <label className="col-12">
              Email
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="col-12"
                ></input>
              </label>

              <label className="col-12">
              Password
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="col-12"
                ></input>
              </label>

              
    
          <button className="btn btn-success m-3" type="submit">
          Opret admin user
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpretCreatenewuser;
