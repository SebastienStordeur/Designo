import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";

const Block = (props) => {
  return (
    <article className="px-6 mt-20 text-center md:h-52 md:mt-[8] md:flex md:text-left md:items-center lg:block lg:mt-40 lg:text-center lg:px-0 lg:mb-60 lg:mx-auto xl:max-w-[1111px]">
      <div className="w-52 h-52 relative mx-auto md:mx-0 overflow-hidden lg:mx-auto">
        <div className="absolute rounded-full w-full h-full bg-peach bg-opacity-20"></div>
        <Image
          src={props.data.image}
          alt={`${props.data.title} illustration`}
          layout="fill"
        />
      </div>
      <div className="md:w-3/4 md:ml-8 lg:mt-12 lg:w-auto">
        <h2 className="uppercase font-medium leading-6 tracking-[5px] text-dark-grey lg:text-xl">
          {props.data.title}
        </h2>
        {props.data.description && (
          <p className="leading-6 text-base mt-8 md:mt-4">
            {props.data.description}
          </p>
        )}
      </div>
    </article>
  );
};

export default Block;

Block.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};
