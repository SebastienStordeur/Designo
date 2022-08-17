import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import WebSection from "../../components/WebDesign/WebSection";

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
      <Footer />
    </React.Fragment>
  );
};

export default index;
