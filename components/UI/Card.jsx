import React from "react";

const Card = (props) => {
  return (
    <article
      className={`w-full h-[250px] overflow-hidden relative rounded-lg  ${
        props.className || ""
      }`}
    >
      {props.children}
    </article>
  );
};

export default Card;
