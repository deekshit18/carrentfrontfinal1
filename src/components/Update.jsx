import React from 'react'
import {Col, Container, Form, Row } from 'react-bootstrap';

  import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  function Update() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <span class="badge rounded-pill bg-success" onClick={handleShow}>Update</span>

  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body><Form className='border shadow bg-light rounded p-3'>
                              

                               <Row className='justify-content-inline'>
                                <Col> 
                                
                                <Form.Group className="mb-3" controlId="formBasicdate">
                                 <Form.Label className='fw-bolder'>Date</Form.Label>
                                 <Form.Control type="date" placeholder="Enter drop-off place" />
                            </Form.Group></Col>
                                <Col> <Form.Group className="mb-3" controlId="formBasictime">
                                 <Form.Label className='fw-bolder'>Time</Form.Label>
                                 <Form.Control type="time" placeholder="Enter drop-off place" />
                            </Form.Group></Col>
                               </Row>
                               <Form.Group className="mb-3" controlId="formBasicnumber">
                                 <Form.Label className='fw-bolder'>Hours</Form.Label>
                                 <Form.Control type="number" placeholder="1" />
                            </Form.Group>  
                            <Form.Group className="mb-3" controlId="formBasicnumber">
                                 <Form.Label className='fw-bolder'>Number Of Days</Form.Label>
                                 <Form.Control type="number" placeholder="1" />
                                 </Form.Group>
                                 <h4 className='mt-1'>Total Price : ₹ 30,000</h4>    </Form>                  
</Modal.Body>
          <Modal.Footer>
            
<button type="button" class="btn btn-success disabled text-light" style={{backgroundColor:"green"}} fdprocessedid="bqpep">Save Changes</button>

           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 

export default Update