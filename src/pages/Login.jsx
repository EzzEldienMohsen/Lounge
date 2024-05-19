import React from 'react';
import { postRequest as signNewUser } from '../utils';
import FormRow from './../formElements/FormRow';
import { user } from '../assets';
const Login = () => {
  const [values, setValues] = React.useState(user);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    signNewUser(values);
  };
  return (
    <div className="mt-[80px] md:mt-[96px] motion lg:mt-[114px]  flex flex-col justify-center items-center px-4 py-8 shadow-inner shadow-white border-t-4 border-[wheat] logIn">
      <h1 className="text-2xl md:text-3xl lg:Text-4xl text-white font-bold tracking-wider mb-4">
        Sign In
      </h1>
      <form method="POST" className="w-full" onSubmit={handleSubmit}>
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
          placeHolder="please insert your email"
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

        <button
          type="submit"
          className="btn btn-block logIn text-[darkblue] rounded-lg text-xl md:text-2xl mt-2 capitalize"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
