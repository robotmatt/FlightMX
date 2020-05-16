import React from "react";
import { Col, Row, Container, CardGroup} from "react-bootstrap";
import Plane1Pic from "../../assets/images/16297829150_4219c9b18d_o.jpg"
import Plane2Pic from "../../assets/images/sr71.jpg"

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
            <PlaneCard tail="N4LD" pic={Plane1Pic}/>
            <PlaneCard tail="OMOOAFM1281" pic={Plane2Pic}/>
            </CardGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
