import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useGlobal } from "reactn";

function User() {
  const [users_id] = useGlobal("users_id");

  const history = useHistory()


  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="whitet text-center text-uppercase py-5">
            Admin Users
          </h1>

          <div className="col-12 m-lg-4  m-2 ">
            <Link
              className="btn-secondary btn col-12 col-lg-3"
              to={"/admin/userRet/" + users_id.users_id}
            >
              Switch password, email
            </Link>
          </div>
          <div className="col-12 m-lg-4 m-2  text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-3 m-auto"
              to={"/admin/userDelete/" + users_id.users_id}
            >
            Delete "profile"
            </Link>
          </div>
          <div className="col-6 m-lg-4  m-2 text-uppercase">
            <Link
              className="btn-secondary btn col-12 col-lg-6 m-auto"
              to={"/admin/userGreaten/" + users_id.users_id}
            >
            Create new users
            </Link>


          </div>            

        </div>
      </div>                     <button
            className="col-5   btn btn-success"
            onClick={() => {
              history.push("/admin");
            }}
          >
            Til admin
          </button> 
    </section>
  );
}
export default User;
