/* eslint-disable react/prop-types */
const FormRow = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeHolder,
  high,
}) => {
  return (
    <div className="flex flex-col justify-center  items-start w-[100%] shadow-xl shadow-white">
      <label className="mt-4 capitalize text-lg md:text-xl lg:text-2xl text-white" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        className={` py-1 px-4 border-black border-2 rounded-md w-[100%] ${
          high ? `h-[${high}]` : ''
        }`}
      />
    </div>
  );
};

export default FormRow;
