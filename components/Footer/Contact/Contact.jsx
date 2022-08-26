import React from "react";
import Link from "next/link";
import Button from "../../UI/Button";

const Contact = () => {
  return (
    <article className="w-11/12 h-[379px] bg-peach px-6 pt-16 -mt-[200px] mx-auto text-center rounded-xl absolute inset-x-0 lg:flex lg:items-center lg:justify-between lg:max-w-[1111px] lg:h-72 lg:-mt-[150px] lg:pt-0">
      <div className="lg:h-full lg:mt-32">
        <h2 className="text-white text-3xl leading-9 font-medium md:w-72 md:mx-auto md:text-[40px] md:max-w-[275px] lg:text-left lg:ml-24">
          Let&apos;s talk about your project
        </h2>
        <p className="my-3.5 mx-auto text-white leading-6 text-[15px] font-normal md:w-[573px] md:mt-6 md:mb-8 md:font-normal lg:text-left lg:ml-24 lg:w-96">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="lg:w-full lg:h-full lg:mt-56">
        <Button className="mt-8 mx-auto bg-white text-dark-grey lg:mt-0 hover:bg-light-peach hover:text-white">
          <Link href="/contact" passHref>
            Get in touch
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default Contact;
