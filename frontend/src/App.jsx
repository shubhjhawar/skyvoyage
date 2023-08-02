import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//import logo and components
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
      <header >
        <Navbar />
      </header>
      <main className='py-3 bg-blue-100 w-full flex justify-center items-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
