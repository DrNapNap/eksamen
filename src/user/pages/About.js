import React from "react";
import { useState, useEffect } from "reactn";
import { hentabout } from "../../components/helpers/APIkald/apikald";

const About = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    hentabout().then((response) => {
      if (response !== "error") setPost(response);
    });
  }, []);

  return (
    <div className="container-fluid about ">
      <section className="row justify-content-center">
        <div className="container">
          <div className="col-12 m-1">
            <h2 className="text-center text-uppercase whitet py-4">About</h2>

            <div className="row justify-content-center whitet py-5">            
              <span className="whitet text-center col-12 m-auto py-5">
              _____________ _____________
            </span>
              <section className="col-3 ">
                <p className="text-break">{post.content2}</p>
              </section>
              <section className="col-4">
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
