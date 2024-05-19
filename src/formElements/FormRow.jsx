/* eslint-disable react/prop-types */
const FormRow = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeHolder,
  high,
  min,
  textColor
}) => {
  return (
    <div className={`flex flex-col justify-center  items-start w-[100%] `}>
      <label className={`my-4 capitalize text-lg md:text-xl lg:text-2xl text-[${textColor}]`} htmlFor={name}>
        {label || name}
      </label>
      <input
      required
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        min={min || 1}
        className={` py-1 px-4 border-sky-400 border-2 rounded-md w-[100%] ${
          high ? `h-[${high}]` : ''
        }`}
      />
    </div>
  );
};

export default FormRow;
