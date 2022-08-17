import React from "react";
import Contact from "./Contact/Contact";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black w-full mt-[286px]">
      <Contact />
      <div className="flex justify-center my-16 text-center">
        <div className="conic-gradient-logo"></div>
        <p className="relative uppercase tracking-[5px] font-bold text-white w-full after:content-[''] after:absolute after:block after:h-px after:w-11/12 after:bg-light-grey after:mt-8">
          Designo
        </p>
      </div>
      <div className="flex justify-center mx-auto w-full">
        <ul className="text-white opacity-85 uppercase text-center md:flex">
          <li>Our company</li>
          <li className="my-8 md:my-0 md:mx-10">Locations</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="pb-16 md:flex">
        <div className="mx-auto my-10 md:my-0">
          <ul className="text-white opacity-50 leading-6 text-center md:text-left">
            <li className="font-bold">Designo Central Office</li>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </ul>
        </div>
        <div className="mx-auto">
          <ul className="text-white opacity-50 leading-6 text-center md:text-left">
            <li className="font-bold">Contact Us (Central Office)</li>
            <li>P : +1 253-863-8967</li>
            <li>M : contact@designo.co</li>
          </ul>
        </div>
        <div>Placeholder</div>
      </div>
    </footer>
  );
};

export default Footer;
