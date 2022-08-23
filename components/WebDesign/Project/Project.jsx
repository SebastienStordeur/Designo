import React from "react";
import Image from "next/image";
import ProjectInfos from "./ProjectInfos";

const Project = (props) => {
  return (
    <div
      className={`relative  overflow-hidden mx-auto mb-10 md:flex md:h-80 md:mb-8 md:m-auto lg:flex-col lg:max-w-[350px] lg:h-[478px] lg:w-full lg:mb-0 lg:mx-0 ${
        props.data.project.className ? props.data.project.className : ""
      }`}
    >
      <div className="relative w-full h-80 md:w-6/12 lg:w-full">
        <Image
          src={props.data.project.image}
          alt={props.data.project.title}
          layout="fill"
          priority={true}
        />
      </div>
      <ProjectInfos infos={props.data} />
    </div>
  );
};

export default Project;
