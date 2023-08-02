import React from 'react'
import { styles } from '../styles';

const FormField = ({title, type, id, name, value, placeholder, handleChange}) => {
  return (
    <div className='mb-4 w-full'>
        <label className='font-semibold text-[15px]'>{title}:</label>
        <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${styles.formStyle}`}
        />
    </div>
  )
}

export default FormField