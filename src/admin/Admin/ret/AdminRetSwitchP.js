import React, { useState, useEffect } from "react";

import { hentUduser, retUser } from "../../helpers/APIkald/apikald";

import { BarLoader } from "react-spinners";

import { useHistory } from "react-router-dom";
import { useGlobal } from "reactn";

const AdminRetSwitchP = (props) => {
  const [users_id] = useGlobal("users_id");

  const ID = users_id.users_id;

  const history = useHistory();

  const [user, setUser] = useState();

  useEffect(() => {
    hentUduser(ID).then((res) => {
      if (res !== "err") setUser(res);
    });
  }, [ID]);

  const handleSubmit = (e) => {
    e.preventDefault();

    retUser(e.target, ID).then((res) => {
      history.push("/admin");
    });
  };

  return (
    <div className="container-fluid g">
      <div className="container whitet ">
        {user ? (
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="col-12">
                Name
                <input
                  className="col-12"
                  name="name"
                  type="text"
                  placeholder="Title"
                  defaultValue={user.name}
                />
              </label>

              <label className="col-12">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="col-12"
                  defaultValue={user.email}
                ></input>
              </label>

              <label className="col-12">
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="col-12"
                  defaultValue={user.password}
                ></input>
              </label>

              <button
                type="button"
                onClick={() => {
                  history.push("/admin");
                }}
                className="col-1 m-3  btn btn-success"
              >
                Fortryd
              </button>
              <button type="submit" className="col-2 m-3 btn btn-danger">
                Ret user
              </button>
            </div>
          </form>
        ) : (
          <BarLoader
            className=" text-center"
            width="440"
            color="orange"
            loading
          />
        )}
      </div>
    </div>
  );
};

export default AdminRetSwitchP;
