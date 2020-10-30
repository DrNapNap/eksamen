import React from "react";

import {BarLoader} from 'react-spinners'


const NotFound = () => {
  return <div className="container">
  <div className="row">
      <h2 className=" col-12 text-center my-4 ">HTTP 404
      Page Not Found
  </h2>
    <div className="col-5 m-auto">
    <BarLoader className=" text-center" width="440" color='orange' loading/>
   </div>
    </div>
  </div>;
};

export default NotFound;
