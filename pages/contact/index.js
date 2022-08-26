import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Country from "../../components/Locations/Countries/Country";
import data from "../../data/data.json"
import ContactHeader from "../../components/SubHeader/ContactHeader";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Designo - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ContactHeader />
      <section className="pt-[120px] lg:flex lg:justify-evenly max-w-[1110px] mx-auto">
        {data.countries.map(country => {
          return <Country country={country} key={country.id} />
        })}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default index;
