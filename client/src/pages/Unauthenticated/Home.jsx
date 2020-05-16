import React from "react";
import { Jumbotron, Container, Button, Row } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <Row className="justify-content-md-center">
            <h1>FlightMX</h1>
            </Row>
            <Row className="justify-content-md-center">
            <p>The best place on the internet to store them logs.</p>
          </Row>
        </Container>
        <Container>
        <Row className="justify-content-md-center">
          <Button variant="primary" className="mx-2">Learn More</Button>
          <Button variant="secondary">Try Us!</Button>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
