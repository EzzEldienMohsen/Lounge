import React from 'react'
import { initialValues } from '../assets';
import { postRequest as sendTheMessage } from '../utils';
import FormRow from './../formElements/FormRow';



const SendForm = () => {
    const [values, setValues] = React.useState(initialValues);
    const handleChange = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setValues({...values,[name]:value})
    }
    const handleSubmit =(e)=>{
       e.preventDefault();
        sendTheMessage(values)
    }
  return (
    <form onSubmit={handleSubmit} method="POST" className="w-full mb-4">
      <FormRow
        name="name"
        type="text"
        value={values.name}
        handleChange={handleChange}
        placeHolder="please insert your name"
        textColor="white"
      />
      <FormRow
        name="email"
        type="email"
        value={values.email}
        handleChange={handleChange}
        placeHolder="please insert your email"
        textColor="white"
      />
      <FormRow
        name="message"
        type="text"
        value={values.message}
        handleChange={handleChange}
        placeHolder="please insert your name"
        high="300px"
        textColor="white"
      />
      <button
        type="submit"
        className="btn btn-block contact text-[white] rounded-lg text-xl md:text-2xl mt-2 capitalize"
      >
        submit
      </button>
    </form>
  );
}

export default SendForm