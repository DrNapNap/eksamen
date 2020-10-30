import React from "react";
import ReactDOM from "react-dom";

import AppController from "./AppController";

// til bootstrap
import "./index.css";
import "../node_modules/jquery";
import "../node_modules/bootstrap/js/src/popover";
import "../node_modules/bootstrap/dist/js/bootstrap";

//det er til bootstrap så jeg ikke bur et like det bootstrap så hjem vike alt ti
global.jQuery = require("jquery");
require("bootstrap");

ReactDOM.render(
  <React.StrictMode>
    <AppController />
  </React.StrictMode>,
  document.getElementById("root")
);
