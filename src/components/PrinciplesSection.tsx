import React from "react";

const firstRow = [
  {
    title: "Integrity first",
    text: "We operate with honesty and transparency.",
  },
  {
    title: "Client-Centric",
    text: "Your success is our priority.",
  },
  {
    title: "Strategic thinking",
    text: "Every decision is backed by data and insights.",
  },
];

const secondRow = [
  {
    title: "Collaboration",
    text: "We believe in working together, not just consulting.",
  },
  {
    title: "Innovation",
    text: "We challenge norms to find smarter solutions.",
  },
];

const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="border border-[#2F3126] rounded-[30px] px-[30px] py-[26px]">
      {/* Row 1 */}
      <div className="flex items-center gap-[10px] mb-[14px]">
        <span className="w-[12px] h-[12px] rounded-full bg-[#F3FFC9]" />
        <h4 className="text-[#F3FFC9] text-[16.7px] leading-[23px] font-inter">
          {title}
        </h4>
      </div>

      {/* Row 2 */}
      <p className="text-[#A9AD9B] text-[16.7px] leading-[25px] font-inter">
        {text}
      </p>
    </div>
  );
};

const PrinciplesSection = () => {
  return (
    <section className="bg-black px-[30px] py-[50px]">
      <div className="max-w-[1320px] mx-auto">
        {/* Heading */}
        <h3 className="text-[#F3FFC9] text-[28px] md:text-[33px]  leading-[40px] font-medium mb-[14px]">
          Principles that shape our strategy
        </h3>

        {/* Description */}
        <p className="text-[#A9AD9B] text-[16.7px] leading-[25px] max-w-[820px] mb-[60px]">
          At the heart of our consulting practice lies a set of core values that
          guide how we think, work, and lead.
        </p>

        {/* ROW 1 → 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px]">
          {firstRow.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

        {/* ROW 2 → 50 / 50 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {secondRow.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
