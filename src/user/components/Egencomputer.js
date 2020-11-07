import React, { useEffect, useState } from "react";
import Egencontactus from "./Egencontactus";

const Egencomputer = () => {
    // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [totald, setTotald] = useState(0);

  useEffect(() => {}, []);

  const test = (e) => {
    setTotal(e.target.value);
  };

  const testD = (e) => {
    setTotald(e.target.value);
  };

  return (
    <div className="container my-5 containerd">
      <div className="row d ">
        <div className="col-12 col-lg-12  my-5">
          <h4 className="text-center text-uppercase whitet">
            Design your own rig
          </h4>

          <p className="whitet text-center   ">
            _____________ <i className="fas fa-star"></i> _____________
          </p>
        </div>
        <div className="col-12 col-lg-6 ">
          <form
            onChange={test}
            className="row col-12 col-lg-12  form-check g whitet m-2"
          >
            <p className="text-uppercase  my-3 footer col-12 col-lg-2 ">cpu</p>
            <div className="col-12 col-lg-8 ">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input
                  id="3"
                  value="1000"
                  className="col-1 "
                  name="cpu"
                  type="radio"
                ></input>
                Core i3-9100F
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input
                  value="1200"
                  id="4"
                  className="col-1 "
                  name="cpu"
                  type="radio"
                ></input>
                Core i5-9400F
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input
                  id="5"
                  value="1500"
                  className="col-1 "
                  name="cpu"
                  type="radio"
                ></input>{" "}
                Core i5-10400
              </label>
            </div>
          </form>

          <form
            onChange={testD}
            className="row col-12  form-check g whitet m-2"
          >
            <p className="text-uppercase  my-3 footer col-12 col-lg-2">
              Motherboard
            </p>
            <div className="col-12 col-lg-10 ">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input
                  id="3"
                  value="3004"
                  className="col-1 "
                  name="cpu"
                  type="radio"
                ></input>
                Gigabyte B365M DS3H Micro ATX LGA1151{" "}
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input
                  id="4"
                  value="4004"
                  className="col-1"
                  name="cpu"
                  type="radio"
                ></input>
                Gigabyte B460M DS3H Micro ATX LGA1200
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input
                  id="5"
                  value="5004"
                  className="col-1"
                  name="cpu"
                  type="radio"
                ></input>{" "}
                Gigabyte B460M DS3H Micro ATX LGA1200
              </label>
            </div>
          </form>

          <form className="row col-12  form-check g whitet m-2">
            <p className="text-uppercase  my-3 footer col-12 col-lg-2">
              Memory
            </p>
            <div className="col-12  col-lg-8">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input id="3" className="col-1" name="cpu" type="radio"></input>
                Team Elite Plus 16 GB (2 x 8 GB) DDR4-2400 CL16
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input id="4" className="col-1" name="cpu" type="radio"></input>
                Team Elite Plus 16 GB (2 x 8 GB) DDR4-2400 CL16
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input id="5" className="col-1" name="cpu" type="radio"></input>{" "}
                G.Skill Aegis 16 GB (2 x 8 GB) DDR4-3000 CL16
              </label>
            </div>
          </form>

          <form className="row col-12  form-check g whitet m-2">
            <p className="text-uppercase  my-3 footer col-12 col-lg-2">
              Storage
            </p>
            <div className="col-12 col-lg-8  ">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input id="3" className="col-1" name="cpu" type="radio"></input>
                Team GX1 480 GB 2.5\
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input id="4" className="col-1" name="cpu" type="radio"></input>
                Mushkin Enhanced Helix-L 1 TB M.2-2280
              </label>
            </div>
          </form>

          <form className="row col-12  form-check g whitet m-2">
            <p className="text-uppercase  my-3 footer col-12 col-lg-2">
              Video Card
            </p>
            <div className="col-12 col-lg-8">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input id="3" className="col-1" name="cpu" type="radio"></input>
                XFX Radeon RX 570 4 GB XXX Edition
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input id="4" className="col-1" name="cpu" type="radio"></input>
                Asus GeForce GTX 1660 SUPER 6 GB DUAL EVO OC
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input id="5" className="col-1" name="cpu" type="radio"></input>{" "}
                Asus GeForce GTX 1660 SUPER 6 GB DUAL EVO OC
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input id="5" className="col-1" name="cpu" type="radio"></input>{" "}
                ASRock Radeon R 5700 XT 8 GB CHALLENGER D OC
              </label>
            </div>
          </form>

          <form className="row col-12  form-check g whitet m-2">
            <p className="text-uppercase  my-3 footer col-12 col-lg-2">Case</p>
            <div className="col-12 col-lg-8 ">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input id="3" className="col-1" name="cpu" type="radio"></input>
                Cooler Master MasterBox Q300L MicroATX Mini Tower
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input id="4" className="col-1" name="cpu" type="radio"></input>
                Cougar MX330-G ATX Mid Tower
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input id="5" className="col-1" name="cpu" type="radio"></input>{" "}
                Corsair 275R Airlow ATX Mid Tower
              </label>
            </div>
          </form>

          <form className="row col-12  form-check g whitet m-2">
            <p className="text-uppercase  my-3 footer col-12 col-lg-2">
              Power Supply
            </p>
            <div className="col-12 col-lg-8 ">
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="3">
                <input id="3" className="col-1" name="cpu" type="radio"></input>
                Corsair CSM (2015) 450 W 80+ Bronze Certified Semi-modular ATX
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="4">
                <input id="4" className="col-1" name="cpu" type="radio"></input>
                Antec NeoECO Gold ZEN 500 W 80+ Gold Certified ATX
              </label>
              <label className="col-12 col-lg-10 my-2 footer" htmlFor="5">
                <input id="5" className="col-1" name="cpu" type="radio"></input>{" "}
                EVGA B5 550 W 80+ Bronze Certified Fully Modular ATX
              </label>
            </div>
          </form>
        </div>

        <div className="col-12 col-lg-6 ">
          <Egencontactus />
        </div>
      </div>
    </div>
  );
};

export default Egencomputer;
