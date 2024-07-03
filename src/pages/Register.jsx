import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    useremail: "",
    password: "",
   
  });

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { id, value, files } = e.target;

    if (id === "profilePic") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCredentials((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setCredentials((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/backend/auth/register`,
        credentials
      );

      if (response.data.success) {
        toast(response.data.message);
      }
    } catch (error) {
      toast(error.response.data.errors);
    }
  };

  return (
    <>
      <div className="container mt-1">
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
          <div className="w-full max-w-[50vh] p-6 rounded-lg shadow-md bg-blue-400 bg-opacity-0 backdrop-filter backdrop-blur-lg">
            <h1 className="text-center text-3xl text-gray-300">
              Register <span className="text-blue-500">VotingApp</span>
            </h1>
            <form className="my-2">
              <label className="mt-2 input input-bordered flex items-center gap-2">
                <input
                  id="useremail"
                  type="text"
                  className="grow  mx-2 p-3 border border-gray-300 test-bgray-700"
                  placeholder="Useremail"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="mt-2 input input-bordered flex items-center gap-2">
                <input
                  id="username"
                  type="text"
                  className="grow  mx-2 p-3 border border-gray-300 test-bgray-700"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                />
              </label>
             
              <label className="mt-2 input input-bordered flex items-center gap-2">
                <input
                  id="password"
                  type="password"
                  className="grow t mx-2 p-3 border border-gray-300 test-bgray-700"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="flex flex-col items-center mt-4">
                <button
                  className="btn mt-2 p-4 bg-blue-500 border-none text-white w-full text-center"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <button
                  className="btn mt-2 p-4 bg-blue-500 border-none text-white w-full text-center"
                  onClick={() => navigate("/")}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
