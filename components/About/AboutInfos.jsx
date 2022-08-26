import React from "react";
import PropTypes from "prop-types";

const AboutInfos = (props) => {
  const splittedArray = props.image.split(" ");
  return (
    <article
      className={`w-full mx-auto md:rounded-2xl overflow-hidden md:w-11/12 lg:h-[640px] lg:flex ${
        props.className || ""
      }`}
    >
      <div className="relative w-full h-80 lg:h-full">
        <picture>
          <source
            srcSet={`${splittedArray[0]}desktop${splittedArray[1]}`}
            media="(min-width:1024px)"
          />
          <source
            srcSet={`${splittedArray[0]}tablet${splittedArray[1]}`}
            media="(min-width:768px)"
          />
          <img
            src={`${splittedArray[0]}mobile${splittedArray[1]}`}
            alt=""
            className="absolute w-full h-full"
          />
        </picture>
      </div>
      <div className="w-full bg-light-peach bg-opacity-20 px-6 py-20 text-center lg:text-left lg:px-24 lg:pt-40">
        <h2 className="text-peach text-[32px] font-medium">
          World-class talent
        </h2>
        <div className="text-[15px] mt-6">
          <p>{props.firstP}</p>
          <p className="mt-6">{props.secondP}</p>
        </div>
      </div>
    </article>
  );
};

export default AboutInfos;

AboutInfos.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  firstP: PropTypes.string,
  secondP: PropTypes.string,
};
