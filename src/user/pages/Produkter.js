/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hentAlleproduct } from "../../admin/helpers/APIkald/apikald";

const Produkter = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    hentAlleproduct().then((response) => {
      // Hvis der ikke er en fejl, så put event (fra api) i state
      if (response !== "error") setPost(response);
    });
  }, []);

  let liste = "";
  if (post && post.length) {
    liste = post.map((r) => (
      <div key={r._id} className=" col-12 col-lg-4 m-sm-auto col-12d">
        <Link className="" to={"/Produktdetaljer/" + r._id}>
          <div className="g m-sm-auto m-lg-3">
            <p className="col-12 whitet">{r.category.title}</p>

            <p className="whitet text-center pt-0 pt-lg-4">{r.title}</p>

            <img
              src={"http://localhost:5039/images/product/" + r.productimage}
              className="img col-12 py-3 img"
              alt={r.title}
            />
          </div>
        </Link>
      </div>
    ));
  }

  return (
    <section className="container">
      <a className="anchor" href="false"  id="products"/>
      <div className="row d">
        <div className="col-12 m-sm-0 px-sm-">
          <h2 className="whitet text-center col-12 my-4">PRODUCTS</h2>

          <p className="whitet text-center   ">
            _____________ <i className="fas fa-star"></i> _____________
          </p>
          <div className="row col-12 col-lg-12 m-sm-1 p-sm-0 col-12d">{liste}</div>
        </div>
      </div>
    </section>
  );
};

export default Produkter;
