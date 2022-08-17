import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  return (
    <header id="header" className="flex items-center w-full h-24 ">
      <div></div>
      <p className="uppercase tracking-[5px] font-bold text-dark-grey">
        Designo
      </p>
      <MobileMenu />
    </header>
  );
};

export default Header;
