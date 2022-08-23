import React from "react";
import Button from "../../UI/Button";

const Contact = () => {
  return (
    <article className="w-11/12 h-[379px] bg-peach m-auto px-6 pt-16 -mt-[200px] mx-auto text-center rounded-xl absolute inset-x-0">
      <h2 className="text-white text-3xl leading-9 font-medium md:w-72 md:mx-auto md:text-4xl">
        Lets talk about your project
      </h2>
      <p className="my-3.5 mx-auto text-white leading-6 text-[15px] font-normal md:w-[573px]">
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Button className="mt-8 mx-auto bg-white">Get in touch</Button>
    </article>
  );
};

export default Contact;
