import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Produktdetaljer = lazy(() => import("./user/pages/Produktdetaljer"));

const NavLinks = lazy(() => import("./shared/components/nav/NavLinks"));
const Pages = lazy(() => import("./user/pages/allepages/Pages"));
const Footer2 = lazy(() => import("./shared/components/Footer2"));
const NotFound = lazy(() => import("./admin/NotFound"));
const Hedder = lazy(() => import("./user/pages/Hedder"));
const Footer1 = lazy(() => import("./shared/components/Footer1"));

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <Suspense fallback={renderLoader()}>
      <main className="col-12 col-lg-12  m-0 p-0 ">
        <BrowserRouter>
          <NavLinks />
          <Hedder />

          <Switch>
            <Route exact path="/" component={Pages} />
            <Route path="/Produktdetaljer/:idd" component={Produktdetaljer} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        <Footer1 />
        <Footer2 />
      </main>
    </Suspense>
  );
}

export default App;
