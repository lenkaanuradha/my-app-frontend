import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    console.log(authToken)
    if (authToken) {
      console.log("yes")
      setIsLoggedIn(true);
    } 
   else if(authToken == null) {
      console.log("No")
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            PollingSystem
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>polling_system</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {isLoggedIn ? (
              <>
                <Link
                  to="/createpoll"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Create Poll
                </Link>
                <Link
                  to="/vote"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Vote
                </Link>
                <Link
                  to="/viewresults"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  View Results
                </Link>
                <Link
                  to="/userprofile"
                  className="block mt-4 mx-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="block mt-4  lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                to="/"
                className="block mt-4 mx-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
