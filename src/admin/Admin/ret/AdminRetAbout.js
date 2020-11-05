import React, { useState, useEffect } from "react";

import { retabout, hentabout } from "../../helpers/APIkald/apikald";

import { BarLoader } from "react-spinners";

import { useHistory } from "react-router-dom";

const AdminRetAbout = (props) => {

  const history = useHistory();

  const [about, setAbout] = useState();

  useEffect(() => {
    hentabout().then((res) => {
      if (res !== "err") setAbout(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    retabout(e.target).then((res) => {
      history.push("/admin/AboutAdmin/");
    });
  };

  return (
    <div className="container-fluid ">
      <div className="container whitet col-6 ">
        <h2 className="text-center text-uppercase py-4">Ret About</h2>
        {about ? (
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="col-12">
                Content1
                <textarea
                  name="content1"
                  id="txtBeskrivelse"
                  placeholder="Content1"
                  className="col-12 h-75"
                  defaultValue={about.content1}
                ></textarea>
              </label>

              <label className="col-12">
                Content2
                <textarea
                  name="content2"
                  id="txtBeskrivelse"
                  placeholder="Content2"
                  className="col-12"
                  defaultValue={about.content1}
                ></textarea>
              </label>

              <div></div>
              <div className="m-auto">

                <button
            className="col-2 m-2  btn btn-success"
            onClick={() => {
              history.push("/admin/AboutAdmin/");
            }}
          >
            Fortryd
          </button>

                <button type="submit" className="col-2 m-4  btn btn-danger">
                  Ret About
                </button>
              </div>
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

export default AdminRetAbout;
