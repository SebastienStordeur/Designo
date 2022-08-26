import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import WebSection from "../../components/WebDesign/WebSection";
import LinkCard from "../../components/Blocks/LinkCard";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Designo - Web Design</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <DesignsHeader
        title="Web Design"
        description="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
      />
      <WebSection />
      <section className="pt-24 mx-6 md:mx-8 max-w-[1112px] md:w-11/12 lg:grid lg:grid-cols-2 lg:gap-8 lg:mx-auto">
        <LinkCard
          title="app design"
          image="/assets/home/ /image-app-design.jpg"
          link="app-design"
          className="my-6 lg:my-0 lg:w-full"
        />
        <LinkCard
          title="graphic design"
          image="/assets/home/ /image-graphic-design.jpg"
          link="graphic-design"
          className="lg:w-full"
        />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default index;
