import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Seven() {
  return (
    <div>

<div className='container'>
        <Row className="mt-4 align-items-center ">
      <Col md={6} className="mb-4 cardcontainer">
        <img className='galleryImg' src="http://www.pngmart.com/files/5/Race-Car-PNG-HD.png" style={{width:"100%"}} alt="Compact Cars" fluid />
      </Col>
      <Col md={6} className="mb-4">
        <h1 className='text-warning'>Car name</h1>
        <ul class="list-group">
  <li class="text-warning list-group-item d-flex justify-content-between align-items-center">
  Catogory:
    <span class="badge bg-warning rounded-pill">Compact</span>
  </li>
  <li class="text-warning list-group-item d-flex justify-content-between align-items-center">
  Seat Capacity:
    <span class="badge bg-warning rounded-pill">4</span>
  </li>
  <li class="text-warning list-group-item d-flex justify-content-between align-items-center">
  Per Hour:
    <span class="badge bg-warning rounded-pill">40000$</span>
  </li>
</ul>
        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}><button type="button" class="btn btn-outline-info mt-3 bg-warning" fdprocessedid="rc6d2v">Book Now</button>
</Link>

      </Col>
    </Row>
    </div>

    </div>
  )
}

export default Seven
