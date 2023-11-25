import React from 'react'
import Update from './Update'

function Bookd() {
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
  <tr class="table-danger">

    <td>1</td>
    <td>TOYOTA</td>
    <td>9:00</td>

    <td>13/05/2023</td>
    <td>30000$</td>    

    <td>   
         <Update/>
</td>    
    <td><span class="badge rounded-pill bg-danger">Cancel</span>
</td>

    </tr>

    </tbody>
 </table>

</div>
  )
}

export default Bookd