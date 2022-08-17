import React from "react";

const DesignsHeader = (props) => {
  return (
    <section className="w-11/12 h-64 pt-16 bg-peach mx-auto">
      <h1 className="text-white text-5xl leading-9 text-center font-medium">
        {props.title}
      </h1>
      <p className="mt-6 w-96 mx-auto text-center text-white leading-6 text-[15px]">
        {props.description}
      </p>
    </section>
  );
};

export default DesignsHeader;
