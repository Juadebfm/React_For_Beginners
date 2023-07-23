import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} {...inputProps} />
    </div>
  );
};

export default TextField;
