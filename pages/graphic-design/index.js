import React from "react";
import data from "../../data/data.json";
import Header from "../../components/Header/Header";
import Project from "../../components/WebDesign/Project/Project";
import Footer from "../../components/Footer/Footer";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";

const GraphicPage = () => {
  return (
    <React.Fragment>
      <Header />
      <DesignsHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are 
tailored to meet your business objectives."
      />
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
