import React from "react";
import About from "../About";
import Contactus from "../Contactus";
import Design from "../Design";
import Produkter from "../Produkter";
import Tilmeldnyhedsbrev from "../Tilmeldnyhedsbrev";


const Pages = () => {

return(
    <>
        <Produkter/>
        <Design/>
        <Tilmeldnyhedsbrev/>
        <About/>
        
        <Contactus/>
    </>
)

};

export default Pages;
