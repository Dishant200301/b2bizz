import React from "react";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#161A18] rounded-[30px] lg:m-[10px] m-2 px-5 md:px-10 lg:px-[40px] xl:px-[60px] py-12 text-[#F3FFC9]">

      {/* ================= TEXT BLOCK ================= */}
      <div className="max-w-[934px] mx-auto text-center xl:mt-[100px]">
        <h1 className="font-medium mt-10 text-[30px] md:text-[46px] lg:text-[55.8px] leading-[1.4]">
          Get to know B2bizz B2B consulting
        </h1>

        <p className="mt-6 mb-10 text-[#A9AD9B] text-[15.5px] md:text-[16.9px] leading-[25px] max-w-[654px] mx-auto">
          We’re your long-term growth partners. Discover who we are and how we help
          B2B companies unlock their full potential.
        </p>

        <a href="/services" className="mt-0 bg-[#F3FFC9] text-[#161A18] px-6 py-3 rounded-[10px] text-[16.7px] font-medium">
          Explore our services
        </a>
      </div>

      {/* ================= IMAGES ================= */}
      {/* Mobile & Tablet */}
      <div className="mt-14 grid grid-cols-2 gap-4 lg:hidden">
        <div className="rounded-[30px] overflow-hidden">
          <img src="/image/about-1.png" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-[30px] overflow-hidden">
          <img src="/image/about-2.png" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-2 rounded-[30px] overflow-hidden">
          <img src="/image/about-3.png" className="w-full h-full md:h-[360px] object-cover" />
        </div>
      </div>

      {/* Laptop & Desktop */}
      <div className="hidden lg:flex mt-16 gap-2">
        <div className="w-[30%] rounded-[30px] overflow-hidden">
          <img src="/image/about-1.png" className="w-full h-full object-cover" />
        </div>

        <div className="w-[45%] rounded-[30px] overflow-hidden">
          <img src="/image/about-2.png" className="w-full h-full object-cover" />
        </div>

        <div className="w-[25%] rounded-[30px] overflow-hidden">
          <img src="/image/about-3.png" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ================= EXPERTISE ================= */}
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 text-[16.9px]">
        <span className="text-[#A9AD9B]">
          Expertise across key sectors
        </span>

        <span className="text-[#F3FFC9] text-center lg:text-right">
          / Healthcare / Financial services / Technology / Manufacturing / Logistics / Retail
        </span>
      </div>
    </section>
  );
};

export default AboutHeroSection;
