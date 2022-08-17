import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex uppercase tracking-[2px] text-sm leading-3">
        <li>Our Company</li>
        <li className="mx-8">Locations</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
