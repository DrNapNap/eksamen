import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";

const AdminContact = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5039/contact/admin").then((res) => {
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
            Name :{" "}
            {parse(
              p.name.length > 150 ? p.name.substr(0, 150) + "...." : p.name
            )}
          </div>
          <div className="col-12 col-lg-12  my-3 ">
            Email :{" "}
            {parse(
              p.email.length > 150 ? p.email.substr(0, 150) + "...." : p.email
            )}
          </div>
          <p className="col-12 my-3 ">Phonenumber : {p.phonenumber}</p>

          <div className="col-12 col-lg-12  my-3 ">
            
            <p className="col-12 my-3 p-0">Message:   {p.message}</p>
          </div>
          <br />
          <div className="col-12">


            <Link
              className="col-12 col-lg-1 btn btn-danger m-3"
              to={"/admin/AdminDeleteContact/" + p._id}
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
            Admin for Contact
          </h3>


          {postliste}
        </div>
      </div>
    </section>
  );
};
export default AdminContact;
