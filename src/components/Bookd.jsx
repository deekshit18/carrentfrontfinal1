import React, { useEffect, useState } from 'react'
import Update from './Update'
import { getAllHistory } from '../services/allAPI'
function Bookd() {
  
  const[history, setHistory]= useState([])
  const allHistory=async()=>{
    const {data}= await getAllHistory()
    /*console.log(data);*/
    setHistory(data)
  }
  console.log(history);
  useEffect(()=>{
    allHistory()
  },[])
  return (
    <div>
        
<table class="table table-hover">
  <thead>
  <tr class="table-dark">
    <th scope="col">#</th>
    <th scope="col">Car Name</th>
    <th scope="col">Time</th>
    <th scope="col">Date</th>
    <th scope="col">Rate</th>

    <th scope="col">Update</th>
    <th scope="col">Cancel</th>

  </tr>
  </thead><tbody>
  {history?.length>0? 
         history?.map((item, index)=>(
  <tr class="table-danger">

    <td>{index+1}</td>
    <td>{item.carname}</td>
    <td>{item.time}</td>

    <td>{item.date}</td>
    <td>{item.rate}</td>    

    <td>   
         <Update/>
</td>    
    <td><span class="badge rounded-pill bg-danger">Cancel</span>
</td>

    </tr>)):
    <p className='mt-5 fw-bolder fs-4 text-danger'>No Bookings Yet</p>  
         }
    </tbody>
 </table>

</div>
  )
}

export default Bookd