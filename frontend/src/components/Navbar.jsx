import React, {useState, useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { styles } from '../styles';
import { FaSearch } from 'react-icons/fa';
import { logo } from '../assets';


const Navbar = () => {
    const location = useLocation();
    const [signupActive, setsignupActive] = useState(false);
    const [loginActive, setLoginActive] = useState(false);
    
    useEffect(() => {
        if(location.pathname === '/sign-up')
        {
            setsignupActive(true);
            setLoginActive(false);

        } else if(location.pathname === '/login') {
            setLoginActive(true);
            setsignupActive(false);

        } else if(location.pathname === '/'){
            setLoginActive(false);
            setsignupActive(false);
        }
        
    }, [location])
    
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

  return (
    <div className='w-full py-3 px-[100px] flex flex-row justify-between items-center bg-blue-400'>
        <Link to="/">
            <img src={logo} alt="logo" className='w-[130px] h-[60px] rounded-3xl object-cover'/>
        </Link>
        <div className='flex flex-row justify-end items-center'>
            <a onClick={() => scrollToElement('search')} className={`cursor-pointer mr-2 ${signupActive ? 'hidden':'block'} ${loginActive ? 'hidden':'block'}`}>
                <div className={`${styles.buttonTransition} ${styles.navButton} flex items-center justify-center flex-row`}>
                    <p className='px-2'>Search Flights </p>
                        <FaSearch className=' mr-2 text-blue-600'/>
                </div>
            </a>
            <Link to="sign-up">
                <div className='m-2'>
                    <p className={`${styles.buttonTransition} ${styles.navButton} ${signupActive && styles.activeButton}`}>Sign Up</p>
                </div>
            </Link>
            <Link to="login">
                <div className='m-2'>
                    <p className={`${styles.buttonTransition} ${styles.navButton} ${loginActive && styles.activeButton}`}>Log In</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar