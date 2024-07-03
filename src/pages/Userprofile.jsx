import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const user_id = localStorage.getItem("user_id");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [votes, setVotes] = useState('');
  const [polls, setPolls] = useState([]);

  const fetchUserInfos = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/backend/users/getUser/${user_id}`,
      );

      if (response.data.success) {
        console.log(response.data.user)
        setName(response.data.user.username);
        setEmail(response.data.user.useremail);
        setVotes(response.data.voteCount); 
        setPolls(response.data.polls);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfos();
  }, []);

  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <p className="text-gray-900">{name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p className="text-gray-900">{email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Voted:</label>
          <p className="text-gray-900">{votes}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">Polls Created</h3>
          {polls.length > 0 ? (
            <ul className="list-none list-inside">
              {polls.map((poll, index) => (
                <li key={index} className="mb-2">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold">{poll.question}</h4>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No polls created yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
