import React from "react";

const Card = (props) => {
  return (
    <article
      className={`w-11/12 h-[250px] overflow-hidden relative m-auto rounded-lg  ${
        props.className || ""
      }`}
    >
      {props.children}
    </article>
  );
};

export default Card;
