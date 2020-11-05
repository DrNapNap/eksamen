import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { hentUdslider } from "../../helpers/APIkald/apikald";

function AdminRetSlider() {
  const { ec } = useParams();
  const history = useHistory();
  const [gd, setProduct] = useState("");

  const handleSletE = (e) => {
    axios
      .delete("http://localhost:5039/slider/admin/" + ec, {
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
    hentUdslider(ec).then((res) => {
      if (res !== "err") setProduct(res);
    });
  }, [ec]);


  

  return (
    <div className="col-5 m-auto">
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title">
            Er du sikker på at du vil slette denne slider:
          </h3>
          <h6>Text du slet : {gd.alttext}</h6>

          <div className=" col-12 col-lg-12 m-auto p-2">
            <img
              className="img-fluid"
              src={"http://localhost:5039/images/slider/" + gd.sliderimage}
              alt={gd.sliderimage}
            ></img>
          </div>

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
export default AdminRetSlider;
