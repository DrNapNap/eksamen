import React, { useState } from "react";
import { sendKontaktbesked } from "../../../admin/helpers/APIkald/apikald";


const Kontakt = () => {
  const [ setstate] = useState();


  const handleBesked = (e) => {
    e.preventDefault();

    sendKontaktbesked(e.target).then((response) => {
      if (response !== "error") {
        setstate(response)
            
         

        console.log(response);
        alert("Din besked er sendt tak" );
        
      }
    });
  };
  

  return (
    <div className="container my-5">
      
    <h2 className="text-center text-uppercase whitet py-3 ">Contact us</h2>

<p className="whitet text-center   ">
       _____________  <i class="fas fa-star"></i>  _____________
     </p>
       
      <div className="row  m-4">
        <div className="col-12 col-lg-8 m-auto">
          <form className="col-12 whitet" onSubmit={handleBesked}>
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

            <label className="col-12">
              Phone Number
              <br />
              <input
                className="col-12 ew"
                type="number"
                name="phonenumber"
                required
              />
            </label>
            <br />

            <label className="col-12">
              Message
              <br />
              <textarea
                className="col-12 ew p-4"
                rows="4"
                name="message"
                required
              ></textarea>
            </label>
            <br />


            <button  type="submit" className="btn btn-dark m-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
