import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Country from "../../components/Locations/Countries/Country";
import data from "../../data/data.json"
import ContactHeader from "../../components/SubHeader/ContactHeader";

const index = () => {
  return (
    <React.Fragment>
      <Header />
      <ContactHeader />
      <section className="pt-[120px] lg:flex lg:justify-evenly">
        {data.countries.map(country => {
          return <Country country={country} key={country.id} />
        })}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default index;
