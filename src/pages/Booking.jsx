import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react'
import Bookd from '../components/Bookd';
import Headerr from '../components/Headerr';
import { getAllCars } from '../services/allAPI';
import Five from '../components/Five';
import { addDetails } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Booking() {
  const [addDetailsStatus,setAddDetailsStatus]= useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Cars, setCars]=useState({ 
    id:"",
    carname:"",
    username:"",
    email:"",
    time:"",
    date:"",
    days:"",
    rate:""
  })
  console.log(Cars);
  const handleUpload=async()=>{
    const{username, email, time, date, days}= Cars
    if(!username||!email||!time||!date||!days){
    toast.warning("Please fill the form completely")
  }
  else{
    const response= await addDetails(Cars)
    console.log(response);
    if(response.status>=200&&response.status<300){
      setAddDetailsStatus(response.data)
      toast.success('uploaded successfully')
      //close modal
      handleClose()
    }
    else{
      console.log(response);
      toast.error('something went wrong. Try again later')
    }
  }
}

  return (
   <>
         <Headerr/>

      <Container>
          <Row className=' mt-5 mb-5'>
                {/* <Col lg={1}>
                </Col> */}
                <Col lg={6} md={6} sm={12}>
                   <div className='card text-primary container mb-3 shadow' style={{height:'80vh'}}>
                          <div className='text-center mt-3'>
                            <img style={{width:"80%"}} src="https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2022TOC130005_01_1280_D06.png" width={'100%'} alt="car" />
                          </div>
                          
                          <div className='p-3'>
                            <h1 className=''>TOYOTA SUPRA</h1>
                            <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center text-primary">
  Category:
    <span class="badge bg-primary rounded-pill">Luxury..</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center text-primary">
  Seat Capacity:
    <span class="badge bg-primary rounded-pill">4</span>
  </li>
</ul>
                          </div>
                   </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                      <Form className='border shadow bg-light  text-primary rounded p-3 mb-3 container'>
                                <Form.Group className="mb-3" controlId="formBasicnumber">
                                 <Form.Control type="text" placeholder="User Name" onChange={(e)=>setCars({...Cars,username:e.target.value})} />
                            </Form.Group>  <Form.Group className="mb-3" controlId="formBasicnumber">
                                 <Form.Control type="email" placeholder="Email" onChange={(e)=>setCars({...Cars,email:e.target.value})}/>

                            </Form.Group>  
                               <Row className='justify-content-inline'>
                                <Col> 
                                
                                <Form.Group className="mb-3" controlId="formBasicdate">
                                 <Form.Label className='fw-bolder'>Date</Form.Label>
                                 <Form.Control type="date" onChange={(e)=>setCars({...Cars,date:e.target.value})} placeholder="Enter drop-off place" />
                            </Form.Group></Col>
                                <Col> <Form.Group className="mb-3" controlId="formBasictime">
                                 <Form.Label className='fw-bolder'>Time</Form.Label>
                                 <Form.Control type="time" onChange={(e)=>setCars({...Cars,time:e.target.value})} placeholder="Enter drop-off place" />
                            </Form.Group></Col>
                               </Row> 
                            <Form.Group className="mb-3" controlId="formBasicnumber">
                                 <Form.Label className='fw-bolder'>Number Of Days</Form.Label>
                                 <Form.Control type="number" onChange={(e)=>setCars({...Cars,days:e.target.value})} placeholder="1" />
                                 </Form.Group>
                                 <h4 className='mt-1 text-primary'>Total Price : ₹ 30,000</h4>                      

                            <div className='text-center mt-3'><Button type='button' onClick={handleUpload} className='btn btn-outline-primary w-50'>Book Now</Button></div>

                      </Form>
    
                    {/* booking status. show after booking */}
                     {/* <div>
                           <div className='border shadow bg-light rounded mt-2 p-3'>
                                <h4 className='text-center mb-4'>Booking Status</h4>
                               <div className='d-flex justify-content-between'>
                                     <div>
                                          <h6>Toyota Supra</h6>
                                          <h6>No.of Days : 2</h6>
                                     </div>
                                     <div>
                                          <h6>Date : 16/05/2022</h6>
                                          <h6>Time : 03:00 PM</h6>
                                     </div>
                               </div>
                             <div className='text-center mt-3'><Button type='button' className='btn btn-outline-danger w-50'>Cancel Booking</Button></div>
                           </div>
                     </div> */}
                      
                </Col>
                {/* <Col lg={1}>
                </Col> */}
          </Row>
          <Bookd/>
      </Container>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
   </>
  );
}

export default Booking
