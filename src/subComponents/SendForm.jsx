import React from 'react'
import { initialValues } from '../assets';
import { requestFn } from '../utils';
import FormRow from './../formElements/FormRow';


const sendTheMessage = async (data)=>{
    try {
        const resp = await requestFn.post("",data);
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}
const SendForm = () => {
    const [values, setValues] = React.useState(initialValues);
    const handleChange = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setValues({...values,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault;
        sendTheMessage(values)
    }
  return (
    <form onSubmit={handleSubmit} className="w-full mb-4">
        <FormRow name="name" type="text" value={values.name} handleChange={handleChange} placeHolder="please insert your name"/>
        <FormRow name="email" type="email" value={values.email} handleChange={handleChange} placeHolder="please insert your email"/>
        <FormRow name="message" type="text" value={values.message} handleChange={handleChange} placeHolder="please insert your name" high="300px"/>
    </form>
  )
}

export default SendForm