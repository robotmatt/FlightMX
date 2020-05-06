import React, { useState } from "react";
import {
  Modal,
  Form,
  Table,
  Jumbotron,
  Container,
  Button,
  Row,
} from "react-bootstrap";
import DatePicker from "react-date-picker";
//import Modal from "./Modal";

//TODO move modal to new component
function View() {
  
  const [state, setState] = useState({show: false, tail_number: ""});

  const handleClose = () => {
      console.log(state)
      setState({show: false});
  }
  const handleShow = () => {
    console.log(state)
      setState({show: true});
  }

  const formUpdate = (event) => {
      console.log(event.target.value)
      console.log(event.target.id)
      console.log(state)
      setState({[event.target.id]: event.target.value});
      
  };

  const submitForm = () => {

  };

  return (
    <div>
      <Button onClick={handleShow}>Add Entry</Button>
      <Modal show={state.show} onHide={handleClose}>
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
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default View;
