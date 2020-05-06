import React from "react";
import { Table, Jumbotron, Container, Button, Row } from "react-bootstrap";

function Modal(props) {
  return (
    <div>
      <Modal show={props.state} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Form>
          <Form.Group controlId="tail_number">
            <Form.Label>Tail Number</Form.Label>
            <Form.Control type="email" placeholder="Enter tail" onChange={formUpdate} />
          </Form.Group>
          <Form.Group controlId="entry_date">
            <Form.Label>Date</Form.Label>
            <DatePicker id="example-datepicker" />
          </Form.Group>
          <Form.Group controlId="entry_note">
            <Form.Label>Tail Number</Form.Label>
            <Form.Control type="email" placeholder="Enter entry" />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitForm}>
            Submit Entry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Modal;
