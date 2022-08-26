import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./Navbar/MobileNavbar";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);

  const toggleMenuHandler = () => {
    setIsNavbarShown((prevValue) => !prevValue);
  };

  if (isNavbarShown) document.body.style.overflow = "hidden";

  return (
    <header
      id="header"
      className="relative flex justify-between items-center w-full mx-auto h-24 px-6 md:h-[155px] md:px-8 lg:max-w-[1111px] xl:px-0"
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
      {isNavbarShown && <MobileNavbar onClick={toggleMenuHandler} />}
      <button onClick={toggleMenuHandler} className="md:hidden">
        <Image
          src={
            isNavbarShown
              ? "/assets/shared/mobile/icon-close.svg"
              : "/assets/shared/mobile/icon-hamburger.svg"
          }
          alt="Hamburger Menu"
          width={24}
          height={24}
        />
      </button>
    </header>
  );
};

export default Header;
