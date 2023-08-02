import React, {useState} from 'react';

import { SectionWrapper } from '../hoc';
import FormField from '../components/FormField';

const Login = () => {
  
  const [form, setForm] = useState({
    username:'',
    password:''
  })

  return (
    <div className='flex flex-wrap items-center w-full h-full bg-gray-100 rounded-xl px-3 py-2 '>
      <div className="p-2 mb-2 w-full flex flex-col items-center justify-center">
        <p className="font-bold text-black text-[30px] underline">Login</p>
      </div>
      <div className="mt-4 p-3 w-full flex flex-row justify-center ">
        <form className='w-full p-4 bg-white rounded shadow'>
          <FormField
            type="text"
            title="Username"
            id="username"
            name="username"
            value={form.username}
            placeholder="username"
            handleChange={()=>{}}
          />

          <FormField
            type="text"
            title="Password"
            id="password"
            name="password"
            value={form.password}
            placeholder="password"
            handleChange={()=>{}}
          />
        </form>
      </div>
    </div>
  )
}

export default SectionWrapper(Login, "login");