import React from "react";
import Spinner from '../Spinner/Spinner';
import "./styles.scss";

export const CustomButton = ({ type, onClick, buttonText, disabled, className, isLoading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded btn-bg py-3 px-4 flex justify-center text-center text-white ${
        disabled && "disabled"
      } && ${className}`}
    >

      {isLoading ? <Spinner/> :  buttonText}
     
    </button>
  );
};
