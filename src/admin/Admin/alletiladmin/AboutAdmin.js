import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";

const AboutAdmin = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5039/about/").then((res) => {

      setPost(res.data);
    });
  }, []);

 



  return (
    <section className="container ">
      <div className=" row ">
        <div className="col-12 col-lg-12 m-auto">
          <h3 className="p-4 col-12  col-lg-12 whitet text-center text-uppercase ">
            Admin for slider
          </h3>
          <div className="col-4 text-center m-auto">
        <p className="text-uppercase whitet">{post.content1}</p>
        <Link to={"/admin/AboutRetAbout/" + post._id} className="btn btn-success">dwa</Link>
</div>
          
        </div>
      </div>
    </section>
  );
};
export default AboutAdmin;
