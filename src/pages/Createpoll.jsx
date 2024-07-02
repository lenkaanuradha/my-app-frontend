import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Createpoll() {
 
  const[pollinfo,setPollinfo]=useState({
    question: undefined,
    option1: undefined,
    option2: undefined,
    option3: undefined,
    option4: undefined,
  })
  const handleChange = (e) => {
    setPollinfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    console.log(pollinfo.option1)
    const pollData={
      question:pollinfo.question,
      options:[pollinfo.option1,pollinfo.option2,pollinfo.option3,pollinfo.option4]
    }
    console.log(pollData)
   const user_id=localStorage.getItem("user_id")
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/backend/poll/createpoll/${user_id}`,
        pollData
      );

      if (response.data.success) {
        toast( "poll create successfully");
        
      
      }
    } catch (error) {
      toast( "error occured while creating poll");
      console.log(error)
    }
  };
  return (
    <div className="container">
  
    <div className='flex flex-col  items-center justify-center mt-5' >
      <div className="w-full max-w-xs  ">
  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 " >
        Question
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="question" type="text" placeholder="Enter the quetion here?" onChange={handleChange}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        option1
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="option1" type="text" placeholder="option1" onChange={handleChange}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        option2
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="option2" type="text" placeholder="option2" onChange={handleChange}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        option3
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="option3" type="text" placeholder="option3" onChange={handleChange}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        option4
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="option4" type="text" placeholder="option4" onChange={handleChange}/>
    </div>
    <button  className='text-center  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' type='button' onClick={handleSubmit} >Submit</button>
  </form>
 
</div>
    </div>
    <ToastContainer />
    </div>
  )
}
