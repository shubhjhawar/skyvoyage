import React, {useState,  useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { AiOutlineArrowRight } from 'react-icons/ai';
import * as Loader from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const CustomPopup = ({ message, onConfirm, onCancel }) => {
    return (
    <div className={`${styles.popupLayout}`}>
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

const Loading = () => {
    return (
        <div className={`${styles.popupLayout}`}>
            <Loader.TailSpin
            type="Circles"
            color="#00BBFF"
            height={50}
            width={50}
            className="m-5"
            />
        </div>

    );
};

const NavigateTo = ({message}) => {
    const [count, setCount] = useState(3);

    const navigate = useNavigate();
    const user_id = localStorage.getItem('id');


    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000)
    
      return () => {
        clearInterval(timer);
      }
    }, [])

    useEffect(() => {
        if(count == 0)
        {
            navigate(`/profile/${user_id}`)
            
        }
    }, [count])
    
    return (
        <motion.div
        variants={fadeIn('down', 'tweep', 0.25, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{once:true, amount:0.25}}
        className={`${styles.popupLayout}`}
        >
            <div className="bg-white p-[20px] rounded shadow-md rounded-lg flex flex-col justify-center items-center">
                <p className="mb-4 font-bold text-[20px]">{message}</p>
                <p className="mb-4">Redirecting to Profile in {count}...</p>
            </div>
        </motion.div>
    )
}


const FlightPage = () => {
    const [data, setData] = useState(null);
    const [isFlight, setIsFlight] = useState(true);
    const params = useParams();

    const [confirmBooking, setConfirmBooking] = useState(false);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();
    const user_info = localStorage.getItem('username');
    console.log('user_info:', user_info);

    useEffect(() => {
    
        if (user_info ===  null) {
            console.log("no user found");
            // navigate('/login');
            navigate(`/login?flight_id=${params.flight_id}`);
        } else {
            console.log('User found:', user_info);
        }
    }, []);

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

    const HandleBooking = async () => {
        try{
            const url = `http://127.0.0.1:8000/api/flights/${params.flight_id}`
            const user = localStorage.getItem('username');
            const username = {'username':user}

            const response = await fetch(url, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(username)
            })

            const data = await response.json();
            setConfirmBooking(false);
            setLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            setLoading(false);
            setRedirect(true);

            // await new Promise((resolve) => setTimeout(resolve, 1500));

        }
        catch(errors) {
        alert("something went wrong, Try Again!")
        console.log(errors)  
        }


        // .then((response)=> {
        //     if(response.ok)
        //     {
        //         return response.json().then(data =>{
        //             console.log(data)
        //             setConfirmBooking(false);
        //             setLoading(true);
        //             // await new Promise((resolve) => setTimeout(resolve, 1000));

        //             // navigate(`/user/${user_id}`)
        //             });
                
        //     } else {
        //         return response.json().then(data =>{
        //             console.log(data)
        //             alert("something went wrong")
        //             setConfirmBooking(false);
        //             });
        //     }
        // })
        // .catch((errors)=>
        //     console.log(errors)  
        // );
        
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
                {loading && <Loading />}
                {redirect && <NavigateTo message="Congratulations! Flight booked Successfully" />}
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