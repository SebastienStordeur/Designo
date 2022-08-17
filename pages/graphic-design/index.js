import React from "react";
import data from "../../data/data.json";
import Header from "../../components/Header/Header";
import Project from "../../components/WebDesign/Project/Project";
import Footer from "../../components/Footer/Footer";

const GraphicPage = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="lg:grid lg:grid-cols-3 lg:gap-8 lg:max-w-[1111px] mx-auto">
        {data.graphics.map((graphic) => {
          return <Project key={graphic.id} data={graphic} />;
        })}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default GraphicPage;
