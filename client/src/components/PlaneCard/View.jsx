import React from "react";
import { Card, Button } from "react-bootstrap";

function View(props, state) {
  const logbookLink = `/logbook/${props.tail}`;
  const engineLink = `/monitor/${props.tail}`;
  
  return (
    <div class="m-2">
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{props.tail}</Card.Header>
        <Card.Body>
          <Card.Title>Picture</Card.Title>
          <Button variant="outline-info" size="sm" href={logbookLink} className="mx-2">Logbook</Button>
          <Button variant="outline-info" size="sm" href={engineLink} className="mx-2">Engine Data</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default View;
