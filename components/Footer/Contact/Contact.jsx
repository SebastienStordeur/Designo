import React from "react";
import Button from "../../UI/Button";

const Contact = () => {
  return (
    <article className="w-[327px] h-[379px] bg-peach m-auto px-6 pt-16 -mt-[160px] text-center rounded-xl">
      <h2 className="text-white text-3xl leading-9 font-medium">
        Lets talk about your project
      </h2>
      <p className="my-3.5 text-white leading-6 text-[15px] font-normal">
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Button className="mt-8 mx-auto">Get in touch</Button>
    </article>
  );
};

export default Contact;
