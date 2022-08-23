import React from "react";
import Image from "next/image";
import Button from "../UI/Button";

const SubHeader = () => {
  return (
    <section className="overflow-hidden px-6 pt-20 bg-peach text-center h-[843px] md:px-20 md:w-11/12 md:mx-auto lg:max-w-[1111px]">
      <h1 className="text-white text-3xl leading-9 text-center font-medium">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className="my-3.5 text-center text-white leading-6 text-[15px]">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <Button className="bg-white text-dark-grey">Learn More</Button>
      <div className="relative w-72 mx-auto h-[432px] scale-[2] mt-40">
        <Image
          src="/assets/home/desktop/image-hero-phone.png"
          alt=""
          layout="fill"
          priority={true}
        />
      </div>
    </section>
  );
};

export default SubHeader;
