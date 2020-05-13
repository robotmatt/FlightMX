import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Error from "../components/Error"
import Home from "../components/Home"
import About from "./About"
import Login from "./Login"
import Logout from "./Logout"

function UnauthenticatedApp() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default UnauthenticatedApp;
