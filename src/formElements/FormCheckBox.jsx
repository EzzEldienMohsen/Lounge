/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { bookingValues } from '../assets';

const FormCheckBox = ({ name, label, value, handleChange, high, options,textColor }) => {
  return (
    <div className={`flex flex-col justify-center  items-start w-[100%] `}>
      <label
        className={`my-4 capitalize text-lg md:text-xl lg:text-2xl text-[${textColor}]`}
        htmlFor={name}
      >
        {label || name}
      </label>
      <select
        id={name}
        value={value}
        name={name}
        onChange={handleChange}
        className={` py-1 px-4 border-sky-400 border-2 rounded-md w-[100%] ${
          high ? `h-[${high}]` : ''
        }`}
   
        required
      >
        {options.map((a) => {
          return (
            <option key={a} value={a}>
              {a}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormCheckBox