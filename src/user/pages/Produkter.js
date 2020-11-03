import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hentAlleproduct } from "../../components/helpers/APIkald/apikald";

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
      <div key={r._id}  className=" col-4"><Link className="" to={"/Produktdetaljer/" + r._id}>
        <div className="g m-3">
          <p className="col-12 whitet">{r.category.title}</p>

          <p className="whitet text-center pt-4">{r.title}</p>

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
      <div className="row">
        <div className="col-12">
          <h2 className="whitet text-center col-12 my-5">PRODUCTS</h2>

          <div className="row col-12">{liste}</div>
        </div>
      </div>
    </section>
  );
};

export default Produkter;
