import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import background from './assets/images/sr71.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Home from "./components/Home"
import Aircraft from "./components/Aircraft"
import Logbook from "./components/Logbook"
import Login from "./components/Login"
import Logout from "./components/Logout"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logbook/:aircraftID" component={Logbook} />
          <Route exact path="/aircraft/:aircraftID" component={Aircraft} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
