import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-11/12 h-10 mx-auto bg-peach border-b-[1px] border-white placeholder:text-white"
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
    />
  );
};

export default Input;
