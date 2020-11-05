import React, { useState, useEffect } from "react";

import {
  ret,
  hentAllecategory,
  hentUdvalgtProduct,
} from "../../helpers/APIkald/apikald";

import { BarLoader } from "react-spinners";

import ImageUploader from "react-images-upload";

import { useHistory } from "react-router-dom";

const AdminRet = (props) => {
  const ID = props.match.params.ec;

  const [category, setCategory] = useState();
  const history = useHistory();

  const [product, setProduct] = useState();

  useEffect(() => {
    hentAllecategory().then((res) => {
      if (res !== "error") setCategory(res);
    });

    hentUdvalgtProduct(ID).then((res) => {
      if (res !== "err") setProduct(res);
    });
  }, [ID]);

  const handleSubmit = (e) => {
    e.preventDefault();

    ret(e.target, ID).then((res) => {
      history.push("/admin");
    });
  };

  let liste = "";
  if (category && category.length) {
    liste = category.map((r) => (
      <option value={r._id} key={r._id}>
        {r.title}
      </option>
    ));
  }

  return (
    <div className="container-fluid g">
      <div className="container whitet ">
        {product ? (
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="col-12">
                Titel
                <input
                  className="col-12"
                  name="title"
                  id="inpTitel"
                  type="text"
                  placeholder="Title"
                  defaultValue={product.title}
                />
              </label>

              <label className="col-12">
                Content
                <textarea
                  name="content"
                  id="txtBeskrivelse"
                  placeholder="content"
                  className="col-12"
                  defaultValue={product.content}
                ></textarea>
              </label>
              <div className="col-12">
                <select
                  className="col-4"
                  defaultValue={product._id}
                  name="category"
                >
                  {liste}
                </select>
              </div>
              <div>
                <ImageUploader
                  name="billede"
                  withIcon={true}
                  buttonText="Vælg et billede"
                  withLabel={true}
                  imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                  singleImage={true}
                  withPreview={true}
                  required={true}
                />
              </div>
              <div className="col-6 m-auto">
                <img
                  className="img-fluid col-12 "
                  src={
                    "http://localhost:5039/images/product/" +
                    product.productimage
                  }
                  alt=""
                />
              </div>
              <br />

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
                Ret Product
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

export default AdminRet;
