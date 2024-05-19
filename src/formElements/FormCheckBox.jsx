/* eslint-disable react/prop-types */
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const FormCheckBox = ({ name, label, value, handleChange, high, options,textColor }) => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();},[])
  return (
    <div 
    data-aos="zoom-in"
        data-aos-duration="2000"
    className={`flex flex-col justify-center  items-start w-[100%] `}>
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