import React, {useState} from 'react';

import { AiOutlineArrowRight } from 'react-icons/ai';
import {SectionWrapper} from "../hoc";
import { styles } from '../styles';

const SearchFlights = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchForm, setSearchForm] = useState({
        from:"",
        to:"",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchForm((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        setIsSearching(true);

        console.log(searchForm);

        setIsSearching(false);


    }

  return (
        <div id="search">
            <div className="flex flex-col  w-full h-full bg-gray-100 m-2 p-3 rounded-3xl">
                <h1 className='text-[45px] font-bold mb-[20px] ml-[20px] underline'>Search Flights</h1>
                <form className="flex flex-row justify-center items-center mb-[20px]">
                    <input
                        type="text"
                        value={searchForm.from}
                        id="from"
                        name="from"
                        placeholder="From.."
                        onChange={(e) => handleChange(e)}
                        className={`${styles.searchInput}`}
                    />
                    <AiOutlineArrowRight className='w-[20px] h-[20px] mx-2 items-center mt-2'/>
                    <input 
                        type="text"
                        value={searchForm.to}
                        id="to"
                        name="to"
                        placeholder="To.."
                        onChange={(e) => handleChange(e)}
                        className={`${styles.searchInput}`}
                    />

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={`${styles.buttonTransition} ml-3 bg-blue-600 py-2 px-4 rounded-full text-white`}
                        >
                    {isSearching ? "Searching..." : "Search"}
                    </button>
                </form>
            </div>
        </div>
  )
}

export default SectionWrapper(SearchFlights, "search");
// export default SearchFlights;