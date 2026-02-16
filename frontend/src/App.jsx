import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Board from './pages/Board';
function App() {
  const token = localStorage.getItem("token");

 return (
    
       <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/board/:id" element={<Board />} />
    </Routes>
    
  );
  
}

export default App
