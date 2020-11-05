import React  from "react";

const Egencomputer = () => {
  return (
    <div className="row col-12 ">
        <div className="col-12">
       <div className="col-12 row white total textb m-auto">
        <p className="col-11  my-1 ">Total</p>
        <div className="col-1 my-1">$0</div>
      </div> 
<form >
      <div className="form-group row m-auto">
            <h4 className="col-12 m-2  whitet">Contact us!</h4>


        
        <div className="col-12 col-lg-6 my-1">
    <input type="text" className="form-control col-12 g" placeholder="First name" /></div>
    <div className="col-6 my-1 col-lg-6">
    <input type="text" className="form-control col-12 g" placeholder="Last name"  /></div>
    <div className="col-12">
      <input type="email" className="form-control col-12 g pl-3 "  placeholder="email" /> 
    
      <button type="submit" className="btn btn-dark mt-2">Send</button>
</div>
  </div>
</form>
      
      </div>
    </div>
  );
};

export default Egencomputer;
