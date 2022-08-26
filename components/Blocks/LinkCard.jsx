import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../UI/Card";
import chevron from "/public/chevron_right.svg";

import PropTypes from "prop-types";

const LinkCard = (props) => {
  const splittedArray = props.image.split(" ");
  return (
    <Card className={props.className || ""}>
      <div className="z-10 absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="uppercase text-white text-[26px]">{props.title}</h2>
        <Link href={props.link}>
          <p className="uppercase text-white text-[15px] tracking-[5px] cursor-pointer">
            View projects
            <span className="text-peach">
              <Image src={chevron} alt="" width={8} height={8} />
            </span>
          </p>
        </Link>
      </div>
      <picture>
        <source
          srcSet={`${splittedArray[0]}desktop${splittedArray[1]}`}
          media="(min-width:1024px)"
        />
        <source
          srcSet={`${splittedArray[0]}tablet${splittedArray[1]}`}
          media="(min-width:768px)"
        />
        <img
          src={`${splittedArray[0]}mobile${splittedArray[1]}`}
          alt=""
          className="absolute w-full h-full"
        />
      </picture>
    </Card>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
};
