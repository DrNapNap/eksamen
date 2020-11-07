import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";


import { hentUdvalgtProduct } from "../../helpers/APIkald/apikald";

function AdmindeleteProduct() {
  const { ec } = useParams();
  const history = useHistory();
  const [gd, setGd] = useState();

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
      if (res !== "err") setGd(res);
    });
  }, [ec]);


  

  return (
    <div className="col-12 m-auto col-lg-5">
      <div className="card ">
        <div className="card-body">

          {gd != null ?
          <>
          <h3 className="card-title py-1">
            Er du sikker på at du vil slette denne product:
          </h3>
           
          {parse (gd.title)}
           {parse (gd.content)}
           </>
: "Loading..." } 
          <button
            className="btn btn-success mr-3 col-12 m-2"
            onClick={() => {
              history.push("/admin");
            }}
          >
            Fortryd
          </button>
          <button className="btn btn-danger col-12 m-2" onClick={handleSletE}>
            SLET
          </button>
        </div>
      </div>
    </div>
  );
}
export default AdmindeleteProduct;
