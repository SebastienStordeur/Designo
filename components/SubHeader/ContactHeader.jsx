import React from "react";
import ContactForm from "../Forms/ContactForm";

const ContactHeader = () => {
  return (
    <section className="relative  w-full mx-auto max-w-[1110px] bg-peach px-6 py-[72px] text-center md:w-11/12 md:rounded-2xl lg:flex lg:px-24">
      <div className="w-11/12 text-center mx-auto md:text-left lg:w-2/4 lg:mr-24">
        <h1 className="font-medium text-[32px] text-white">Contact Us</h1>
        <p className="text-white text-[15px] w-full mt-6 mb-12">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactHeader;
