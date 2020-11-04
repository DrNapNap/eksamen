import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function AdminHome() {
  const { ec } = useParams();
  const history = useHistory();
  const [gd, setProduct] = useState("");

  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="whitet text-center text-uppercase py-5">
            Admin panel
          </h1>
<div className="col-12 m-2 ">
          <Link className="btn-success btn col-3" to="/admin/Product/">
            Ret og Opret, Delete Product
          </Link></div>
          <div className="col-12 m-2 text-uppercase">
          <Link className="btn-success btn col-3 m-auto" to="/admin/slider/">
             Opret, Delete Slider
          </Link></div>
          <div className="col-12 m-2 text-uppercase">
          <Link className="btn-success btn col-3 m-auto" to="/admin/AboutAdmin/">
             Ret, About
          </Link></div>
        </div>
      </div>
    </section>
  );
}
export default AdminHome;
