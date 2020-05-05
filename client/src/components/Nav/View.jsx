import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function View() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">FlightMX</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <Button variant="outline-info">Login</Button>
      </Form>
    </Navbar>
  );
}

export default View;
