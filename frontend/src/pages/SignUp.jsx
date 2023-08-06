import React, { useState } from 'react';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

import FormField from '../components/FormField';
import { SectionWrapper } from '../hoc';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    gender: "",
    phone_number: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(form);

    fetch('https://shubhj45.pythonanywhere.com/api/signup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    })
    .then((response) => {
      if(!response.ok)
      {
        return response.json().then(data =>{
          console.log(data.error);
          setIsError(true);
          setErrorMsg(data.error);
          setLoading(false);
        });
      }
      else{
        return response.json().then(data => {
          console.log(data);
          localStorage.setItem('id', data.id);
          localStorage.setItem('username', data.username);
          setLoading(false);
          navigate("/");
        });
      }
    })
    
    .catch(error =>{
      console.log("error")
      console.log(error);
    });


  }

  return (
    <div className={`${styles.pageLayout}`}>
      <div className="p-2 mb-2 w-full flex flex-col items-center justify-center">
        <p className="font-bold text-black text-[30px] underline">Create New Account</p>
      </div>
      <div className="mt-4 p-3 w-full flex flex-row justify-center ">
        <form className='w-full p-4 bg-white rounded shadow'>
          <FormField
            type="text"
            title="First Name"
            id="first_name"
            name="first_name"
            value={form.first_name}
            placeholder="First Name"
            handleChange={handleChange}
          />

          <FormField
            type="text"
            title="Last Name"
            id="last_name"
            name="last_name"
            value={form.last_name}
            placeholder="Last Name"
            handleChange={handleChange}
          />

          <FormField
            type="text"
            title="Username"
            id="username"
            name="username"
            value={form.username}
            placeholder="username"
            handleChange={handleChange}
          />

          <FormField
            type="email"
            title="Email"
            id="email"
            name="email"
            value={form.email}
            placeholder="email"
            handleChange={handleChange}
          />

          <FormField
            type="password"
            title="Password"
            id="password"
            name="password"
            value={form.password}
            placeholder="password"
            handleChange={handleChange}
          />

          <FormField
            type="text"
            title="Gender"
            id="gender"
            name="gender"
            value={form.gender}
            placeholder="gender"
            handleChange={handleChange}
          />

          <FormField
            type="type"
            title="Phone Number"
            id="phone_number"
            name="phone_number"
            value={form.phone_number}
            placeholder="1234..."
            handleChange={handleChange}
          />

          <FormField
            type="text"
            title="Address1"
            id="address1"
            name="address1"
            value={form.address1}
            placeholder="address1"
            handleChange={handleChange}
          />

            <FormField
            type="type"
            title="Address2"
            id="address2"
            name="address2"
            value={form.address2}
            placeholder="address2"
            handleChange={handleChange}
          />

          <FormField
            type="text"
            title="City"
            id="city"
            name="city"
            value={form.city}
            placeholder="city"
            handleChange={handleChange}
          />

          <FormField
            type="type"
            title="State"
            id="state"
            name="state"
            value={form.state}
            placeholder="state"
            handleChange={handleChange}
          />

          <FormField
            type="text"
            title="Country"
            id="country"
            name="country"
            value={form.country}
            placeholder="country"
            handleChange={handleChange}
          />

          {isError && (
            <div className='text-red-400 mt-[20px] ml-1 font-semibold text-[15px]'>{errorMsg}</div>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className={`w-full text-semibold p-2 mt-3 rounded-full text-[20px] bg-green-300 hover:bg-green-400 ${styles.buttonTransition}`}
          >
            {loading ? <p>Submitting</p> : <p>Submit</p>}
          </button>

        </form>
      </div>
    </div>
  );
};


export default SectionWrapper(SignUp, "signup");
// export default SignUp;