import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../UI/Button";

const Country = (props) => {
  return (
    <article className="flex flex-col items-center">
      <div className="w-52 h-52 relative">
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
      <Link href="/locations">
        <Button className="bg-peach text-white mb-12">See location</Button>
      </Link>
    </article>
  );
};

export default Country;
