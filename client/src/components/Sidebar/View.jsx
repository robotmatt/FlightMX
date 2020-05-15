import React from "react";
import { Nav } from "react-bootstrap";

function View() {
  return (
    <div class="mt-2">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/logbook">Aircraft Logbook</Nav.Link>
        <Nav.Link href="/monitor">Engine Monitor</Nav.Link>
      </Nav>
    </div>
  );
}

export default View;
