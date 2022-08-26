import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import Project from "../../components/WebDesign/Project/Project";
import data from "../../data/data.json"
import LinkCard from "../../components/Blocks/LinkCard";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Designo - App Designs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
      <Header />
      <DesignsHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <section className="mt-24 mx-6 w-11/12 max-w-[1111px] lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-8">
      {data.apps.map(app => {
        return <Project data={{project: app, className: "w-11/12 mx-auto", projectClass:"py-8"}} key={app.id} />
      })}
      </section>
      <section className="pt-24 mx-6 md:mx-8 max-w-[1112px] lg:grid lg:grid-cols-2 lg:gap-8 lg:mx-auto">
        <LinkCard title="web design" image="/assets/home/ /image-web-design.jpg" link="web-design" className="my-6 lg:my-0 lg:w-full"/>
        <LinkCard title="graphic design" image="/assets/home/ /image-graphic-design.jpg" link="graphic-design" className="lg:w-full" />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default index;
