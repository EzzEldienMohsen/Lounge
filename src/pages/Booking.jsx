import React from 'react'
import { postRequest as sendTheReservation } from '../utils';
import { bookingValues } from '../assets';
import FormRow from './../formElements/FormRow';
import FormCheckBox from '../formElements/FormCheckBox';

const Booking = () => {
     const [values, setValues] = React.useState(bookingValues);
     const handleChange = (e) => {
       const name = e.target.name;
const value =
  e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
  setValues({ ...values, [name]: value });
     };
     const handleSubmit = (e) => {
       e.preventDefault();
       sendTheReservation(values);
           console.log(values)

     };
  return (
    <div className="mt-[80px] md:mt-[96px] lg:mt-[114px]  flex flex-col justify-center items-center px-4 py-8 shadow-inner shadow-[darkblue] border-t-4 border-[wheat] booking">
      <h1 className="text-2xl md:text-3xl lg:Text-4xl text-[blue] font-bold tracking-wider mb-4">
        Book Now
      </h1>
      <form method="POST" className="w-full" onSubmit={handleSubmit}>
        <FormRow
          name="name"
          type="text"
          value={values.name}
          placeHolder="please insert your name"
          handleChange={handleChange}
          textColor="darkblue"
        />
        <FormRow
          name="email"
          type="email"
          value={values.email}
          placeHolder="please insert your email"
          handleChange={handleChange}
          textColor="darkblue"
        />
        <FormRow
          name="phone"
          type="tel"
          value={values.phone}
          placeHolder="please insert your phone"
          handleChange={handleChange}
          textColor="darkblue"
        />
        <FormRow
          name="date"
          type="date"
          value={values.date}
          placeHolder="please when would you like to visit"
          handleChange={handleChange}
          textColor="darkblue"
        />
        <FormRow
          name="guests"
          type="number"
          value={values.guests}
          placeHolder="number of guests"
          handleChange={handleChange}
          textColor="darkblue"
        />
        <FormRow
          name="time"
          type="time"
          value={values.time}
          placeHolder="please insert the hour you would prefer"
          handleChange={handleChange}
          textColor="darkblue"
        />
        <FormCheckBox
          name="service"
          value={values.service}
          options={values.options}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-block booking text-[darkblue] rounded-lg text-xl md:text-2xl mt-2 capitalize"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Booking