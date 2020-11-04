import React, { useEffect, useState } from "react";
import { hentAlleslider } from "../../admin/helpers/APIkald/apikald";



const Hedder = () => {
  const [post, setPost] = useState("");


  
  useEffect(() => {

    hentAlleslider().then(response => {

        // Hvis der ikke er en fejl, så put event (fra api) i state
        if (response !== "error") setPost(response)
    })

}, [])

let liste = "";
if (post && post.length) {

    liste = post.map((r,i) => (
      
    <div key={r._id} className={"carousel-item " + (i === 0 ? "active" : "")}>
      <img src={"http://localhost:5039/images/slider/" + r.sliderimage} className="d-block w-100  h-s__img " alt={r.alttext}/>
      <div className="carousel-caption">
        <div className="black col-6 m-auto ">
        <h2 className="text-center text-uppercase whitet py-3">BOSTON GAMING</h2>
<p className="whitet text-center   ">
       _____________  <i class="fas fa-star"></i>  _____________
     </p>
        
        <p className="py-5">{r.alttext}</p>
      </div>
      </div>
    </div>

      ))

}


console.log(post);

  return (
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

  <div className="carousel-inner black">

  <div className="carousel-inner ">
{liste}
  </div>




  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  );
};

export default Hedder;
