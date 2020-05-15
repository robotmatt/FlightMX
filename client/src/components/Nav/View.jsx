import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

function View() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">FlightMX</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/">Pricing</Nav.Link>
      </Nav>
        <Button variant="outline-info" size="sm" href="/register" className="mx-2">Sign Up</Button>
        <Button variant="outline-info" size="sm" active href="/login">Login</Button>
    
    </Navbar>
  );
}

export default View;
