import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { updatebook } from '../services/allAPI';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Update({ history,index }) {

  const [show, setShow] = useState(false);
 const  [update,setUpdate] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setUpdate(history[id]);
  };
  // console.log(update);

  // console.log(history);

  const updateBook = async(uid)=>{
    console.log(uid);
    handleClose()
    const response = await  updatebook(uid,update)
    

  }
  

  return (
    <>
      <span class="badge rounded-pill bg-success" onClick={()=>handleShow(index)}>Update</span>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border shadow bg-light rounded p-3'>


          <Row className='justify-content-inline'>
            <Col>

              <Form.Group className="mb-3" controlId="formBasicdate">
                <Form.Label className='fw-bolder'>Date</Form.Label>
                <Form.Control type="date" value={update.date} onChange={(e)=>setUpdate({...update,date:e.target.value})} placeholder="Enter drop-off place" />
              </Form.Group></Col>
            <Col> <Form.Group className="mb-3" controlId="formBasictime">
              <Form.Label className='fw-bolder'>Time</Form.Label>
              <Form.Control type="time" value={update.time}  onChange={(e)=>setUpdate({...update,time:e.target.value})} placeholder="Enter drop-off place" />
            </Form.Group></Col>
          </Row>
          {/* <Form.Group className="mb-3" controlId="formBasicnumber">
            <Form.Label className='fw-bolder'>Hours</Form.Label>
            <Form.Control type="number" placeholder="1" />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicnumber">
            <Form.Label className='fw-bolder'>Number Of Days</Form.Label>
            <Form.Control type="text" value={update.days} onChange={(e)=>setUpdate({...update,days:e.target.value})} placeholder="1" />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <button type="button" class="btn btn-success  text-light"  onClick={()=>updateBook(update?.id)} style={{ backgroundColor: "green" }} fdprocessedid="bqpep">Save Changes</button>


        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Update