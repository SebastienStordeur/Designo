import React from "react";
import Link from "next/link";

const MobileNavbar = (props) => {
  return (
    <>
      <div
        className="backdrop z-[1400] bg-dark-grey bg-opacity-70 h-[calc(100vh+2rem)] w-full absolute -ml-6 mt-[1200px] md:hidden"
        onClick={props.onClick}
      ></div>
      <nav className="bg-black px-6 py-14 -ml-6 mt-72 h-52 w-full text-white z-[1500] absolute md:hidden">
        <ul className="flex flex-col uppercase tracking-[2px] text-2xl leading-3">
          <li className="cursor-pointer">
            <Link href="about">Our Company</Link>
          </li>
          <li className="cursor-pointer my-8">
            <Link href="locations">Locations</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
