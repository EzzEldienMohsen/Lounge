import React from 'react'
import { postRequest as signNewUser } from '../utils';
import FormRow from './../formElements/FormRow';
import { newUser } from '../assets';
import { Link } from 'react-router-dom';

const SignUp = () => {
     const [values, setValues] = React.useState(newUser);
     const handleChange = (e) => {
       const name = e.target.name;
       const value = e.target.value;
       setValues({ ...values, [name]: value });
     };
     const handleSubmit = (e) => {
       e.preventDefault();
       signNewUser(values);

     };
  return (
    <div className="mt-[80px] md:mt-[96px] motion lg:mt-[114px]  flex flex-col justify-center items-center px-4 py-8 shadow-inner shadow-white border-t-4 border-[wheat] logIn">
      <h1 className="text-2xl md:text-3xl lg:Text-4xl text-white font-bold tracking-wider mb-4">
        Sign Up
      </h1>
      <form method="POST" className="w-full" onSubmit={handleSubmit}>
        <FormRow
          name="name"
          type="text"
          value={values.name}
          handleChange={handleChange}
          placeHolder="please insert your name"
          textColor="white"
        />
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          placeHolder="please insert your password"
          textColor="white"
        />
        <FormRow
          name="confirm"
          type="password"
          value={values.confirm}
          handleChange={handleChange}
          placeHolder="confirm the password"
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
        <button
          type="submit"
          className="btn btn-block logIn text-[darkblue] rounded-lg text-xl md:text-2xl mt-2 capitalize"
        >
          submit
        </button>
      </form>
      <p className="text-white font-semibold text-md md:text-lg lg:text-xl">
        already a member{' '}
        <Link to="/login" className="text-[darkblue] btn bg-[white] mt-4">
          log in
        </Link>{' '}
      </p>
    </div>
  );
}

export default SignUp