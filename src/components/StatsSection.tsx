import React from "react";

const stats = [
  {
    value: "4X",
    text: "Average ROI on digital strategy projects",
    icon: (
      <img src="/image/service-icon-1.png" alt="" />
    ),
  },
  {
    value: "5",
    text: "Countries served with B2B services",
    icon: (
      <img src="/image/service-icon-2.png" alt="" />
    ),
  },
  {
    value: "100%",
    text: "Average ROI on digital strategy projects",
    icon: (
      <img src="/image/service-icon-3.png" alt="" />
    ),
  },
  {
    value: "20+",
    text: "Average ROI on digital strategy projects",
    icon: (
      <img src="/image/service-icon-4.png" alt="" />
    ),
  },
];

const StatsSection = () => {
  return (
    <section className="relative w-full max-w-[1220px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative h-[256px] md:h-[356px] border border-[#2F3126] rounded-[30px] px-[31px] pt-[30px] pb-[36px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#F3FFC9] font-inter font-medium text-[40px] leading-[48px]">
                {item.value}
              </h3>
              <p className="mt-[17px] max-w-[212px] text-[#A9AD9B] font-inter text-[17px] leading-[25px]">
                {item.text}
              </p>
            </div>
            <div className="w-[51px] h-[46px] ">{item.icon}</div>
          </div>
        ))}
      </div>

      <p className="mt-[32px] max-w-[814px] mx-auto text-center text-[#A9AD9B] font-inter text-[16.7px] leading-[25px]">
        Our numbers aren’t just data points — they represent meaningful
        transformations, real client wins, and the measurable difference we bring
        to B2B businesses worldwide.
      </p>
    </section>
  );
};

export default StatsSection;

