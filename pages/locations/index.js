import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Locations from "../../components/Locations/Locations";

const LocationPage = () => {
  return (
    <React.Fragment>
        <Head>
          <title>Designo - Offices Location</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Header />
      <Locations />
      <Footer />
    </React.Fragment>
  );
};

export default LocationPage;
