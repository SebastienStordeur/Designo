import React from "react";
import ContactForm from "../../components/Forms/ContactForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Country from "../../components/Locations/Countries/Country";
import data from "../../data/data.json"

const index = () => {
  return (
    <React.Fragment>
      <Header />
      <ContactForm />
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
