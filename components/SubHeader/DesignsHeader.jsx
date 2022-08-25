import React from "react";

const DesignsHeader = (props) => {
  return (
    <section className="w-full min-h-64 bg-peach md:rounded-xl md:w-11/12 md:mb-[120px] lg:flex lg:flex-row-reverse lg:max-w-[1111px] lg:h-[480px] xl-mx-auto overflow-hidden mx-auto">
      <div className="w-full h-80 lg:h-full lg:w-[480px] relative">
        <picture>
          <source
            srcSet="/assets/about/desktop/image-about-hero.jpg"
            media="(min-width:1024px)"
          />
          <source
            srcSet="/assets/about/tablet/image-about-hero.jpg"
            media="(min-width:768px)"
          />
          <img
            src="/assets/about/mobile/image-about-hero.jpg"
            alt=""
            className="absolute w-full h-full"
          />
        </picture>
      </div>
      <div className="px-6 py-16 text-center md:px-14 lg:text-left lg:pt-40 lg:w-4/6">
        <h1 className="text-white text-5xl leading-9 font-medium">
          {props.title}
        </h1>
        <p className="mt-9 w-auto mx-auto text-white leading-6 text-[15px]">
          {props.description}
        </p>
      </div>
    </section>
  );
};

export default DesignsHeader;
