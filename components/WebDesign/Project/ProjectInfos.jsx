import React from "react";

const ProjectInfos = (props) => {
  console.log(props);
  return (
    <div className="absolute inset-x-0 bottom-0 h-[158px] w-full z-10 bg-light-peach bg-opacity-20 px-[30px]">
      <h3 className="mt-8 text-peach font-medium text-center text-xl uppercase tracking-[5px]">
        {props.infos.title}
      </h3>
      <p className="mt-4 text-center text-dark-grey">
        {props.infos.description}
      </p>
    </div>
  );
};

export default ProjectInfos;
