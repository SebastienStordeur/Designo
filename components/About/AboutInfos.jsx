import React from "react";
import Image from "next/image";

const AboutInfos = (props) => {
  return (
    <article
      className={`w-full h-[800px] overflow-hidden ${props.className || ""}`}
    >
      <div className="relative w-full h-80">
        <Image
          src={props.image}
          alt={props.title}
          layout="fill"
          priority={true}
        />
      </div>
      <div className="w-full bg-light-peach bg-opacity-20 px-6 py-20 text-center">
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
