import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { styles } from './styles';

//import logo and components
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <header className='w-full py-3 px-[100px] flex flex-row justify-between items-center bg-blue-400'>
      <Link to="/">
        <img src="something" alt="logo" className='w-30 h-30 rounded-full object-contain'/>
      </Link>
      <div className='flex flex-row justify-end items-center'>
        <Link to="sign-up">
          <div className='m-2'>
            <p className={`${styles.buttonTransition} ${styles.navButton}`}>Sign Up</p>
          </div>
        </Link>
        <Link to="login">
          <div className='m-2'>
            <p className={`${styles.buttonTransition} ${styles.navButton}`}>Log In</p>
          </div>
        </Link>
      </div>
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
