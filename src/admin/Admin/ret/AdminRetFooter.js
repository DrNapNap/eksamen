import React, { useState, useEffect } from "react";

import { retFooter, hentfooter } from "../../helpers/APIkald/apikald";

import { BarLoader } from "react-spinners";

import { useHistory } from "react-router-dom";

const AdminRetFooter = (props) => {

  const history = useHistory();

  const [footer, setFooter] = useState();

  useEffect(() => {
    hentfooter().then((res) => {
      if (res !== "err") setFooter(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    retFooter(e.target).then((res) => {
      history.push("/admin");
    });
  };

  return (
    <div className="container-fluid ">
      <div className="container whitet col-12 col-lg-6 ">
        <h2 className="text-center text-uppercase py-4">Ret Footer</h2>
        {footer ? (
          <form className="row d" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="col-12">
              Ret about 
                <textarea
                  name="about"
                  id=""
                  placeholder="about"
                  className="col-12 h-75"
                  defaultValue={footer.about}
                ></textarea>
              </label>

              <label className="col-12">
                Ret location
                <textarea
                  name="location"
                  id=""
                  placeholder="location"
                  className="col-12"
                  defaultValue={footer.location}
                ></textarea>
              </label>

              <div></div>
              <div className="m-auto">

                <button
            className="col-12 m-2 col-lg-2  btn btn-success"
            onClick={() => {
              history.push("/admin");
            }}
          >
            Fortryd
          </button>

                <button type="submit" className="col-12 m-2 m-lg-4 col-lg-2  btn btn-danger">
                  Ret footer
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

export default AdminRetFooter;
