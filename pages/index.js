import Head from "next/head";
import LinkCard from "../components/Blocks/LinkCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QualitySection from "../components/Quality/QualitySection";
import SubHeader from "../components/SubHeader/SubHeader";


export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <section className="pt-[120px] mx-6 md:mx-8 max-w-[1112px] lg:grid lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-6 xl:mx-auto">
        <LinkCard title="web design" image="/assets/home/ /image-web-design.jpg" link="web-design" className="lg:row-start-1 lg:row-end-3 lg:w-full lg:h-full" />
        <LinkCard title="app design" image="/assets/home/ /image-app-design.jpg" link="app-design" className="my-6 lg:my-0 lg:w-full"/>
        <LinkCard title="graphic design" image="/assets/home/ /image-graphic-design.jpg" link="graphic-design" className="lg:w-full" />
      </section>
      <QualitySection />
      <Footer />
    </>
  );
}
