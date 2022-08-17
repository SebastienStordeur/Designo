import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex uppercase tracking-[2px] text-sm leading-3">
        <li className="cursor-pointer">
          <Link href="about">Our Company</Link>
        </li>
        <li className="mx-8 cursor-pointer">
          <Link href="locations">Locations</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
