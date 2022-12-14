import React from "react";
import data from "../../data/data.json";
import Block from "../Blocks/Block";

const QualitySection = () => {
  return (
    <section className="lg:flex lg:max-w-[1110px] lg:mx-auto">
      {data.qualities.map((quality) => {
        return <Block data={quality} key={quality.id} />;
      })}
    </section>
  );
};

export default QualitySection;
