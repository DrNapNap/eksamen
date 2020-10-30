import React,{lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = lazy(() => import ("./App"));
const Login = lazy(() => import ("./components/login/Login"));
const AdminApp = lazy(() => import("./components/Admin/AdminApp"));

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
