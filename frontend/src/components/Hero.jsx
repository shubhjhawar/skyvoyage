import React from 'react';
import { motion } from 'framer-motion';

import {banner, deal} from "../assets";
import { styles } from '../styles';
import { fadeIn, slideIn } from '../utils/motion';


const Hero = () => {
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
    <div className="">
        <div className="relative">
            <img src={banner} alt="banner" className="w-full -mt-[12px] z-[0]"/>
            <motion.p
              variants={slideIn('left', 'spring', 0.5, 2)}
              initial="hidden" 
              animate="show" 
              className="absolute top-0 text-[200px] font-semibold uppercase z-10 text-blue-200 px-2 text-shadow-md "
            >
              skyvoyage
            </motion.p>
            <motion.p
              variants={slideIn('right', 'tweep', 0.25, 2)}
              initial="hidden" 
              animate="show" 
              className="absolute top-[220px] text-[30px] mt-[20px] font-semibold  z-10 text-blue-700 px-2 ml-2 italic"
            >
              Your Journey to the Skies...
            </motion.p>

            <motion.p
              variants={fadeIn('up', 'tweep', 1, 1)}
              initial="hidden" 
              animate="show" 
              className="absolute flex flex-col items-center justify-center top-[400px] left-[333px] text-[20px] mt-[20px] font-semibold  z-10  px-2 ml-2"
            >
              scroll down to find best flights for your upcoming travels!!!
            </motion.p>

        </div>

        <div className="flex flex-row justify-center items-center -mt-[100px]">
          <a className={`${styles.bannerIcon}`} onClick={() => scrollToElement('search')}>
            <img src={deal} alt="background" className='absolute w-[250px] h-[250px] rounded-xl object-contain z-[0] '/>
            <h2 className='relative text-[50px] font-semibold ml-2 text-blue-600 '>Deal</h2>
            <p className='relative m-2 font-semibold  text-red-600 text-[19px]'>20% Off Flights to Europe:</p>
            <p className='relative m-2 text-[17px] mt-3 font-semibold leading-[25px]'>Book your flights to Europe within the next 72 hours and get an exclusive 20% discount on your ticket price</p>
          </a>
          <a className={`${styles.bannerIcon} bg-black z-10`}>
            
          </a>

          <a className={`${styles.bannerIcon} bg-blue-600 z-10`}>
            <h2 className='relative text-[50px] font-semibold ml-2 text-white'>Fly Pass</h2>
            <p className='relative m-2 font-semibold mt-3 text-[#263547] text-[25px] flex flex-col justify-center items-center'>Unlock the Skies: Fly Pass – Your Ticket to Freedom!</p>
          </a>
        </div>

    </div>
  )
}

export default Hero