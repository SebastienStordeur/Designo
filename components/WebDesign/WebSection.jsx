import React from "react";
import Image from "next/image";
import data from "../../data/data.json";
import Project from "./Project/Project";

const WebSection = () => {
  return (
    <section className="mt-24 mx-6 lg:grid lg:grid-cols-3 lg:gap-8">
      {data.projects.map((project) => {
        return (
          <Project
            key={project.id}
            data={{
              project: project,
              className: "w-11/12 mx-auto",
              projectClass: "py-8",
            }}
          />
        );
      })}
    </section>
  );
};

export default WebSection;
