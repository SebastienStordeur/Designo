import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import Card from "../components/UI/Card";
import Section from "../components/UI/Section";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <section className="pt-[120px]">
        <Card>
          <div className="z-10">
            <h2 className="uppercase absolute text-white">Web Design</h2>
            <p className="uppercase text-white">View projects</p>
          </div>
          <Image
            src="/assets/home/mobile/image-web-design.jpg"
            alt=""
            layout="fill"
          />
        </Card>
        <Card className="my-6">
          <div className="z-10">
            <h2 className="uppercase absolute text-white">App Design</h2>
            <p className="uppercase text-white">View projects</p>
          </div>
          <Image
            src="/assets/home/mobile/image-app-design.jpg"
            alt=""
            layout="fill"
          />
        </Card>
        <Card>
          <div className="z-10">
            <h2 className="uppercase absolute text-white">Graphic Design</h2>
            <p className="uppercase text-white">View projects</p>
          </div>
          <Image
            src="/assets/home/mobile/image-graphic-design.jpg"
            alt=""
            layout="fill"
          />
        </Card>
      </section>
      <Footer />
    </>
  );
}
