import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "reactn";



function AdminHome() {
  const [users_id] = useGlobal("users_id");

  console.log(users_id);

  return (
    <section className="container">



      
      <div className="row">
        <div className="col-12">
          <h1 className="whitet text-center text-uppercase py-5">
            Admin panel
          </h1>




          <div className="col-12 m-lg-4  m-2 ">
            <Link
              className="btn-secondary btn col-12 col-lg-3"
              to="/admin/Product/"
            >
              Ret og Opret, Delete Product
            </Link>
          </div>
          <div className="col-12 m-lg-4 m-2  text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-3 m-auto"
              to="/admin/slider/"
            >
              Opret, Delete Slider
            </Link>
          </div>
          <div className="col-12 m-lg-4  m-2 text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-3 m-auto"
              to="/admin/AboutAdmin/"
            >
              Ret, About
            </Link>
          </div>
          <div className="col-12 m-lg-4  m-2 text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-3 m-auto"
              to="/admin/AdminFooter"
            >
              Ret, Footer
            </Link>
          </div>

          <div className="col-12 m-lg-4 m-2  text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-3 m-auto"
              to="/admin/AdminContact/"
            >
              Delete, Contact
            </Link>
          </div>
          <div className="col-12 m-lg-4 m-2 text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-3 m-auto"
              to="/admin/Adminnewsubscrip/"
            >
              Delete, newssubscription
            </Link>
          </div>
        </div>
        </div>
      
    </section>
  );
}
export default AdminHome;
