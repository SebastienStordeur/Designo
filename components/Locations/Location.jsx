import React from "react";
import dynamic from "next/dynamic";

const Location = (props) => {
  const Map = dynamic(() => import("./Map"), { ssr: false });
  return (
    <article
      className={`w-full max-w-[1111px] mx-auto text-center mb-10 md:w-11/12 md:text-left lg:flex lg:h-96 lg:w-full ${
        props.data.className || ""
      }`}
    >
      <div className="relative w-full h-80 md:rounded-2xl overflow-hidden lg:max-w-[383px]">
        <Map coordinate={props.data.coordinate} />
      </div>
      <div
        className={`bg-light-peach bg-opacity-20 py-20 md:mt-8 md:h-80 md:px-32 md:rounded-2xl lg:mt-0 overflow-hidden lg:px-24 lg:w-full ${
          props.data.margin || "lg:ml-8"
        }`}
      >
        <h2 className="text-peach text-3xl font-medium">
          {props.data.country}
        </h2>
        <div className="w-full md:flex md:mx-auto md:mt-6 overflow-hidden">
          <ul className="my-6 text-[15px] leading-6 md:my-0 md:pr-16">
            <li className="text-dark-grey font-bold">{props.data.office}</li>
            <li>{props.data.address}</li>
            <li>{props.data.address2}</li>
          </ul>
          <ul className="text-[15px] leading-6">
            <li className="text-dark-grey font-bold">Contact</li>
            <li>{`P : ${props.data.phone}`}</li>
            <li>{`M : ${props.data.mail}`}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Location;
