import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import background from './assets/images/sr71.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import AircraftList from "./components/pages/AircraftList"
import Error from "./components/pages/Error"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={AircraftList} />
          <Route component={Error} />
          {/* <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />  */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
