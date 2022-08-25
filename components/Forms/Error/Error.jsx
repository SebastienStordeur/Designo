import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className="absolute flex text-white -mt-8 right-5 md:right-8 lg:right-4">
      <p className="mx-2.5">Invalid field</p>
      <div className="w-5 h-5 relative">
        <Image
          src="/assets/contact/desktop/icon-error.svg"
          alt="Alert"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Error;
