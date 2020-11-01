import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavLinks = lazy(() => import("./shared/components/nav/NavLinks"));
const Home = lazy(() => import("./user/pages/Home"));
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
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </main>
    </Suspense>
  );
}

export default App;
