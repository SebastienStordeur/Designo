import React from "react";

const Textarea = (props) => {
  return (
    <textarea
      className="w-11/12 h-20 mx-auto pl-3.5 bg-peach text-white border-b-[1px] border-white placeholder:text-white placeholder:opacity-50 resize-none"
      placeholder="Your Message"
      name={props.name}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
    />
  );
};

export default Textarea;
