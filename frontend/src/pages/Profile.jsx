import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Profile = () => {
    const [profile, setProfile] = useState(true);
    const params= useParams();
    const navigate = useNavigate();

    const data = {
        "firstname": "Shubh",
        "lastname": "Jhawar",
        "username": "Shubhj45",
        "email": "shubh@gmail.com",
    };

    const [userData, setUserData] = useState(null);
    const [userFlights, setUserFlights] = useState(null);

    useEffect(() => {
        const url = `https://shubhj45.pythonanywhere.com/api/profile/${params.user_id}`;

        fetch(url, {
            method:'GET',
            headers:{"Content-Type":"application/json"},
        })
        .then((response) => response.json())
        .then((data) =>
            {
                setUserData(data.data);
                setUserFlights(data.flights);
            }
            );
            
            
    }, [])


    return (
        <div className={`${styles.pageLayout}`}>
            <h1 className='font-bold text-[45px]  italic'>@{userData?.username}</h1>
            <h1 className='font-semibold text-[25px]'>{userData?.first_name}&nbsp;{userData?.last_name}</h1>
            <h1 className='text-[15px] mb-[20px]'>email - {userData?.email}</h1>

            <div className='flex flex-row justify-between items-center'>
                <div
                    className={`${styles.profilebutton}`}
                    onClick={() => setProfile(true)}
                >
                    <p className={`mt-[10px] ${profile ? 'text-blue-400 ' : ' text-gray-400'}`}>Profile</p>
                    <div className={`${styles.profileline} ${profile ? 'h-[10px]  ' : 'h-[2px] '} `} />
                </div>
                <div
                    className={`${styles.profilebutton}`}
                    onClick={() => setProfile(false)}
                >
                    <p className={`mt-[10px] ${profile ? ' text-gray-400  ' : ' text-blue-400'}`}>Flights</p>
                    <div className={`${styles.profileline} ${profile ? 'h-[2px]' : 'h-[10px]'}  `} />
                </div>
            </div>

            {profile ? (
                <div className={`${styles.profileContainer}`}>
                    <div className={`${styles.profileHeadingBorder}`}>
                        <p className={`${styles.profileHeading}`}>My Details</p>
                    </div>
                    <div className='font-semibold text-[18px]'>
                        <p>Gender - {userData?.gender}</p>
                        <p>Contact Number - {userData?.phone_number}</p>
                        <p>Address - {userData?.address1} {userData?.address2}</p>
                        <p>City - {userData?.city}</p>
                        <p>State - {userData?.state}</p>
                        <p>Country - {userData?.country}</p>
                    </div>
                </div>
            ) : (
                <div className={`${styles.profileContainer}`}>
                    <div className={`${styles.profileHeadingBorder}`}>
                        <p className={`${styles.profileHeading}`}>My Flights</p>
                    </div>
                    {userFlights.length!==0 ? (
                        userFlights.map((flight) => (
                            <div className={`my-[10px] p-1`}>
                                <div className="flex flex-col items-center px-[30px] mb-[20px]">
                                    <div className="flex flex-col w-full h-full bg-white shadow-md rounded-2xl p-[20px] cursor-pointer hover:shadow-lg">
                                    <div className="flex flex-row justify-between items-center mb-2">
                                    <h2 className="font-bold text-[35px] text-blue-800">{flight?.company}</h2>
                                    <h2 className="font-semibold text-[30px] text-green-500">${flight?.price}</h2>
                                    </div>
                                    <div className="flex flex-row justify-between items-center text-[15px]">
                                    <p>{flight?.departure} - {flight?.arrival}</p>
                                    <p>{flight?.distance}km</p>
                                    </div>
                                    </div>

                                    </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex flex-col items-center justify-center mt-[10px] text-[15px]'>
                            <h1>You have not booked any flights</h1>
                            <h1 className='mb-[10px]'>Click on the button and book one right now</h1>
                            <button
                                type="button"
                                className={`${styles.activeButton} `}
                                onClick={() => navigate('/')}
                            >
                                Go
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SectionWrapper(Profile, "profile");
