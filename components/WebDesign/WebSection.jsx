import React from "react";
import Image from "next/image";
import data from "../../data/data.json";
import Project from "./Project/Project";

const WebSection = () => {
  return (
    <section className="mt-24">
      {data.projects.map((project) => {
        return <Project key={project.id} data={project} />;
      })}
    </section>
  );
};

export default WebSection;
