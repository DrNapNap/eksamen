import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Produktdetaljer = () => {
  const [post, setPost] = useState({});
  const { idd } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5039/product/" + idd)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idd]);

  return (
    <section className="container justify-content-center  text-center whitet py-5 my-3">
      <div className="row">
        <div className="col-12">
          <h2 className="py-4">{post.title}</h2>

          <div className="row">
            <img
              className="col-10 col-lg-5 img-fluid"
              src={"http://localhost:5039/images/product/" + post.productimage}
              alt={post.title}
            />

            <p className="col-12  col-lg-6 py-3">{post.content}</p>

            <p className="col-12 col-lg-8 py-4">Pris 300KR</p>
            <button className=" col-12 col-lg-2 m-auto  btn btn-dark">Køb NU</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produktdetaljer;
