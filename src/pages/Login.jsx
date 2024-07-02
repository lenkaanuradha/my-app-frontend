import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    useremail: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/backend/auth/login`,
        credentials
      );

      if (response.data.success) {
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.userId);
        navigate("/createpoll");
      }
    } catch (error) {
      console.log("error", error.response.data.error);
      toast(error.response.data.error);
    }
  };

  return (
    <>
      <div className="container mt-1">
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
          <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-blue-400 bg-opacity-0 backdrop-filter backdrop-blur-lg">
            <h1 className="text-center text-3xl text-gray-300">
              Login <span className="text-blue-500">VotingApp</span>
            </h1>
            <form action="" className="my-3">
              <label className="mt-2 input input-bordered flex items-center gap-2">
                <input
                  id="useremail"
                  type="email"
                  className="grow text-gray-700 mx-2 p-3 border border-gray-300"
                  placeholder="Useremail"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="mt-2 input input-bordered flex items-center gap-2">
                <input
                  id="password"
                  type="password"
                  className="grow text-gray-700 mx-2 p-3 border border-gray-300"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="flex flex-col items-center mt-4">
                <button
                  className="btn mt-2 p-4 bg-blue-500 border-none text-white w-full text-center"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  className="btn mt-2 p-4 bg-blue-500 border-none text-white w-full text-center"
                  onClick={() => navigate("/register")}
                >
                  Register
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
