import React from "react";
import { Navbar, Container } from "react-bootstrap";

import "./style.css";

const Footer = () => (
	<Container>
  		<Navbar expand="sm" variant="light" bg="light" fixed="bottom">
    		<Navbar.Brand href="#">Bottom Bar</Navbar.Brand>
  		</Navbar>
	</Container>
);

export default Footer;