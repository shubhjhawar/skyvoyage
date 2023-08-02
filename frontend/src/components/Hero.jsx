import React from 'react';

import {banner, deal} from "../assets";
import { styles } from '../styles';

const Hero = () => {
  return (
    <div>
        <div className="">
            <img src={banner} alt="banner" className="w-full -mt-[12px]"/>
        </div>

        <div className="flex flex-row justify-center items-center -mt-[100px]">
          <a className={`${styles.bannerIcon}`} href="#deal">
            <img src={deal} alt="background" className='absolute w-[250px] h-[250px] rounded-xl object-contain z-[0] '/>
            <h2 className='relative text-[50px] font-semibold ml-2 text-blue-600'>Deal</h2>
            <p className='relative m-2 font-semibold  text-red-600 text-[19px]'>20% Off Flights to Europe:</p>
            <p className='relative m-2 text-[17px] mt-3 font-semibold leading-[25px]'>Book your flights to Europe within the next 72 hours and get an exclusive 20% discount on your ticket price</p>
          </a>
          <a className={`${styles.bannerIcon} bg-black`}>
            
          </a>

          <a className={`${styles.bannerIcon} bg-blue-600`}>
            <h2 className='relative text-[50px] font-semibold ml-2 text-white'>Fly Pass</h2>
            <p className='relative m-2 font-semibold mt-3 text-[#263547] text-[25px] flex flex-col justify-center items-center'>Unlock the Skies: Fly Pass – Your Ticket to Freedom!</p>
          </a>
        </div>

    </div>
  )
}

export default Hero