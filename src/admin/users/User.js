import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useGlobal } from "reactn";

function User() {
  const [users_id] = useGlobal("users_id");

  const history = useHistory();

  return (
    <section className="container ">
      <div className="row d">          <h1 className="whitet text-center text-uppercase py-5 col-12 d">
            Admin Users
          </h1>
        <div className="col-12 col-lg-3">


            <Link
              className="btn-secondary btn col-12 col-lg-12 m-2 "
              to={"/admin/userRet/" + users_id.users_id}
            >
              Switch password, email
            </Link>
     
            <Link
              className="btn-secondary btn col-12 col-lg-12 m-2 "
              to={"/admin/userDelete/" + users_id.users_id}
            >
              Delete "profile"
            </Link>
     
            <Link
              className="btn-secondary btn col-12 col-lg-12 m-2"
              to={"/admin/userGreaten/" + users_id.users_id}
            >
              Create new users
            </Link>


            <button
        className="col-12 col-lg-12  btn btn-success m-2"
        onClick={() => {
          history.push("/admin");
        }}
      >
        Til admin
      </button>
            </div>
        </div>
    

    </section>
  );
}
export default User;
