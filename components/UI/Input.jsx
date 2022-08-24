import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-11/12 h-10 mx-auto pl-3.5 bg-peach text-white border-b-[1px] border-white placeholder:text-white placeholder:opacity-50"
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
    />
  );
};

export default Input;
