import React from "react";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <nav className="bg-black px-6 py-14 -ml-6 mt-72 h-54 w-full text-white z-[1500] absolute md:hidden">
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
  );
};

export default MobileNavbar;
