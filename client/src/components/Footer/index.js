import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => (
	<Container>
  		<Navbar expand="sm" variant="light" bg="light" fixed="bottom">
    		<Navbar.Brand href="#">FlightMX</Navbar.Brand>
  		</Navbar>
	</Container>
);

export default Footer;