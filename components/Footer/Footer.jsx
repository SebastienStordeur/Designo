import React from "react";
import Image from "next/image";

import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black w-full mt-[286px]">
      <Contact />
      <div className="pt-36">
        <div className="w-48 h-6 mt-36 relative cursor-pointer">
          <Image
            src="/assets/shared/desktop/logo-light.png"
            alt="Designo Logo"
            layout="fill"
          />
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
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
