import React from "react";

const Line = (props) => {
  return <div className={`w-6 h-1 bg-black ${props.className || ""}`}></div>;
};

export default Line;
