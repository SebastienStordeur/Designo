import React from "react";
import Head from "next/head";

import data from "../../data/data.json";
import Header from "../../components/Header/Header";
import Project from "../../components/WebDesign/Project/Project";
import Footer from "../../components/Footer/Footer";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import LinkCard from "../../components/Blocks/LinkCard";

const GraphicPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Designo - Graphic designs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <DesignsHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives."
      />
      <section className="pt-24 mx-6 md:mx-8 max-w-[1112px] md:w-11/12 lg:grid lg:grid-cols-3 lg:gap-8 lg:mx-auto">
        {data.graphics.map((graphic) => {
          return (
            <Project
              key={graphic.id}
              data={{
                project: graphic,
                className: "w-11/12 mx-auto",
                projectClass: "py-8",
              }}
            />
          );
        })}
      </section>
      <section className="pt-24 mx-6 md:mx-8 max-w-[1112px] lg:grid lg:grid-cols-2 lg:gap-8 lg:mx-auto">
        <LinkCard
          title="app design"
          image="/assets/home/ /image-app-design.jpg"
          link="app-design"
          className="my-6 lg:my-0 lg:w-full"
        />
        <LinkCard
          title="web design"
          image="/assets/home/ /image-web-design.jpg"
          link="web-design"
          className="lg:w-full"
        />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default GraphicPage;
