import React, { useState } from "react";
import { sendKontaktbesked } from "../../../components/helpers/APIkald/apikald";


const Kontakt = () => {
  const [state, setstate] = useState();


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
  

  console.log(state);

  return (
    <div className="container">

       
      <div className="row  m-4">
        <div className="col-8 m-auto">
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
