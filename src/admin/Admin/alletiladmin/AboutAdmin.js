import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";


const AboutAdmin = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5039/about/").then((res) => {

      setPost(res.data);
    });
  }, []);

 



  return (
    <section className="container ">
      <div className=" row d">
        <div className="col-12 col-lg-12 m-auto">
          <h3 className="p-4 col-12  col-lg-12 whitet text-center text-uppercase ">
            Admin for About
          </h3>
          <div className="col-12 col-lg-7 text-center m-auto">
        <p className="whitet">Det du ret i:</p>
        <p className="text-uppercase whitet text-break">{post.content1}</p>
        <p className="text-uppercase whitet text-break">{post.content2}</p>
        <Link to={"/admin/AboutRetAbout/" + post._id} className="btn btn-success">Ret About</Link>
</div>
          
        </div>
      </div>
    </section>
  );
};
export default AboutAdmin;
