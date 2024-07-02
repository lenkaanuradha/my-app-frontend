import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
   
    <span className="font-semibold text-xl tracking-tight">PollingSystem</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>polling_system</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/createpoll" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        createpoll
      </Link>
      <Link to="/vote" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
       vote
       </Link>
      <Link to="/viewresults" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        view results
        </Link>
        <Link to="/discussions" className="block mx-2 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        discussion
        </Link>
        <Link to="/" className="block mt-4 mx-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        login
        </Link>

    </div>
    
  </div>
</nav>
    </div>
  )
}
