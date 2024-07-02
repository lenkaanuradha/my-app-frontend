import React, { useEffect } from 'react'
import { useState } from 'react';
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
        }
      } catch (error) {
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
    <div className=' m-3 shadow-md'>
       {allRecords.map((item, index) => (
        <div className="m-5  p-5 mb-2" key={index}>
           <div className="mb-4 items-center">
           <label className=" text-gray-700 text-sm font-bold mb-2 shadow-md p-3" >
             {item.question}
           </label>
          
         </div>
         {item.options.map((selected,index)=>(
                 <div className="mb-6 mt-2 mx-2 " key={index}>
                 <label className=" text-gray-700 text-sm font-bold mb-2" onClick={()=>handleOption(item,selected)}>
                  {selected}
                 </label>
                
               </div>
         ))

         }
         
         </div>
          ))}
    </div>
  )
}
