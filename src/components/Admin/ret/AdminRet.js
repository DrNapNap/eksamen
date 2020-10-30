import React, { useState, useEffect } from "react";

import {
  ret,
  hentAlleRegioner,
  hentUdvalgtEvent,
} from "../../helpers/APIkald/apikald";
import dayjs from "dayjs";





import ImageUploader from "react-images-upload";

import { useHistory } from "react-router-dom";

const AdminRet = (props) => {
  const ID = props.match.params.ec;

  

  const [regioner, setRegioner] = useState();
  const history = useHistory();

  const [event, setevent] = useState();

  useEffect(() => {
    hentAlleRegioner().then((res) => {
      if (res !== "error") setRegioner(res);
    });

    hentUdvalgtEvent(ID).then((res) => {
      if (res !== "err") setevent(res);
    });
  }, [ID]);

  const handleSubmit = (e) => {
    e.preventDefault();

    ret(e.target, ID).then((res) => {
      history.push("/admin");
    });
  };

  let regionliste = "";
  if (regioner && regioner.length) {
    regionliste = regioner.map((r) => (
      <option value={r._id} key={r._id}>
        {r.regionnavn}
      </option>
    ));
  }

  return (
    <>
      {event ? (
        <form onSubmit={handleSubmit}>
          <label>
            Titel
            <input
              name="titel"
              id="inpTitel"
              type="text"
              placeholder="Titel"
              defaultValue={event.titel}
            />
          </label>
          <br />
          <br />
          <label>
            Dato og tid
            <input
              name="dato"
              id="inpDato"
              type="text"
              placeholder="Vælg dato"
              defaultValue={
                dayjs(event.dato).format("YYYY-MM-DDTHH:mm")
              }
            />
          </label>
          <br />
          <br />
          <label>
            <textarea
              name="beskrivelse"
              id="txtBeskrivelse"
              placeholder="Beskrivelse"
              defaultValue={event.beskrivelse}
            ></textarea>
          </label>
          <br />
          <br />
          <label>
            Distance
            <input
              name="distance"
              type="number"
              min="1"
              max="100000"
              placeholder="Distance i meter"
              defaultValue={event.distance}
            />
          </label>
          <br />
          <br />
          <label>
            Pris i kr.
            <input
              name="pris"
              type="number"
              min="0"
              max="10000"
              placeholder="Pris i kr"
              defaultValue={event.pris}
            />
          </label>
          <br />
          <br />
          <label>
            Antal pladser
            <input
              name="antalpladser"
              type="number"
              min="1"
              max="10000"
              placeholder="Antal pladser"
              defaultValue={event.pris}
            />
          </label>
          <br />
          <br />
          <select defaultValue={event.region._id} name="region">{regionliste}</select>
          <br />
          <br />

          <div>
            <ImageUploader
              name="billede"
              withIcon={true}
              buttonText="Vælg et billede"
              withLabel={true}
              imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
              singleImage={true}
              withPreview={true}
              required={true}
            
            />
          </div>

          <img src={"http://localhost:5021/images/events/"+ event.billede } alt="" />

          <br />
          <br />
          <button type="button">Fortryd</button>
          <button type="submit">Ret Event</button>
        </form>
      ) : (
        <h2>lo</h2>
      )}
    </>
  );
};

export default AdminRet;
