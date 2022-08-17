import React from "react";
import Image from "next/image";

const Block = (props) => {
  return (
    <article className="px-6 mt-20 text-center">
      <div className="overflow-hidden w-52 h-52 relative m-auto">
        <Image
          src={props.data.image}
          alt={`${props.data.title} illustration`}
          layout="fill"
        />
      </div>
      <h2 className="uppercase font-medium leading-6 tracking-[5px] text-dark-grey">
        {props.data.title}
      </h2>
      {props.data.description && (
        <p className="leading-6 text-base mt-8">{props.data.description}</p>
      )}
    </article>
  );
};

export default Block;
