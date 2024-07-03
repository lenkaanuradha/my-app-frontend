import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Viewresults() {
  const [allvotes, setallVotes] = useState([]);

  const fetchVotes = async () => {
    console.log("Fetching votes...");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/backend/vote/getallvotes`
      );
      if (response.data.success) {
        setallVotes(response.data.allvotes);
        console.log("Votes fetched successfully:", response.data.allvotes);
      } else {
        console.error("Failed to fetch votes:", response.data);
      }
    } catch (error) {
      console.error("Error fetching votes:", error);
    }
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-3xl px-4">
          <h1 className="text-center text-2xl mb-5">Results</h1>
          {allvotes.map((item, index) => (
            <div
              className="p-6 bg-gray-200 shadow-md border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mb-4 flex flex-col items-center text-center"
              key={index}
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.poll_id.question}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Selected option: {item.option}
              </p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                voted_by: {item.voted_by.username}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
