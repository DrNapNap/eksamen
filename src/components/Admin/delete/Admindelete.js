import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function Admindelete() {

  const { ec } = useParams();
  const history = useHistory();
  const [gd, setg] = useState({});


  const handleSletE = (e) => {
  axios
      .delete("http://localhost:5021/event/admin/" + ec , {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        history.push("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  
  useEffect(() => {
    axios.get("http://localhost:5021/event/" + ec).then((res) => {
  

      setg(res.data);
    });
  }, [ec]);


  return (
    <div className="col-5 m-auto">
     
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title">
            Er du sikker på at du vil slette denne Event:
          </h3>
          <h4>{gd.titel}</h4>
          <p>{gd.beskrivelse}</p>
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
