import React, { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../components/Navbar';
import axios from 'axios';
export default function Votepoll() {
    const [allRecords, setAllRecords] = useState([]);
   
    const handleOption = async (pollid,selected)=>{
     
      const reqbdy= {option:selected};
      const userid=localStorage.getItem("user_id")
      try {
        const response = await axios.post(
          `${
            process.env.REACT_APP_BACKEND_URL
          }/backend/vote/castvote/${pollid._id}/${userid}`,reqbdy);
        if(response.data.success){
          console.log("Your vote casted successfully!")
          toast("Your vote casted successfully!")
        }
      } catch (error) {
        toast("Error occured")
        console.log(error)
      }
    }
    useEffect(()=>{
        fetchPoll();
    },[]);
   
    const fetchPoll = async () => {
        try {
          const response = await axios.get(
            `${
              process.env.REACT_APP_BACKEND_URL
            }/backend/poll/getallpolls`);
    
          if (response.data.success) {
            console.log(response.data.allpolls)
            setAllRecords((prevRecords) => [
              ...prevRecords,
              ...response.data.allpolls,
            ]);
            
          }
        } catch (error) {
         console.log(error)
        }
      };
  return (
    <>
      <Navbar/>
    <div className=' m-3 shadow-md'>
       {allRecords.map((item, index) => (
        <div className="m-5  p-5 mb-2" key={index}>
           <div className="mb-4 items-center">
           <label className=" text-gray-700 text-sm font-bold mb-2 shadow-md p-3" >
             {item.question}
           </label>
          
         </div>
         {item.options.map((selected,index)=>(
                 <div className="mb-6 mt-2 mx-1 p-2 bg-gray-200  hover:bg-blue-500" key={index} onClick={()=>handleOption(item,selected)}>
                 <label className=" text-gray-700 text-sm font-bold mb-2" >
                  {selected}
                 </label>
                
               </div>
         ))

         }
         
         </div>
          ))}
          <ToastContainer/>
    </div>
    </>
  )
}
