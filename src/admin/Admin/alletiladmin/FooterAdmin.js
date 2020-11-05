import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {  hentfooter } from "../../helpers/APIkald/apikald";


const FooterAdmin = (props) => {
  const [post, setPost] = useState({});


  useEffect(() => {
    hentfooter().then((res) => {
      if (res !== "err") setPost(res);
    });
  }, []);
 



  return (
    <section className="container ">
      <div className=" row ">
        <div className="col-12 col-lg-12 m-auto">
          <h3 className="p-4 col-12  col-lg-12 whitet text-center text-uppercase ">
            Admin for Footer
          </h3>
          <div className="col-7 text-center m-auto">
        <p className="whitet">Det du ret i:</p>
        <p className="text-uppercase whitet text-break">{post.about}</p>
        <p className="text-uppercase whitet text-break">{post.location}</p>
        <Link to={"/admin/AdminFooterRet/" + post._id} className="btn btn-success">Ret Footer</Link>
</div>
          
        </div>
      </div>
    </section>
  );
};
export default FooterAdmin;
