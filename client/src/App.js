import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
// import Footer from "./components/Footer"
// import Error from "./components/Error"
// import Home from "./components/Home"
// import Aircraft from "./pages/Aircraft"
// import Logbook from "./pages/Logbook"
// import About from "./pages/About"
// import Login from "./components/Login"
// import Logout from "./components/Logout"
import AuthenticatedApp from "./pages/Authenticated/AuthenticatedApp"
import UnauthenticatedApp from "./pages/Unauthenticated/UnauthenticatedApp"
import './App.css';

function useUser(){
  return false;
}

function App() {
    const user = useUser();
    return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;
