import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Locations from "../../components/Locations/Locations";

const index = () => {
  return (
    <React.Fragment>
      <Header />
      <Locations />
      <Footer />
    </React.Fragment>
  );
};

export default index;
