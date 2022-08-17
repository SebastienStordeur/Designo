import React from "react";
import Image from "next/image";
import ProjectInfos from "./ProjectInfos";

const Project = (props) => {
  return (
    <div className="relative w-11/12 h-[478px] overflow-hidden mx-auto mb-10 md:flex md:h-80 md:mb-8 md:m-auto lg:flex-col lg:max-w-[350px] lg:h-[478px]">
      <div className="relative w-full h-[320px] md:w-6/12 lg:w-full">
        <Image
          src={props.data.image}
          alt={props.data.title}
          layout="fill"
          priority={true}
        />
      </div>
      <ProjectInfos infos={props.data} />
    </div>
  );
};

export default Project;
