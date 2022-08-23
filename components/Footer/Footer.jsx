import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black w-full mt-[286px]">
      <Contact />
      <div className="pt-36">
        <div className="relative w-11/12 mx-auto after:content-[''] after:absolute after:w-full after:h-px after:bg-light-grey after:bg-opacity-20 after:-mt-40 md:flex md:justify-between md:items-center md:after:mt-36">
          <div className="w-48 h-5 mt-20 mb-8 mx-auto relative cursor-pointer">
            <Image
              src="/assets/shared/desktop/logo-light.png"
              alt="Designo Logo"
              layout="fill"
            />
          </div>
          <div className="flex justify-center items-center mx-auto w-full mt-12 md:mx-0 md:justify-end">
            <ul className="text-white opacity-85 uppercase text-center md:flex">
              <Link href="/about">
                <li className="cursor-pointer">Our company</li>
              </Link>
              <Link href="/locations">
                <li className="my-8 md:my-0 md:mx-10">Locations</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="pb-16 md:flex md:justify-between md:mt-8 md:pb-20 md:w-full">
            <div className="mx-auto my-10 md:my-0 md:mx-0">
              <ul className="text-white opacity-50 leading-6 text-center md:text-left">
                <li className="font-bold">Designo Central Office</li>
                <li>3886 Wellington Street</li>
                <li>Toronto, Ontario M9C 3J5</li>
              </ul>
            </div>
            <div className="mx-auto md:mx-auto">
              <ul className="text-white opacity-50 leading-6 text-center md:text-left">
                <li className="font-bold">Contact Us (Central Office)</li>
                <li>P : +1 253-863-8967</li>
                <li>M : contact@designo.co</li>
              </ul>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
