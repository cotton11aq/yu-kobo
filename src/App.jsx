import React from "react";
import "./assets/scss/style.min.scss";
import {
  Home,
  ContactLink,
  ShopLink,
  Footer,
  About,
  MenuBar,
  Contact,
} from "./assets/component/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <MenuBar />
        <ContactLink />
        <ShopLink />
        <Footer />
      </Router>
    </>
  );
};

export default App;
