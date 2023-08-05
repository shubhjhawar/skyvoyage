import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SectionWrapper } from '../hoc';
import FormField from '../components/FormField';
import { styles } from '../styles';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const flight_id = new URLSearchParams(location.search).get('flight_id');

  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);
  
  const [form, setForm] = useState({
    username:'',
    password:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prevData) => ({...prevData, [name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    fetch('http://127.0.0.1:8000/api/login', {
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(form)
    })
    .then((response) =>{
      if(!response.ok)
      {
        return response.json().then(data =>{
          console.log(data.error);
          setIsError(true);
          setErrorMsg(data.error);
          setLoading(false);
        });
      } else {
        return response.json().then(data => {
          localStorage.setItem('id', data.data.id);
          localStorage.setItem('username', data.data.username);
          
          if(flight_id)
          {
            navigate(`/flights/${flight_id}`)
          } else {
            navigate('/')
          }

        })
      }
    })
  }
  return (
    <div className={`${styles.pageLayout}`}>
      <div className="p-2 mb-2 w-full flex flex-col items-center justify-center">
        <p className="font-bold text-black text-[30px] underline">Login</p>
      </div>
      <div className="mt-4 p-3 w-full flex flex-row justify-center ">
        <form 
          className='w-full p-4 bg-white rounded shadow'
          onSubmit={handleSubmit}
        >
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
            type="text"
            title="Password"
            id="password"
            name="password"
            value={form.password}
            placeholder="password"
            handleChange={handleChange}
          />

          {isError && (
            <div className='text-red-400 mt-[20px] ml-1 font-semibold text-[15px]'>{errorMsg}</div>
          )}

          <button
            type="submit"
            className={`w-full text-semibold p-2 mt-3 rounded-full text-[20px] bg-green-300 hover:bg-green-400 ${styles.buttonTransition}`}
          >
            {loading ? <p>Logging in</p> : <p>Login</p>}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SectionWrapper(Login, "login");