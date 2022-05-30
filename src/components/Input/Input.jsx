import React from "react";

export const InputField = ({
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
  required,
  icon,
  onToggle
}) => {
  return (

    <div className='flex justify-between relative'>

   
    <input
      className="border-gray-200 border p-3 my-5 w-full"
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      required={required}
    />
    {icon && (
      <div className="icon my-auto  absolute __icon-input">
      <img src={icon} alt="" className={name.includes("password")? "cursor-pointer":""} onClick={onToggle} />
    </div>
    )}
    
    
     </div>
  );
};

export const TextArea = ({
  name,
  id,
  cols,
  rows,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-gray-200 border p-3 w-full my-5"
      rows={rows}
      required={required}
    ></textarea>
  );
};
