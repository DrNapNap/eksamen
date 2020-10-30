import React from "react";
import NavLinks from "./shared/components/nav/NavLinks";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./user/pages/Home";
import Footer from "./shared/components/Footer";
import NotFound from "./components/NotFound";
import Hedder from "./user/pages/Hedder";

function App() {
  return (
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
  );
}

export default App;
