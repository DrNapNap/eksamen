import React, { useEffect, useState } from "react";
import { hentfooter } from "../../admin/helpers/APIkald/apikald";

const Footer1 = () => {

    const [post, setPost] = useState("");

    useEffect(() => {
      hentfooter().then((response) => {
        if (response !== "error") setPost(response);
      });
    }, []);

  return (
      <div className="container-fluid g whitet">
    <footer className="container">
      <div className="row justify-content-center">
     
          <div className="col-12 col-lg-3 text-center my-5">
<h3 className="text-center text-uppercase  p-1">Location</h3>
<p>{post.location}</p>
          </div>
          <div className="col-12 col-lg-3 text-center my-5">
          <h3 className="text-center text-uppercase ">Around the web</h3>
 <div className="row justify-content-center p-1">

          <i class="fab fa-facebook whe m-2"></i>
          <i class="fab fa-twitter whe m-2"></i>
          <i class="fab fa-invision whe m-2"></i>
          <i class="fas fa-basketball-ball whe m-2"></i>
          </div>
          </div>
          <div className="col-12 col-lg-5 text-center my-5">
              
          <h3 className="text-center text-uppercase col-12 col-lg-10 ">About Boston Gaming</h3>
          <p className="text-break col-12 col-lg-10 text-center">{post.about}</p>
          </div>
     
      </div>
    </footer>
    </div>
  );
};

export default Footer1;
