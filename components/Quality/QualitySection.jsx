import React from "react";
import data from "../../data/data.json";
import Block from "../Blocks/Block";

console.log(data.qualities);

const QualitySection = () => {
  return (
    <section className="lg:flex">
      {data.qualities.map((quality) => {
        return <Block data={quality} key={quality.id} />;
      })}
    </section>
  );
};

export default QualitySection;
