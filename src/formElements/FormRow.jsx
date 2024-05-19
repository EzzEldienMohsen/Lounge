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
    <div className="flex flex-col justify-center my-4 items-start w-[100%] ">
      <label className="my-2 capitalize text-lg md:text-xl lg:text-2xl text-white" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        className={`mb-4 py-1 px-4 border-black border-2 rounded-md w-[100%] ${
          high ? `h-[${high}]` : ''
        }`}
      />
    </div>
  );
};

export default FormRow;
