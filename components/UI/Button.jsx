/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Button = forwardRef((props, _ref) => {
  return (
    <button
      className={`disabled:cursor-not-allowed w-[152px] h-14 m-auto rounded-lg uppercase px-6 font-medium text-[15px] cursor-pointer ${
        props.className || ""
      }`}
      aria-label={props.label}
    >
      {props.children}
    </button>
  );
});

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};
