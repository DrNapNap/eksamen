import React from "react";

const Egencontactus = () => {

  return (

        <div className="col-6">
          <div className="col-12 row white total textb m-2">
            <p className="col-11 my-3 ">Total</p>{" "}
            <div className="col-1 my-3">$0</div>
          </div>

          <div className="row">
            <div className="col-12 ">
              <h5 className="col-12 ">Contact us!</h5>

            </div>             
             <form className="row form-group ">
                
                <input placeholder="First name"  className="m-1 col-6 form-control" type="text" />
                <input placeholder="Last name" className="m-1 col-6 form-control" type="text" />
                <input placeholder="Email" className="m-1 col-12 form-control" type="email" />
                <button type="submit" className="btn btn-dark ">Send</button>
              </form>
          </div>
        </div>
  );
};

export default Egencontactus;
