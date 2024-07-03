import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

export default function Createpoll() {
  const [pollinfo, setPollinfo] = useState({
    question: undefined,
    option1: undefined,
    option2: undefined,
    option3: undefined,
    option4: undefined,
  });

  const handleChange = (e) => {
    setPollinfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pollData = {
      question: pollinfo.question,
      options: [pollinfo.option1, pollinfo.option2, pollinfo.option3, pollinfo.option4],
    };

    const user_id = localStorage.getItem('user_id');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/backend/poll/createpoll/${user_id}`,
        pollData
      );

      if (response.data.success) {
        toast('Poll created successfully');
      }
    } catch (error) {
      toast('Error occurred while creating poll');
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-xs border border-gray-200 shadow-md">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Question</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question"
                type="text"
                placeholder="Enter the question here?"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Option 1</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                type="text"
                placeholder="Option 1"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Option 2</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                type="text"
                placeholder="Option 2"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Option 3</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                type="text"
                placeholder="Option 3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Option 4</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                type="text"
                placeholder="Option 4"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
