import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";


const Adminnewsubscrip = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5039/newssubscription/admin"
    , { withCredentials: true }
    ).then((res) => {

      setPost(res.data);
    });
  }, []);

  let postliste = "";

  if (post.length > 0) {
    postliste = post.map((p) => {
      return (
        <div className="whitet " key={p._id}>
          <p className="col-12 col-lg-12">ID : {p._id} </p>

          <p className="col-12 my-3 ">Name: {p.name}</p>

          <div className="col-12 col-lg-12  my-3 ">
            
            <p className="col-12 my-3 p-0">Email:   {p.email}</p>
          </div>
          <br />
          <div className="col-12">


            <Link
              className="col-12 col-lg-1 btn btn-danger m-3"
              to={"/admin/Adminnewsubscripd/" + p._id}
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
      <div className=" row d">
        <div className="col-12 col-lg-12">
          <h3 className="p-4 col-12 text-uppercase text-center col-lg-12 whitet">
            Admin for subscip
          </h3>


          {postliste}
        </div>
      </div>
    </section>
  );
};
export default Adminnewsubscrip;
