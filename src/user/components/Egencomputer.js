import React, { useState, useEffect } from "react";
import Egencontactus from "./Egencontactus";

const Egencomputer = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  //   const items = [
  //     {
  //       id: 1,
  //       name: "overwatch",
  //       price: 20,
  //     },
  //     {
  //       id: 2,
  //       name: "minecraft",
  //       price: 32,
  //     },
  //     {
  //       id: 3,
  //       name: "fortnite",
  //       price: 51,
  //     },
  //   ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal = cart[i].price;
    }
    setCartTotal(totalVal);
  };

  //   const addToCart = (el) => {
  //       setCart([...cart, el]);
  //   };

  //    const listItems = items.map((el) => (
  //      <div key={el.id}>
  //        {`${el.name}: KR:${el.price}`}
  //        <input type="radio" value="add" onClick={() => addToCart(el)} />
  //       </div>
  //     ));

  return (
    <div className="container my-5">
      <div className=" whitet row col-12">
       
        <h3 className="col-12 my-4 text-uppercase text-center">
          design your own rig!
        </h3>
        <span className="col-12 text-center my-5">
          ______________ ____________
        </span>

        <h5 className="col-6 text-center ">Pick your gear</h5>

        <h5 className="col-6 text-center ">Summary</h5>

        <div className="col-6 g    form-group">
          <form className="row col-12  form-check">
            <p className="text-uppercase  my-3">cpu</p>
            <div className="col-8">
              <label className="col-10 my-2" htmlFor="3">
                Core i3-9100F
                <input id="3" className="col-3" name="cpu" type="radio"></input>
              </label>
              <label className="col-10 my-2" htmlFor="4">
                Core i3-9100F
                <input id="4" className="col-3" name="cpu" type="radio"></input>
              </label>
              <label className="col-10 my-2" htmlFor="5">
                Core i3-9100F
                <input id="5" className="col-3" name="cpu" type="radio"></input>
              </label>
              <label className="col-10 my-2" htmlFor="6">
                Core i3-9100F
                <input id="6" className="col-3" name="cpu" type="radio"></input>
              </label>
            </div>
          </form>
        </div>

<Egencontactus/>

      </div>
    </div>
  );
};

export default Egencomputer;
