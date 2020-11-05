import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useGlobal } from "reactn";
import AdminHome from "./AdminHome";
import AboutAdmin from "./alletiladmin/AboutAdmin";
import AdminRetAbout from "./ret/AdminRetAbout";
import AdminRet from "./ret/AdminRetProduct";
import FooterAdmin from "./alletiladmin/FooterAdmin";
import AdminRetFooter from "./ret/AdminRetFooter"
import AdminContact from "./alletiladmin/AdminContact"
import AdminDeleteContact from "./delete/AdminDeleteContact";
import Adminnewsubscrip from "./alletiladmin/Adminnewsubscrip";
import AdminDeleteNewssub from "./delete/AdminDeleteNewssub";



const AdminProduct = lazy(() => import("./alletiladmin/AdminProduct"));
const Oret = lazy(() => import("./opRet/OpretProduct"));
const AdmindeleteProduct = lazy(() => import("./delete/AdmindeleteProduct"));

const Slider = lazy(() => import("./alletiladmin/Slider"));
const AdminRetSlider = lazy(() => import("./delete/AdmindeleteSlider"));
const OpretSlider = lazy(() => import("./opRet/OpretSlider"));


const AdminApp = () => {
  const renderLoader = () => <p>Loading</p>;

  const [loggetind] = useGlobal("loggetind");
 

   if (!loggetind) {
    return <Redirect to={{ pathname: "/login" }} />;
   }

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route exact path="/admin/" component={AdminHome} />
          <Route exact path="/admin/Product/" component={AdminProduct} />
          <Route exact path="/admin/slider/" component={Slider} />
          <Route exact path="/admin/opret" component={Oret} />
          <Route exact path="/admin/AboutAdmin" component={AboutAdmin} />

          <Route path="/admin/AdminRet/:ec" component={AdminRet} />
          <Route path="/admin/AboutRetAbout/:ec" component={AdminRetAbout} />
          <Route path="/admin/Admindelete/:ec" component={AdmindeleteProduct} />
          <Route path="/admin/AdminFooter/" component={FooterAdmin} />
          <Route path="/admin/AdminFooterRet/:ec" component={AdminRetFooter} />
          <Route path="/admin/AdminContact/" component={AdminContact} />
          <Route path="/admin/AdminDeleteContact/:ec" component={AdminDeleteContact} />

          <Route path="/admin/Adminnewsubscrip/" component={Adminnewsubscrip} />
          <Route path="/admin/Adminnewsubscripd/:ec" component={AdminDeleteNewssub} />

          
       
          <Route path="/admin/AdminRetForSlider/" component={OpretSlider} />
          <Route path="/admin/AdmindeleteForSlider/:ec" component={AdminRetSlider} />
          
        </Switch></Suspense>
    </>
  );
};

export default AdminApp;
