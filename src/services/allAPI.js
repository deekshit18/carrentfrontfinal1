import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const getAllCars= async()=>{
    //return the response to five,seven and luxurious components

return await commonAPI('GET', `${serverURL}/cardetails`,"")

}
//Add booking details
export const addDetails= async(reqBody)=>{
    //return the response to booking.jsx component
    return await commonAPI('POST',`${serverURL}/bookingdetails`,reqBody)
  }
  //API to get booking details from json-server
export const getAllHistory= async()=>{
    return await commonAPI('GET',`${serverURL}/bookingdetails`,"")
    }