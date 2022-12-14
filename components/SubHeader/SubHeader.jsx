import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const SubHeader = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-20 bg-peach h-[843px] lg:h-[640px] md:px-20 md:w-11/12 md:mx-auto md:rounded-2xl lg:max-w-[1111px] lg:flex">
      <div className="text-center text-white lg:text-left lg:mt-20 lg:w-2/4">
        <h1 className="text-3xl md:text-5xl leading-9 font-medium z-20">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="my-3.5 md:my-5 lg:my-6 leading-6 text-[15px] md:text-base md:mx-18">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button className="bg-white text-dark-grey hover:bg-light-peach hover:text-white z-[1000]">
          <Link href="/about" passHref>
            Learn More
          </Link>
        </Button>
      </div>
      <div className="relative w-72 mx-auto h-[432px] scale-[2] mt-48 lg:scale-[2] lg:w-2/6 lg:mt-38">
        <Image
          src="/assets/home/desktop/image-hero-phone.png"
          alt="Phone Image"
          layout="fill"
          priority={true}
        />
      </div>
    </section>
  );
};

export default SubHeader;
