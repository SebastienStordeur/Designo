import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="mt-10 w-48 mx-auto md:mx-0">
      <ul className="flex px-auto">
        <li className="cursor-pointer">
          <Image
            src="/facebook-app-logo-svgrepo-com.svg"
            alt="facebook"
            width={24}
            height={24}
          />
        </li>
        <li className="mx-4 cursor-pointer">
          <Image
            src="/youtube-svgrepo-com.svg"
            alt="Youtube"
            width={24}
            height={24}
          />
        </li>
        <li className="cursor-pointer">
          <Image
            src="/twitter-svgrepo-com.svg"
            alt="Twitter"
            width={24}
            height={24}
          />
        </li>
        <li className="mx-4 cursor-pointer">
          <Image
            src="/pinterest-svgrepo-com.svg"
            alt="Pinterest"
            width={24}
            height={24}
          />
        </li>
        <li className="cursor-pointer">
          <Image
            src="/instagram-svgrepo-com.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
