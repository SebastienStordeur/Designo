import React from "react";
import Head from "next/head";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import data from "../../data/data.json";
import Country from "../../components/Locations/Countries/Country";
import AboutInfos from "../../components/About/AboutInfos";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Designo - About us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <DesignsHeader
        image="/assets/about/mobile/image-about-hero.jpg"
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
      <AboutInfos
        image="/assets/about/ /image-world-class-talent.jpg"
        title="World-class talent"
        firstP="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        secondP="Our team is multi-disciplinary and we are not
          merely interested in form — content and meaning are just as important.
          We give great importance to craftsmanship, service, and prompt
          delivery. Clients have always been impressed with our high-quality
          outcomes that encapsulates their brand’s story and mission."
      />
      <section className="pt-[120px] w-full max-w-[1111px] mx-auto lg:flex lg:justify-evenly lg:gap-24">
        {data.countries.map((country) => {
          return <Country country={country} key={country.id} />;
        })}
      </section>
      <AboutInfos
        className="mt-32 lg:flex-row-reverse"
        image="/assets/about/ /image-real-deal.jpg"
        title="The real deal"
        firstP="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        secondP="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
      />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
