import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";

const Admin = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5021/event").then((res) => {
      const p1 = res.data.slice(0, 80);

      setPost(p1);
    });
  }, []);

  let postliste = "";

  if (post.length > 0) {
    postliste = post.map((p) => {
      return (
        <div className="" key={p._id}>
          <p className="col-12 col-lg-12">ID : {p._id} </p>
          <div className="m-3">
            {parse(
              p.beskrivelse.length > 150
                ? p.beskrivelse.substr(0, 150) + "...."
                : p.beskrivelse
            )}
          </div>
          <p className="col-12 col-lg-12  my-3 ">
            beskrivelse :{" "}
            {p.titel.length > 150 ? p.titel.substr(0, 150) + "...." : p.titel}
          </p>

          <p className="col-12 my-3 ">dato : {p.dato}</p>
          <p className="col-12  my-3 ">distance : {p.distance / 1000} KM</p>
          <p className="col-12  my-3 ">titel : {p.pris}</p>
          <div className=" col-12 col-lg-5">
            <img
              className="img-fluid"
              src={"http://localhost:5021/images/events/" + p.billede}
              alt={p.billede}
            ></img>
          </div>
          <br />
          <div className="col-12">
            <Link
              className="col-12 col-lg-1 my-2 btn btn-success "
              to={"/admin/AdminRet/" + p._id}
            >
              RET
            </Link>

            <Link
              className="col-12 col-lg-1 btn btn-danger "
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
    return <h1>ingenpost</h1>;
  }
  return (
    <section className="container-fluid ">
      <div className=" row">
        <div className="col-12 col-lg-10 p-0 m-0">
          <h3 className="p-4 col-12 m-auto col-lg-12">Admin</h3>
          <Link
            to={"/admin/opret"}
            className="col-12 col-lg-2 btn btn-success my-3"
          >
            Opret ny events
          </Link>

          {postliste}
        </div>
      </div>
    </section>
  );
};
export default Admin;
