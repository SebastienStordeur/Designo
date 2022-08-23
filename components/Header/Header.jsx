import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between items-center w-full mx-auto h-24 px-6 md:h-[155px] md:px-8 lg:max-w-[1111px] xl:px-0"
    >
      <div className="flex">
        <Link href="/">
          <div className="w-48 h-6 relative cursor-pointer">
            <Image
              src="/assets/shared/desktop/logo-dark.png"
              alt="Designo Logo"
              layout="fill"
            />
          </div>
        </Link>
      </div>
      <Navbar />
      <MobileMenu />
    </header>
  );
};

export default Header;
