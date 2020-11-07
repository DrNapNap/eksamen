import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import {  hentAlleNewssubscription } from "../../helpers/APIkald/apikald";

function AdminDeleteNewssub() {
  const { ec } = useParams();
  const history = useHistory();
  const [gd, setGd] = useState("");

  const handleSletE = (e) => {
    axios
      .delete("http://localhost:5039/newssubscription/admin/" + ec, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    hentAlleNewssubscription(ec).then((res) => {
      if (res !== "err") setGd(res);
    });
  }, [ec]);

  return (
    <div className="col-12 col-lg-5 m-auto">
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title">
            Er du sikker på at du vil slette denne newssubscription:
          </h3>
          <h6>Text du slet : {gd.name}</h6>
          <h6>Text du slet : {gd.email}</h6>

          <button
            className="btn btn-success mr-3"
            onClick={() => {
              history.push("/admin");
            }}
          >
            Fortryd
          </button>
          <button className="btn btn-danger" onClick={handleSletE}>
            SLET
          </button>
        </div>
      </div>
    </div>
  );
}
export default AdminDeleteNewssub;
