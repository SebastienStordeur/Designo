import React from "react";

const ProjectInfos = (props) => {
  return (
    <div
      className="-mt-8 min-h-[158px] px-8 py-20 text-center w-full bg-light-peach bg-opacity-20 cursor-pointer 
    hover:bg-opacity-100 hover:text-white 
    md:relative md:w-6/12 md:h-80 md:flex md:justify-center md:items-center md:mt-0
    lg:w-full lg:h-[158px]"
    >
      <div>
        <h3 className="mt-6 text-peach font-medium text-xl uppercase tracking-[5px] md:mt-0">
          {props.infos.project.title}
        </h3>
        <p className="mt-4 text-dark-grey">{props.infos.project.description}</p>
      </div>
    </div>
  );
};

export default ProjectInfos;
