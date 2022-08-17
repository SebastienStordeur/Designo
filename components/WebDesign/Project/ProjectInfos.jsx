import React from "react";

const ProjectInfos = (props) => {
  return (
    <div className="absolute bottom-0 h-[158px] text-center w-full bg-light-peach bg-opacity-20 px-8 cursor-pointer hover:bg-opacity-100 hover:text-white md:relative md:w-6/12 md:h-full md:flex md:justify-center md:items-center lg:w-full lg:absolute lg:h-[158px]">
      <div>
        <h3 className="mt-8 text-peach font-medium text-xl uppercase tracking-[5px] md:mt-0">
          {props.infos.title}
        </h3>
        <p className="mt-4 text-dark-grey">{props.infos.description}</p>
      </div>
    </div>
  );
};

export default ProjectInfos;
