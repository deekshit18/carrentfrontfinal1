import React, { useEffect, useState } from 'react'
import Update from './Update'
import { deleteCarHistory,getAllHistory,updateDetails } from '../services/allAPI'
function Bookd() {
  
  const[history, setHistory]= useState([])
  const allHistory=async()=>{
    const {data}= await getAllHistory()
    /*console.log(data);*/
    setHistory(data)
  }
  const removeHistory=async(id)=>{
    await deleteCarHistory(id)
    //to get remaining history
    allHistory()
  }
  useEffect(()=>{
    allHistory()
  },[])
  return (
    <div>
        
<table class="table table-hover">
  <thead>
  <tr class="table-dark">
    <th scope="col">#</th>
    <th scope="col">User Name</th>
    <th scope="col">Time</th>
    <th scope="col">Days</th>
    <th scope="col">Date</th>
    <th scope="col">Email</th>

    <th scope="col">Update</th>
    <th scope="col">Cancel</th>

  </tr>
  </thead><tbody>
  {history?.length>0? 
         history?.map((item, index)=>(
  <tr class="table-danger">

    <td>{index+1}</td>
    <td>{item.username}</td>
    <td>{item.time}</td>
    <td>{item.days}</td>
    <td>{item.date}</td>
    <td>{item.email}</td>    

    <td>   
    <Update index={index}  history={history}/>
</td>    
    <td><span class="badge rounded-pill bg-danger" onClick={()=>removeHistory(item?.id)}>Cancel</span>
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
