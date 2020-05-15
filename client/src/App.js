import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import PrivateRoute from './PrivateRoute';
import About from "./pages/About"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"
import Register from "./pages/Register"

import { AuthContext } from "./context/auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/pricing" component={Pricing} />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;