import React from "react";

const Button = (props) => {
  return (
    <button
      className={`w-[152px] h-14 m-auto rounded-lg uppercase px-6 font-medium text-[15px] cursor-pointer ${
        props.className || ""
      }`}
      aria-label={props.label}
    >
      {props.children}
    </button>
  );
};

export default Button;
