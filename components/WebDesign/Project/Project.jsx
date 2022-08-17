import React from "react";
import Image from "next/image";
import ProjectInfos from "./ProjectInfos";

const Project = (props) => {
  return (
    <div className="relative w-11/12 h-[478px] mx-auto mb-10">
      <div className="relative w-full h-[320px]">
        <Image src={props.data.image} alt={props.data.title} layout="fill" />
      </div>
      <ProjectInfos infos={props.data} />
    </div>
  );
};

export default Project;
