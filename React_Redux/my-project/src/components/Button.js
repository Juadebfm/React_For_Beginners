import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button className="bg-indigo-600 text-white py-2 px-6 my-10 hover:bg-indigo-700">
      {children}
    </button>
  );
};

export default Button;
