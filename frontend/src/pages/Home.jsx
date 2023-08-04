import React from 'react';

import Hero from "../components/Hero";
import SearchFlights from '../components/SearchFlights';
import Deal from '../components/Deal';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <SearchFlights />
      <Deal />
    </div>
    
  )
}

export default Home