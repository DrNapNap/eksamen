import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";

const Slider = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5039/slider").then((res) => {
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

          <div className="col-12 col-lg-12  my-3 ">
            Content :{" "}
            {parse(
              p.alttext.length > 150
                ? p.alttext.substr(0, 150) + "...."
                : p.alttext
            )}
          </div>

          <div className=" col-12 col-lg-5">
            <img
              className="img-fluid"
              src={"http://localhost:5039/images/slider/" + p.sliderimage}
              alt={p.productimage}
            ></img>
          </div>
          <br />
          <div className="col-12">


            <Link
              className="col-12 col-lg-1 btn btn-danger m-3"
              to={"/admin/AdmindeleteForSlider/" + p._id}
            >
              SLET
            </Link>
          </div>
          <br />
        </div>
      );
    });
  } else {
    return <h1>ingenpost</h1>;
  }
  return (
    <section className="container ">
      <div className=" row ">
        <div className="col-12 col-lg-12 m-auto">
          <h3 className="p-4 col-12  col-lg-12 whitet text-center text-uppercase ">
            Admin for slider
          </h3>
          <Link
            to={"/admin/AdminRetForSlider"}
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
export default Slider;
