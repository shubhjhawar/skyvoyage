import React from 'react';

import Hero from "../components/Hero";
import SearchFlights from '../components/SearchFlights';
import Deal from '../components/Deal';
import FlyPass from '../components/FlyPass';
import Plans from '../components/Plans';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <SearchFlights />
      <Deal />
      <Plans />
      <FlyPass />
    </div>
    
  )
}

export default Home