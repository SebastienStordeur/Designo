import React from "react";
import Image from "next/image";
import ProjectInfos from "./ProjectInfos";

import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl mx-auto mb-10 md:flex md:h-80 md:mb-8 md:m-auto lg:flex-col lg:max-w-[350px] lg:h-[478px] lg:w-full lg:mb-0 lg:mx-0 ${
        props.data.project.className || ""
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

Project.propTypes = {
  data: PropTypes.shape({
    className: PropTypes.string,
    projectClass: PropTypes.string,
    project: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};
