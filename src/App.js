import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Design from "./user/pages/Design";
const Produktdetaljer = lazy(() => import( "./user/pages/Produktdetaljer"));

const NavLinks = lazy(() => import("./shared/components/nav/NavLinks"));
const Produkter = lazy(() => import("./user/pages/Produkter"));
const Footer = lazy(() => import("./shared/components/Footer"));
const NotFound = lazy(() => import("./components/NotFound"));
const Hedder = lazy(() => import("./user/pages/Hedder"));

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <Suspense fallback={renderLoader()}>
      <main className="col-12 col-lg-12  m-0 p-0 ">

        <BrowserRouter>
          <NavLinks />
          <Hedder />
        
          <Switch>
            <Route exact path="/" component={Produkter} />
            <Route  path="/Produktdetaljer/:idd" component={Produktdetaljer} />
            <Route component={NotFound} />
              
          </Switch><Design/>
        </BrowserRouter>

        <Footer />
      </main>
    </Suspense>
  );
}

export default App;
