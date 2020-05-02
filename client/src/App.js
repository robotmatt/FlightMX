import React from "react";
import background from "./assets/images/sr71.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AircraftList from "./components/AircraftList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main>
      <Router>
    <Switch>
      <Route path="/list" component={AircraftList} exact />
    </Switch>
    </Router>
    </main>
  );
}

export default App;
