import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCars } from '../services/allAPI';

function Luxurious() {
  const [allCars, setAllCars]= useState([])
  const retrieveCars=async()=>{
    const response= await getAllCars();
    const {data}= response
   console.log(data);
   setAllCars(data)
  }
  useEffect(()=>{ retrieveCars()},[])
  return (
    <div>
<div className='container'>  
{ allCars.filter(car=>car.category=='Luxury').map((car)=>(

        <Row className="mt-4 align-items-center">
      <Col md={6} className="mb-4 cardcontainer">
        <img className='galleryImg' src={`${car.image}`} style={{width:"100%"}} alt="Compact Cars" fluid />
      </Col>
      <Col md={6} className="mb-4">
        <h1 className='text-success'>{`${car.carname}`}</h1>
        <ul class="list-group">
  <li class="text-success list-group-item d-flex justify-content-between align-items-center">
  Category:
    <span class="badge bg-success rounded-pill">{`${car.category}`}</span>
  </li>
  <li class="text-success list-group-item d-flex justify-content-between align-items-center">
  Seat Capacity:
    <span class="badge bg-success rounded-pill">{`${car.seat}`}</span>
  </li>
  <li class="text-success list-group-item d-flex justify-content-between align-items-center">
  Per Day:
    <span class="badge bg-success rounded-pill">{`${car.price}`}</span>
  </li>
</ul>
        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}><button type="button" class="btn btn-outline-info mt-3 bg-success" fdprocessedid="rc6d2v">Book Now</button>
</Link>

      </Col>
    </Row>))}
    </div>

    </div>
  )
}

export default Luxurious
