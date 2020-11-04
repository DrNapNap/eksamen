import React, { useState, useEffect } from "react";

import {
  ret,
  hentAllecategory,
  hentUdvalgtProduct,
} from "../../helpers/APIkald/apikald";

import { BarLoader } from "react-spinners";

import ImageUploader from "react-images-upload";

import { useHistory } from "react-router-dom";

const AdminRetAbout = (props) => {
  const ID = props.match.params.ec;

  const history = useHistory();

  const [about, setAbout] = useState();

  useEffect(() => {


    hentUdvalgtProduct(ID).then((res) => {
      if (res !== "err") setAbout(res);
    });
  }, [ID]);

  const handleSubmit = (e) => {
    e.preventDefault();

    ret(e.target, ID).then((res) => {
      history.push("/admin");
    });
  };



  return (
    <div className="container-fluid g">
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
                  placeholder="content1"
                  className="col-12"
                  defaultValue={about.content1}
                ></textarea>
              </label>


              <label className="col-12">
              content2
                <textarea
                  name="content2"
                  id="txtBeskrivelse"
                  placeholder="content2"
                  className="col-12"
                  defaultValue={about.content1}
                ></textarea>
              </label>

      
              <div>

              </div>
<div className="m-auto">
              <button type="button" className="col-2 m-2  btn btn-success">
                Fortryd
              </button>
              <button type="submit" className="col-2 m-4  btn btn-danger">
                Ret About
              </button>
            </div></div>
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
