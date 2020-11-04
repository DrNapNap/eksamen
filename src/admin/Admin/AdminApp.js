import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useGlobal } from "reactn";
const AdminRet = lazy(() => import("./ret/AdminRet"));


const AdminHome = lazy(() => import("./AdminHome"));
const Oret = lazy(() => import("./opRet/Oret"));
const Admindelete = lazy(() => import("./delete/Admindelete"));

const AdminApp = () => {
  const renderLoader = () => <p>Loading</p>;

  const [loggetind] = useGlobal("loggetind");
  //hvis loggetind -> forsætte

  // if (!loggetind) {
  //   return <Redirect to={{ pathname: "/login" }} />;
  // }

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route exact path="/admin/" component={AdminHome} />

          <Route exact path="/admin/opret" component={Oret} />

          <Route path="/admin/AdminRet/:ec" component={AdminRet} />
          <Route path="/admin/Admindelete/:ec" component={Admindelete} />
        </Switch></Suspense>
    </>
  );
};

export default AdminApp;
