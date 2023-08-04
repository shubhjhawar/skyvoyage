import React, {useState,  useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CustomPopup = ({ message, onConfirm, onCancel }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-[20px] rounded shadow-md rounded-lg">
          <p className="mb-4">{message}</p>
          <div className="flex justify-center">
            <button onClick={onCancel} className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 rounded">
              Cancel
            </button>
            <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };


const FlightPage = () => {
    const [data, setData] = useState(null);
    const [isFlight, setIsFlight] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    const [confirmBooking, setConfirmBooking] = useState(false);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/flights/${params.flight_id}`

        fetch(url,{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then((response)=> {
            if(response.ok)
            {
                return response.json().then(data =>{
                    setData(data.data);
                  });
                
            } else {
                return response.json().then(data =>{
                    setIsFlight(false);
                  });
            }
        });

    }, [])
    
    const HandleSubmit = () => {
        setConfirmBooking(true);
    }

    const HandleBooking = () => {
        const url = `http://127.0.0.1:8000/api/flights/${params.flight_id}`
        const user = localStorage.getItem('username');
        const user_id = localStorage.getItem('id');
        const username = {'username':user}

        fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(username)
        })
        .then((response)=> {
            if(response.ok)
            {
                return response.json().then(data =>{
                    console.log(data)
                    navigate(`/user/${user_id}`)
                    });
                
            } else {
                return response.json().then(data =>{
                    console.log(data)
                    alert("something went wrong")
                    setConfirmBooking(false);
                    });
            }
        })
        .catch((errors)=>
            console.log(errors)  
        );
        
    }

    return (
    <div className={`${styles.pageLayout}`}>
        {isFlight ? ( 
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-[100px] font-semibold'>{data?.company}</h1>
                <div className='flex flex-row justify-between items-center w-[1000px]'>
                    <p className='text-[30px] mx-auto'>{data?.departure}</p>
                    <AiOutlineArrowRight className='w-[30px] h-[40px] mx-2 mt-2'/>
                    <p className='text-[30px] mx-auto'>{data?.arrival}</p>
                </div>
                <div className='m-[20px] p-1'>
                    <p className='text-[20px] italic underline'>{data?.distance} km</p>
                </div>
                <div className='flex flex-row justify-between items-center w-[1000px] m-[20px]'>
                    <p className='text-[45px] mx-auto text-red-500 font-extrabold'>${data?.price}</p>
                    <button
                        type="button"
                        onClick={HandleSubmit}
                        className={`${styles.homeButton} text-[25px] mx-auto`}
                    >
                        Book Flight
                    </button>

                </div>

                {confirmBooking && <CustomPopup message="Are you sure you want to book this flight?" onConfirm={HandleBooking} onCancel={()=>setConfirmBooking(false)} />}
            </div>
        ) : (
            <div className='flex flex-col justify-center items-center '>
                <h1 className='font-extrabold text-[230px]'>404</h1>
                <p className='text-[18px]'>page not found</p>
            </div>
        )}
    </div>
    )
}

export default SectionWrapper(FlightPage, "");