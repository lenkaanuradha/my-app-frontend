import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Createpoll from "./pages/Createpoll";
import Viewresults from "./pages/Viewresults";
import Votepoll from "./pages/Votepoll";


import Register from "./pages/Register";
import Login from "./pages/Login";

import Userprofile from "./pages/Userprofile";
export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
     
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Login/>} />
        <Route path="/createpoll" element={<Createpoll/>} />
        <Route path="/viewresults" element={<Viewresults/>} />
        <Route path="/vote" element={<Votepoll/>} />
        <Route path="/userprofile" element={<Userprofile/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
