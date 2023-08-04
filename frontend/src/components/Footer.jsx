import React from 'react';
import {facebook, insta, twitter} from "../assets";
import { styles } from '../styles';
import { Link } from 'react-router-dom';


const Footer = () => {
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
    <div className="relative bottom-0 mt-[20px] flex flex-col items-center justify-center px-[20px]">
        <div className="flex flex-row justify-end items-center w-screen h-[30px] bg-gray-200 mx-2">
            <a onClick={() => scrollToElement('navbar')} >
                <p className='px-4 text-blue-600 cursor-pointer hover:underline font-semibold'>Back to Top</p>
            </a>
        </div>
        <div className="w-full h-[80px] py-[20px] w-screen bg-blue-900">
            <div className="flex flex-row justify-between items-center px-[200px] text-white ">
                <Link to="/contact" >
                    <h2 className='hover:underline'>Contact Us</h2>
                </Link >

                <div className={`flex flex-row justify-center items-center`}>
                   <img src={insta} alt="insta" className={`${styles.footerIcon}`}/>
                   <img src={twitter} alt="twit<img src={twitter" className={`${styles.footerIcon}`}/>
                   <img src={facebook} alt="facebook" className={`${styles.footerIcon}`}/>
                </div>

                <Link to="/about" >
                    <h2 className='hover:underline'>About Us</h2>
                </Link >
            </div>

            <div className='flex flex-row justify-center items-center py-2 mt-[10px] text-gray-400 text-[12px] font-semibold leading-[10px]'>
                <h2>Skyvoyage. All rights reserved.</h2>
            </div>
        </div>
    </div>
    )
}

export default Footer