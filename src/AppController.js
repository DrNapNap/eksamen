import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Login from "./components/login/Login";
import AdminApp from "./components/Admin/AdminApp";

function AppController() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminApp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default AppController;
