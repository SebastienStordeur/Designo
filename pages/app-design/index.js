import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";

const index = () => {
  return (
    <React.Fragment>
      <Header />
      <DesignsHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <Footer />
    </React.Fragment>
  );
};

export default index;
