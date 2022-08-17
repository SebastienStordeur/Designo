import React from "react";
import Button from "../UI/Button";

const SubHeader = () => {
  return (
    <section className="px-6 pt-20 bg-peach">
      <h1 className="text-white text-3xl leading-9 text-center font-medium">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className="my-3.5 text-center text-white leading-6 text-[15px]">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <Button>Learn More</Button>
    </section>
  );
};

export default SubHeader;
