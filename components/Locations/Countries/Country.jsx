import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../UI/Button";

import PropTypes from "prop-types";

const Country = (props) => {
  return (
    <article className="flex flex-col items-center">
      <div className="w-52 h-52 relative">
        <div className="absolute rounded-full w-full h-full bg-peach bg-opacity-20"></div>
        <Image
          src={props.country.image}
          alt={props.name}
          layout="fill"
          priority={true}
        />
      </div>
      <h2 className="uppercase font-medium text-xl tracking-[5px] mt-12 mb-8">
        {props.country.name}
      </h2>
      <Button className="bg-peach text-white mb-12 hover:bg-opacity-70">
        <Link href="/locations" passHref>
          See location
        </Link>
      </Button>
    </article>
  );
};

export default Country;

Country.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
};
