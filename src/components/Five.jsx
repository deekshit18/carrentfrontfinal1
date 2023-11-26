import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCars } from '../services/allAPI';
function Five() {
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
        {
      allCars.filter(car=>car.category=='Compact').map((car)=>(
            <Row className="mt-4 align-items-center">
            
          <Col md={6} className="mb-4 cardcontainer">
            <img className='galleryImg' src={`${car.image}`}style={{width:"100%"}} alt="Compact Cars" fluid />
          </Col>
          <Col md={6} className="mb-4">
            <h1 className='text-info'>{`${car.carname}`}</h1>
            <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center text-info">
      Category:
        <span class="badge bg-info rounded-pill">{`${car.category}`}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center text-info">
      Seat Capacity:
        <span class="badge bg-info  rounded-pill">{`${car.seat}`}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center text-info">
      Per Hour:
        <span class="badge bg-info rounded-pill">{`${car.price}`}</span>
      </li>
    </ul>
            <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}><button type="button" class="btn btn-outline-info mt-3 bg-info" fdprocessedid="rc6d2v">Book Now</button>  
            
            </Link>
    
          </Col>
        </Row>
        ))}
      </div>
   </div>
  )
}

export default Five
