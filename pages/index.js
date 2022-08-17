import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QualitySection from "../components/Quality/QualitySection";
import SubHeader from "../components/SubHeader/SubHeader";
import Card from "../components/UI/Card";
import chevron from "../public/chevron_right.svg";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <section className="pt-[120px]">
        <Card>
          <div className="z-10 absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="uppercase text-white text-[26px]">Web Design</h2>
            <p className="uppercase text-white text-[15px] tracking-[5px]">
              View projects
              <span className="text-peach">
                <Image src={chevron} alt="" width={7} height={7} />
              </span>
            </p>
          </div>
          <Image
            src="/assets/home/mobile/image-web-design.jpg"
            alt=""
            layout="fill"
          />
        </Card>
        <Card className="my-6">
          <div className="z-10 absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="uppercase text-white text-[26px]">App Design</h2>
            <p className="uppercase text-white text-[15px] tracking-[5px]">
              View projects
            </p>
          </div>
          <Image
            src="/assets/home/mobile/image-app-design.jpg"
            alt=""
            layout="fill"
          />
        </Card>
        <Card>
          <div className="z-10 absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="uppercase text-white text-[26px]">Graphic Design</h2>
            <p className="uppercase text-white text-[15px] tracking-[5px]">
              View projects
            </p>
          </div>
          <Image
            src="/assets/home/mobile/image-graphic-design.jpg"
            alt=""
            layout="fill"
          />
        </Card>
      </section>
      <QualitySection />
      <Footer />
    </>
  );
}
