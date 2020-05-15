import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Aircraft from "./pages/Authenticated/Aircraft"
import Logbook from "./pages/Authenticated/Logbook"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pricing from "./pages/Pricing"
import Monitor from "./pages/Authenticated/Monitor"
import AuthenticatedApp from "./pages/Authenticated/Home"
import UnauthenticatedApp from "./pages/Unauthenticated/Home"
import './App.css';


function App() {
  return(
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={UnauthenticatedApp} />
      <Route exact path="/home" component={AuthenticatedApp} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/logbook/:tail_number?" component={Logbook} />
      <Route exact path="/aircraft/:aircraftID?" component={Aircraft} />
      <Route exact path="/monitor/:tail_number?" component={Monitor} />
      <Route component={Error} />
    </Switch>
    <Footer />
  </div>
</Router>
  )
}

export default App;
