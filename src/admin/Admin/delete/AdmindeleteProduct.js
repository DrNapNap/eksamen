import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";
import { hentUdvalgtProduct } from "../../helpers/APIkald/apikald";

function Admindelete() {
  const { ec } = useParams();
  const history = useHistory();
  const [gd, setProduct] = useState("");

  const handleSletE = (e) => {
    axios
      .delete("http://localhost:5039/product/admin/" + ec, {
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
    hentUdvalgtProduct(ec).then((res) => {
      if (res !== "err") setProduct(res);
    });
  }, [ec]);

  console.log(ec);

  

  return (
    <div className="col-5 m-auto">
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title">
            Er du sikker på at du vil slette denne product:
          </h3>
          <h4>{gd.title}</h4>

          <p>{gd.content}</p>

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
export default Admindelete;
