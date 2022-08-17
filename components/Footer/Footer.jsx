import React from "react";
import Contact from "./Contact/Contact";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black w-full mt-[286px]">
      <Contact />

      <p className="uppercase tracking-[5px] font-bold text-dark-grey">
        Designo
      </p>
      <div className="flex flex-col items-center mx-auto">
        <ul className="text-white opacity-75 uppercase text-center">
          <li>Our company</li>
          <li className="my-8">Locations</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="mx-auto my-10">
        <ul className="text-white opacity-50 leading-6 text-center">
          <li className="font-bold">Designo Central Office</li>
          <li>3886 Wellington Street</li>
          <li>Toronto, Ontario M9C 3J5</li>
        </ul>
      </div>
      <div className="mx-auto">
        <ul className="text-white opacity-50 leading-6 text-center">
          <li className="font-bold">Contact Us (Central Office)</li>
          <li>P : +1 253-863-8967</li>
          <li>M : contact@designo.co</li>
        </ul>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
