import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { soeg } from "../../../admin/helpers/APIkald/apikald";

const Soege = (props) => {
  let soegtpaa = props.match.params.soegeordet;

  const [sog, setsog] = useState();

  useEffect(() => {
    soeg(soegtpaa).then((response) => {
      console.log(response);

      if (response !== "error") setsog(response);
    });
  }, [soegtpaa]);

  let liste = <h2 className="whitet text-center"> Loader ...</h2>;

  if (sog && sog.length) {
    liste = sog.map((e) => (
      <div key={e._id} className="whitet m-auto col-12 ">
        <h5 className="col-12 text-center  py-1 text-break">
          Title: {e.title}
        </h5>
        <p className="col-6 m-auto text-center py-3 text-break ">
          Content: {e.content}{" "}
        </p>
        <p className="col-10 m-auto text-center pb-4 text-break">
          Category: {e.category.title}
        </p>
        <div className="col-6 m-auto ">
          <img
            alt={e.title}
            className="img-fluid col-12 m-auto p-3"
            src={"http://localhost:5039/images/product/" + e.productimage}
          ></img>
          <div className="col-6 m-auto p-3">
          <Link
            className="whitet btn btn-secondary col-12 m-auto "
            to={"/Produktdetaljer/" + e._id}
          >
            Læs mere
          </Link></div>
        </div>
      </div>
    ));
  }

  return (
    <div className="container">
      <div className="row ">
        <h1 className="text-center col-12 py-5 whitet text-uppercase">
          Søgeresultat
        </h1>
        <div className="m-5">{liste}</div>
      </div>
    </div>
  );
};

export default Soege;
