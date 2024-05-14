import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" px-6 py-2 bg-sky-500 hover:bg-gray-200 hover:text-gray-500 font-semibold transition-all duration-300 text-white rounded-full capitalize"
    >
      {children}
    </button>
  );
};

export default Button;
