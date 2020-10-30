import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AdminRet from "./ret/AdminRet";

import { useGlobal } from "reactn";
import AdminHome from "./AdminHome";
import Oret from "./opRet/Oret";
import Admindelete from "./delete/Admindelete";

const AdminApp = () => {
  const [loggetind] = useGlobal("loggetind");
  //hvis loggetind -> forsætte

  if (!loggetind) {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  return (
    <>
      <Switch>
        <Route exact path="/admin/" component={AdminHome} />

        <Route exact path="/admin/opret" component={Oret} />

        <Route path="/admin/AdminRet/:ec" component={AdminRet} />
        <Route path="/admin/Admindelete/:ec" component={Admindelete} />
      </Switch>
    </>
  );
};

export default AdminApp;
