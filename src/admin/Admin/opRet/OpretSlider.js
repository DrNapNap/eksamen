import React from "react";

import { OpretSlder } from "../../helpers/APIkald/apikald";
import ImageUploader from "react-images-upload";

import { useHistory } from "react-router-dom";

const OpretSlider = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    OpretSlder(e.target).then((res) => {
      history.push("/admin/slider/");
    });
  };

  return (
    <div className="container whitet">
      <h3 className="py-2 text-center text-uppercase">slider/admin Opret</h3>
      <div className="row d ">
        <form className="col-12" onSubmit={handleSubmit}>
          <label className="col-12 ">
            Alttext
            <textarea
              name="alttext"
              id="txtBeskrivelse"
              placeholder="alttext"
              className="col-12"
            ></textarea>
          </label>

          <ImageUploader
            className="col-12 "
            name="sliderimage"
            withIcon={true}
            buttonText="Vælg et billede"
            withLabel={true}
            imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
            singleImage={true}
            withPreview={true}
            required={true}
          />

          <br />
          <br />
          <button
            className="btn btn-danger m-3"
            onClick={() => {
              history.push("/admin");
            }}
            type="button"
          >
            Fortryd
          </button>
          <button className="btn btn-success m-3" type="submit">
            Gem Slider
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpretSlider;
