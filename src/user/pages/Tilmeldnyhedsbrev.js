import React, { useState } from "react";
import { sendNewsSubscription } from "../../admin/helpers/APIkald/apikald";

const Tilmeldnyhedsbrev = () => {
  const [state, setstate] = useState();

  const handleBesked = (e) => {
    e.preventDefault();

    sendNewsSubscription(e.target).then((response) => {
      if (response !== "error") {
        console.log(response);
        setstate("You are subscribed to the newsletter Ty");
      }
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-uppercase whitet py-3 ">
        sign up for newsletter
      </h2>

      <p className="whitet text-center   ">
        _____________ <i class="fas fa-star"></i> _____________
      </p>

      <div className="row  m-4">
        <div className="col-12 col-lg-8 m-auto">
          <form className="col-12 whitet" onSubmit={handleBesked}>
             <p className="col-12 text-center">{state}</p> 
            <label className="col-12">
              Navn
              <br />
              <input
                className="col-12 ew"
                type="text"
                name="name"
                placeholder=""
                required
              />
            </label>
            <br />

            <label className="col-12">
              Email Address
              <br />
              <input className="col-12 ew" type="email" name="email" required />
            </label>
            <br />

            <button type="submit" className="btn btn-dark m-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tilmeldnyhedsbrev;
