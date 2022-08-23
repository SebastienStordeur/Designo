import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import WebSection from "../../components/WebDesign/WebSection";
import LinkCard from "../../components/Blocks/LinkCard";

const index = () => {
  return (
    <React.Fragment>
      <Header />
      <DesignsHeader
        title="Web Design"
        description="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
      />
      <WebSection />
      <section className="pt-24 mx-6 md:mx-8 max-w-[1112px] lg:grid lg:grid-cols-2 lg:gap-8">
        <LinkCard title="app design" image="/assets/home/ /image-app-design.jpg" link="app-design" className="my-6 lg:my-0 lg:w-full"/>
        <LinkCard title="graphic design" image="/assets/home/ /image-graphic-design.jpg" link="graphic-design" className="lg:w-full" />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default index;
