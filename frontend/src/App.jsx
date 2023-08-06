import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//import logo and components
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FlightPage from './pages/FlightPage';
import Extra from './pages/Extra';
import Profile from './pages/Profile';
import { flypass, exclusiveDiscount, personalizedTravel, contact, about} from './constants';

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
          <Route path="/deal" element={<Extra {...exclusiveDiscount} />} />
          <Route path="/flypass" element={<Extra {...flypass}/>} />
          <Route path="/plans" element={<Extra {...personalizedTravel}/>} />
          <Route path="/contact" element={<Extra {...contact}/>} />
          <Route path="/about" element={<Extra {...about}/>} />
          <Route path="/flights/:flight_id" element={<FlightPage />} />
          <Route path="/profile/:user_id" element={<Profile />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
