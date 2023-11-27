import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row ,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCars } from '../services/allAPI';
import Booking from '../pages/Booking';
import { addDetails } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
function Five() {
  const [eid,setEid] = useState("")
  const [carn,setCarn] = useState("")
  const [carr,setCarr] = useState("")
  // const [dayd,setDayd] = useState("")

  const [allCars, setAllCars]= useState([])
  const retrieveCars=async()=>{
    const response= await getAllCars();
    const {data}= response
   console.log(data);
   setAllCars(data)
  }
  useEffect(()=>{ retrieveCars()},[])
  const handleShow = (id) =>{ 
    setEid(id)
    setShow(true);
    console.log(eid);
    setCarn(allCars[id-1].carname)
    setCarr(allCars[id-1].price)

  }
  // const dragover=(e)=>{
  //   e.preventDefault()
  // }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
      const [addDetailsStatus,setAddDetailsStatus]= useState({})
     
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
      


      
      const handleUpload=async()=>{
        const{carname,username, email, time, date, days,rate}=Cars
        setCars({...Cars,rate:carr})
      if(!username||!email||!time||!date||!days){
        toast.warning("Please fill the form completely")
      }
      else{
        const response= await addDetails(Cars)
        console.log(response);
        if(response.status>=200&&response.status<300){
          setAddDetailsStatus(response.data)
          toast.success('Booked successfully')
          //close modal
          handleClose()
        }
        else{
          console.log(response);
          toast.error('something went wrong. Try again later')
        }
      }
    }
    useEffect(() => {
      // setDayd(Cars.days)
      const prate=carr
      const daydoo=Cars.days
      console.log(prate,daydoo);
      const lastrate=prate*daydoo
      console.log(lastrate);
      if (carn !== "") {
        setCars((prevCars) => ({
          ...prevCars,
          carname: carn,
rate:carr
        }));
      }
    }, [carn]);
  
   
      return (
       <>



      <div className='container'>
        {
      allCars.filter(car=>car.category=='Compact').map((car,index)=>(
           
           <Row className="mt-4 align-items-center">
      <Col md={6} className="mb-4">
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
      Per Day:
        <span class="badge bg-info rounded-pill">{`${car.price}`}</span>
      </li>
    </ul>
    
            
            <button onClick={(e)=>handleShow(car?.id)} type="button" class="btn btn-outline-info mt-3 bg-info" fdprocessedid="rc6d2v">Book Now</button>    
            
  

  <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
            
          </Col>
        </Row>
        ))}
          <Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title><h1 className='ms-5 text-info'>{carn}</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>       
      <Row className=''>
                             <Col lg={12} md={12} sm={12}>
                          
                  <Form className='border shadow bg-light  text-info rounded p-3 container'>
                            <Form.Group className="mb-3" controlId="formBasicnumber">
                            {/* <Form.Control  type="text" value={allCars[eid].carname} placeholder="User Name"  onChange={(e)=>setCars({...Cars,carname:e.target.value})}/> */}
        

                             <Form.Control  type="text" placeholder="User Name" onChange={(e)=>setCars({...Cars,username:e.target.value})} />
                        </Form.Group>  
                        <Form.Group className="mb-3" controlId="formBasicnumber">
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
                             <Form.Control  type="text" onChange={(e)=>setCars({...Cars,days:e.target.value})} placeholder="Number Of Days" />
                             </Form.Group>
<Row>
<Col md={6}>
                                 <h4 className="mt-3 text-info ">Rate/Day: {carr}</h4>
  
</Col>                           
<Col md={6}>
      <Button type='button ' onClick={handleUpload} className='btn btn-outline-primary ms-5 mt-3 bg-info'>Book Now</Button>
  
</Col></Row>

                       

                  </Form>

                
                  
            </Col>
           
      </Row>
  </Modal.Body>

</Modal>
      </div>
   </>
  )
}

export default Five
