import React from "react";
import Image from "next/image";

const Block = (props) => {
  return (
    <article className="px-6 mt-20 md:mt-[120px] lg:mt-40 text-center md:flex md:text-left md:items-center md:px-10 lg:block lg:text-center xl:max-w-[1111px] lg:px-0 lg:mx-auto">
      <div className="overflow-hidden w-52 h-52 relative m-auto md:mr-12">
        <Image
          src={props.data.image}
          alt={`${props.data.title} illustration`}
          layout="fill"
        />
      </div>
      <div className="md:h-[120px] lg:mt-12">
        <h2 className="uppercase font-medium leading-6 tracking-[5px] text-dark-grey lg:text-xl">
          {props.data.title}
        </h2>
        {props.data.description && (
          <p className="leading-6 text-base mt-8 md:mt-4 lg:max-w-[350px]">
            {props.data.description}
          </p>
        )}
      </div>
    </article>
  );
};

export default Block;
