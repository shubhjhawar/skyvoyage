import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//import logo and components
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';


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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
