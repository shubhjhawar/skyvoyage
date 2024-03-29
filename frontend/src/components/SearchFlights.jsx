import React, {useState} from 'react';

import { AiOutlineArrowRight } from 'react-icons/ai';
import {SectionWrapper} from "../hoc";
import { styles } from '../styles';
import * as Loader from 'react-loader-spinner';
import FlightCard from './FlightCard';
import { flightPrompts } from '../constants';


const SearchFlights = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [searched, setSearched] = useState(false);
    const [searchForm, setSearchForm] = useState({
        arrival:"",
        departure:"",
    })

    const [flights, setFlights] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchForm((prevData) => ({ ...prevData, [name]: value }));
    };

    const addFlights = () => {
        const randomIndex =Math.floor(Math.random() * flightPrompts.length);
        const randomFlight = flightPrompts[randomIndex];
        console.log(randomFlight)

        setSearchForm((prevData) => ({...prevData, arrival:randomFlight.arrival, departure:randomFlight.departure}))
        
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    console.log(searchForm);

    const response = await fetch('https://shubhj45.pythonanywhere.com/api/get-flights', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(searchForm),
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const data = await response.json();
        setFlights(data.data);

        setIsSearching(false);
        setSearched(true);
    };      

  return (
        <div>
            <div className={`${styles.homeComponent}`}>
                <h1 className='text-[45px] font-bold mb-[20px] ml-[20px] pb-2'>Find the best flight for yourself, here!</h1>
                <form className="flex flex-row justify-center items-center mb-[20px]"
                    onSubmit={handleSubmit}
                >
                    <button
                     type="button"
                     onClick={addFlights}
                     className={`p-2 m-2 rounded-md text-white shadow-md hover:bg-gray-600 bg-gray-400 mb-[15px]`}
                    >
                        surprise me
                    </button>
                    <input
                        type="text"
                        value={searchForm.departure}
                        id="departure"
                        name="departure"
                        placeholder="From.."
                        onChange={(e) => handleChange(e)}
                        className={`${styles.searchInput}`}
                    />
                    <AiOutlineArrowRight className='w-[20px] h-[20px] mx-2 items-center mt-2'/>
                    <input 
                        type="text"
                        value={searchForm.arrival}
                        id="arrival"
                        name="arrival"
                        placeholder="To.."
                        onChange={(e) => handleChange(e)}
                        className={`${styles.searchInput}`}
                    />

                    <button
                        type="submit"
                        className={`${styles.homeButton} ml-2 mb-5 bg-blue-600 py-2 px-4 text-white`}
                        >
                    {isSearching ? "Searching..." : "Search Flights"}
                    </button>
                </form>
                <div>
                {isSearching ? (
                    <div className='flex flex-row items-center justify-center mt-3 p-2'>
                        <Loader.TailSpin
                        type="Circles"
                        color="#00BBFF"
                        height={50}
                        width={50}
                        className="m-5"
                        />
                    </div>
                    ) : searched && (
                    <>
                        {flights?.length > 0 ? (
                        <div> 
                            <p className='flex flex-col items-center mb-2 p-2 font-semibold'>The following flights are available Monday-Sunday</p>
                            {flights.map((flight) => (
                            <FlightCard key={flight.id} {...flight} />
                            ))}
                        </div>
                        ) : (
                            <div className='flex flex-col items-center mt-[20px] font-semibold pb-2'>We are afraid, we do not offer any flights at the moment.</div>
                            // <div className='flex flex-col items-center mt-[20px] font-semibold pb-2'>We are afraid, we do not offer any flights from {searchForm.departure} to {searchForm.arrival} at the moment.</div>
                        )}
                    </>
                    )}
                </div>
            </div>
        </div>
  )
}

export default SectionWrapper(SearchFlights, "search");
// export default SearchFlights;