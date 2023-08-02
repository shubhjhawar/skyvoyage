import React, {useState, useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { styles } from '../styles';
import { FaSearch } from 'react-icons/fa';
import { logo } from '../assets';


const Navbar = () => {
    const location = useLocation();
    const [signupActive, setsignupActive] = useState(false);
    const [loginActive, setLoginActive] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const [id, setId] = useState(null);
    
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
    
    useEffect(() => {
        const info = localStorage.getItem('username')
        setId(localStorage.getItem('id'));
        if(info?.length > 0)
        {
            setUsername(info);
            setLoggedIn(true);
        } else {
            setUsername("");
            setLoggedIn(false);
        }

    }, [signupActive, loginActive, username])
    
    
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('username');
        setUsername('');
    }

  return (
    <div className='w-full py-3 px-[100px] flex flex-row justify-between items-center bg-blue-400'>
        <Link to="/">
            <img src={logo} alt="logo" className='w-[130px] h-[55px] rounded-3xl object-cover shadow-md'/>
        </Link>
        <div className='flex flex-row justify-center items-center'>
            <a onClick={() => scrollToElement('search')} className={`cursor-pointer mr-2 ${signupActive ? 'hidden':'block'} ${loginActive ? 'hidden':'block'}`}>
                <div className={`${styles.buttonTransition} ${styles.navButton} flex items-center justify-center flex-row px-[60px]`}>
                    <p className='px-2'>Search Flights </p>
                        <FaSearch className=' mr-2 text-blue-600'/>
                </div>
            </a>
        </div>
           {loggedIn ? (
            <div className="flex flex-row justify-end items-end">
                <a href={`/profile/${id}`} className='relative justify-center w-[40px] h-[40px] bg-gray-200 rounded-full mr-[10px]'>
                    <p className='absolute flex flex-row w-[40px] h-[40px] justify-center items-center text-[25px] uppercase font-semibold'>{username[0]}</p>
                </a>
                <button 
                    type="button"
                    onClick={handleLogout}
                    className={`${styles.navButton}`}
                >
                    Logout
                </button>
            </div>
           ) : (
            <div className='flex flex-row justify-end items-end'>
                <Link to="sign-up">
                    <div className='m-2'>
                        <p className={`w-[110px] ${styles.buttonTransition} ${styles.navButton} ${signupActive && styles.activeButton}`}>Sign Up</p>
                    </div>
                    </Link>
                <Link to="login">
                    <div className='m-2'>
                        <p className={`w-[110px] ${styles.buttonTransition} ${styles.navButton} ${loginActive && styles.activeButton}`}>Log In</p>
                    </div>
                </Link>
            </div>
           )}
    </div>
  )
}

export default Navbar