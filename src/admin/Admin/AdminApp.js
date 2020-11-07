import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { useGlobal } from "reactn";
import {lazy} from "@loadable/component"


const AdminHome = lazy(() => import ("./AdminHome"));
const AboutAdmin = lazy(() => import ("./alletiladmin/AboutAdmin"));
const AdminRetAbout = lazy(() => import ("./ret/AdminRetAbout"));
const AdminRet = lazy(() => import ("./ret/AdminRetProduct"));
const FooterAdmin = lazy(() => import ("./alletiladmin/FooterAdmin"));
const AdminRetFooter = lazy(() => import ("./ret/AdminRetFooter"));
const AdminContact = lazy(() => import ("./alletiladmin/AdminContact"));
const AdminDeleteContact = lazy(() => import ("./delete/AdminDeleteContact"));
const Adminnewsubscrip = lazy(() => import ("./alletiladmin/Adminnewsubscrip"));
const AdminDeleteNewssub = lazy(() => import ("./delete/AdminDeleteNewssub"));
const User = lazy(() => import ("../users/User"));
const AdminRetSwitchP = lazy(() => import ("./ret/AdminRetSwitchP"));
const AdminDeleteUser = lazy(() => import ("./delete/AdminDeleteUser"));
const OpretCreatenewuser = lazy(() => import ("./opRet/OpretCreatenewuser"));



const AdminProduct = lazy(() => import("./alletiladmin/AdminProduct"));
const Oret = lazy(() => import("./opRet/OpretProduct"));
const AdmindeleteProduct = lazy(() => import("./delete/AdmindeleteProduct"));

const Slider = lazy(() => import("./alletiladmin/Slider"));
const AdminRetSlider = lazy(() => import("./delete/AdmindeleteSlider"));
const OpretSlider = lazy(() => import("./opRet/OpretSlider"));


const AdminApp = () => {
  

  const [loggetind] = useGlobal("loggetind");
    const [users_id] = useGlobal("users_id");

  

   if (!loggetind) {
    return <Redirect to={{ pathname: "/login" }} />;
   }


   

  return (
    <>
    <div className="container-fluid">

      
<div className="row">
      <Link
        className="col-12 col-lg-3 whitet a "
        to={"/admin/user/"}
      >
        Din bruger {users_id.name}
      </Link>
      </div> 
    </div> 
      
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

<Route path="/admin/user/" component={User}></Route>

<Route path="/admin/userRet/:ec" component={AdminRetSwitchP}></Route>
<Route path="/admin/userDelete/:ec" component={AdminDeleteUser}></Route>
<Route path="/admin/userGreaten/:ec" component={OpretCreatenewuser}></Route>

          
       
          <Route path="/admin/AdminRetForSlider/" component={OpretSlider} />
          <Route path="/admin/AdmindeleteForSlider/:ec" component={AdminRetSlider} />
          
        </Switch>
    </>
  );
};

export default AdminApp;
