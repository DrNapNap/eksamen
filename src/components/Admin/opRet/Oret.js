import React, { useState, useEffect } from "react";

import { Opret } from "../../helpers/APIkald/apikald";
import ImageUploader from "react-images-upload";

import { useHistory } from "react-router-dom";



import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const editorConfiguration = {
  toolbar: [
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
  ],
};

const Oret = () => {
  const [regioner, setRegioner] = useState();
  const history = useHistory();

  const [b, setb] = useState();

  useEffect(() => {
    Opret().then((res) => {
      if (res !== "error") setRegioner(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    Opret(e.target).then((res) => {
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
    <form onSubmit={handleSubmit}>
      <label>
        Titel
        <input name="titel" id="inpTitel" type="text" placeholder="Titel" />
      </label>
      <br />
      <br />
      <label>
        Dato og tid
        <input name="dato" id="inpDato" type="date" placeholder="Vælg dato" />
      </label>
      <br />
      <br />

      <textarea
        style={{ display: "none" }}
        name="beskrivelse"
        id="txtBeskrivelse"
        placeholder="Beskrivelse"
        defaultValue={b}
      ></textarea>
      <br />
      <CKEditor
        config={editorConfiguration}
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setb(data);
        }}
      />

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
        />
      </label>
      <br />
      <br />
      <select name="region" defaultValue="DEFAULT" id="regionselect">
        <option value="DEFAULT" disabled>
          Vælg en region ....
        </option>
        {regionliste}
      </select>
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
      <br />
      <br />
      <button type="button">Fortryd</button>
      <button type="submit">Gem Event</button>
    </form>
  );
};

export default Oret;
