import React from "react";

const DesignsHeader = (props) => {
  return (
    <section className="w-full min-h-64 py-16 px-6 bg-peach md:rounded-xl md:w-11/12 overflow-hidden mx-auto">
      <h1 className="text-white text-5xl leading-9 text-center font-medium">
        {props.title}
      </h1>
      <p className="mt-9 w-auto mx-auto text-center text-white leading-6 text-[15px]">
        {props.description}
      </p>
    </section>
  );
};

export default DesignsHeader;
