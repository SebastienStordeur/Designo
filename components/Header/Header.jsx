import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between items-center w-full h-24 px-6 md:h-[155px] md:px-8"
    >
      <div className="flex">
        <div className="conic-gradient-logo mr-4"></div>
        <p className="uppercase tracking-[5px] font-bold text-dark-grey">
          Designo
        </p>
      </div>
      <Navbar />
      <MobileMenu />
    </header>
  );
};

export default Header;
