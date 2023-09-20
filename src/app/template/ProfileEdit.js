"use client"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const MyVerticallyCenteredModal =(props)=> {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Profile update
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" readOnly/>
          </Form.Group>   
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="number" placeholder="Mobile Number" />
          </Form.Group>  
          <Button variant="primary" type="submit">
              Update profile
          </Button>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                   <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Name" />
          </Form.Group>           */}
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal