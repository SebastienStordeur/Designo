import React from "react";
import Map from "./Map";

const Location = (props) => {
  return (
    <article className="w-full text-center mb-10">
      <Map />
      <div className="bg-light-peach bg-opacity-20">
        <h2 className="text-peach text-3xl font-medium">
          {props.data.country}
        </h2>
        <ul className="my-6 text-[15px] leading-6">
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
    </article>
  );
};

export default Location;
