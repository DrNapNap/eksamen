/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { loginb } from "../helpers/APIkald/apikald";
import { useHistory } from "react-router-dom";

import { useGlobal } from "reactn";

const Login = () => {
  const [besked, setBesked] = useState();

  const [global, setglobal] = useGlobal("loggetind");
  const [usid, setusid] = useGlobal("users_id");
  

  const h = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    loginb(e.target).then((res1) => {
      if (res1 !== "error") {
        setglobal(true);
       setusid(res1)
        h.push("/admin");
      } else {
        console.log(res1);
        setBesked("(LOGIN) gik galt");
      }
    });
  };


  return (
    <div className="container-fluid">
      <section className="row m-auto">
        <h1 className="text-center col-12 mt-3 whitet">Login</h1>

        <h6 className="col-12 text-center">{besked}</h6>

        <form className=" col-12 m-auto" onSubmit={handleLogin}>
          <br />
          <div className="text-center">
            <input
              className="col-12 col-lg-3 col-md-10 "
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="text-center">
            <input
              className="col-12 col-lg-3 col-md-10 mt-3"
              type="password"
              name="password"
              required
              autoComplete="true"
              placeholder="password"
            />
          </div>
          <div className="text-center mt-3">
            <button className="col-3 btn btn-dark" type="submit">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
