import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";

const AdminProduct = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5039/product").then((res) => {
      const p1 = res.data.slice(0, 80);

      setPost(p1);
    });
  }, []);

  let postliste = "";

  if (post.length > 0) {
    postliste = post.map((p) => {
      return (
        <div className="whitet " key={p._id}>
          <p className="col-12 col-lg-12">ID : {p._id} </p>
          <div className="m-3 col-12">
            {parse(
              p.title.length > 150 ? p.title.substr(0, 150) + "...." : p.title
            )}
          </div>
          <div className="col-12 col-lg-12  my-3 ">
            Content :{" "}
            {parse(
              p.content.length > 150
                ? p.content.substr(0, 150) + "...."
                : p.content
            )}
          </div>
          <p className="col-12 my-3 ">Category : {p.category.title}</p>

          <div className=" col-12 col-lg-5">
            <img
              className="img-fluid"
              src={"http://localhost:5039/images/product/" + p.productimage}
              alt={p.productimage}
            ></img>
          </div>
          <br />
          <div className="col-12">
            <Link
              className="col-12 col-lg-1 my-2 btn btn-success m-3 "
              to={"/admin/AdminRet/" + p._id}
            >
              RET
            </Link>

            <Link
              className="col-12 col-lg-1 btn btn-danger m-3"
              to={"/admin/Admindelete/" + p._id}
            >
              SLET
            </Link>
          </div>
          <br />
        </div>
      );
    });
  } else {
    return <h1 className="whitet">ingenpost</h1>;
  }
  return (
    <section className="container ">
      <div className=" row">
        <div className="col-12 col-lg-12">
          <h3 className="p-4 col-12 text-uppercase text-center col-lg-12 whitet">
            Admin for Product
          </h3>
          <Link
            to={"/admin/opret"}
            className="col-12 col-lg-2 btn btn-success m-3 "
          >
            Opret ny product
          </Link>

          {postliste}
        </div>
      </div>
    </section>
  );
};
export default AdminProduct;
