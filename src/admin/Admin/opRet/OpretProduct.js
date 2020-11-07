import React, { useState, useEffect } from "react";

import { hentAllecategory, Opret } from "../../helpers/APIkald/apikald";
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
  const [category, setCategory] = useState();
  const history = useHistory();

  const [b, setb] = useState();

  useEffect(() => {
    hentAllecategory().then((res) => {
      if (res !== "error") setCategory(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    Opret(e.target).then((res) => {
      history.push("/admin");
    });
  };

  let liste = "";
  if (category && category.length) {
    liste = category.map((r) => (
      <option value={r._id} key={r._id}>
        {r.title}
      </option>
    ));
  }

  return (
    <div className="container whitet">
      <div className="row d">
        <form className="col-12 col-lg-10" onSubmit={handleSubmit}>
          <textarea
            style={{ display: "none" }}
            name="content"
            id="txtBeskrivelse"
            placeholder="content"
            defaultValue={b}
            className="col-12"
          ></textarea>
          <div>
            <label className="col-12 m-3">
              Titel
              <input
                className="col-12 col-lg-8 form-control "
                name="title"
                id="inpTitel"
                type="text"
                placeholder="Titel"
              />
            </label>
            <label className="col-12 col-lg-10 m-3 textb">
              Skive det content
              <CKEditor
                className="col-12 col-lg-9"
                config={editorConfiguration}
                editor={ClassicEditor}
                data="<p>CKEditor 5!</p>"
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
            </label>
          </div>
          <div className="col-12 m-3 col-lg-10">
            <select
              className="col-12 col-lg-9"
              name="category"
              defaultValue="DEFAULT"
              id="regionselect"
            >
              <option value="DEFAULT" disabled>
                Vælg en category ....
              </option>
              {liste}
            </select>
          </div>

          <div className="col-12">
            <ImageUploader
              className="col-12 "
              name="productimage"
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
            Gem Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Oret;
