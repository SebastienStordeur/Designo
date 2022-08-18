import React from "react";
import Image from "next/image";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DesignsHeader from "../../components/SubHeader/DesignsHeader";
import Project from "../../components/WebDesign/Project/Project";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="w-full h-80 relative">
        <Image
          src="/assets/about/mobile/image-about-hero.jpg"
          alt=""
          layout="fill"
          priority={true}
        />
      </div>
      <DesignsHeader
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
      <Project
        className="w-full"
        data={{
          className: "py-20",
          image: "/assets/about/mobile/image-world-class-talent.jpg",
          title: "World-class talent",
          description:
            "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
        }}
      />

      <section></section>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
