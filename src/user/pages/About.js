/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "reactn";
import { hentabout } from "../../admin/helpers/APIkald/apikald";

const About = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    hentabout().then((response) => {
      if (response !== "error") setPost(response);
    });
  }, []);

  return (
    <div className="container-fluid about ">
    <a className="anchor" id="aboutus"></a>
      <section className="row justify-content-center">
        <div className="container">
          <div className="col-12 m-1">
            <h2 className="text-center text-uppercase whitet py-3">About</h2>

       <p className="whitet text-center   ">
              _____________  <i class="fas fa-star"></i>  _____________
            </p>

            <div className="row justify-content-center whitet py-5">            

              <section className="col-12 col-lg-3 ">
                <p className="text-break">{post.content2}</p>
              </section>
              <section className="col-12 col-lg-4">
                <p className="text-break">{post.content1}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
