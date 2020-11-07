import React, {  Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {lazy} from "@loadable/component"

const App = lazy(() => import("./App"));
const Login = lazy(() => import("./admin/login/Login"));
const AdminApp = lazy(() => import("./admin/Admin/AdminApp"));

function AppController() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={AdminApp} />
            <Route path="/login" component={Login} />
            <Route path="/" component={App} />
            
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default AppController;
