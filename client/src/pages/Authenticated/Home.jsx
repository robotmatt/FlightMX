import React from "react";
import { Col, Row, Container, CardGroup} from "react-bootstrap";

import Sidebar from "../../components/Sidebar";
import PlaneCard from "../../components/PlaneCard";

function Home() {
  return (
    <Container fluid>
      <Row md={12}>
        <Col md={1}>
          <Sidebar />
        </Col>
        <Col>
          <div class="m-3">
          <CardGroup>
            <PlaneCard tail="N4LD"/>
            <PlaneCard tail="OMOOAFM1281"/>
            </CardGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
