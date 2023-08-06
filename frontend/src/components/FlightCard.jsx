import React from 'react';
import { Link } from 'react-router-dom';


const FlightCard = ({company, arrival, departure, price, distance, flight_id}) => {
  return (
    <Link to={`/flights/${flight_id}`} className="block">
        <div className="flex flex-col items-center px-[30px] mb-[20px]">
            <div className="flex flex-col w-full h-full bg-white shadow-md rounded-2xl p-[20px] cursor-pointer hover:shadow-lg">
                <div className="flex flex-row justify-between items-center mb-2">
                    <h2 className="font-bold text-[35px] text-blue-800">{company}</h2>
                    <h2 className="font-semibold text-[30px] text-green-500">${price}</h2>
                </div>
                <div className="flex flex-row justify-between items-center text-[15px]">
                    <p>{departure} - {arrival}</p>
                    <p>{distance}km</p>
                </div>
            <button
                type="button"
                className='flex flex-row items-center justify-center bg-blue-400 text-white rounded-full px-3 py-2 mt-2 w-[100px] shadow-lg hover:shadow-xl'
            >
                Book Now
            </button>
            </div>
            
        </div>
    </Link>


  )
}

export default FlightCard