import React from "react";

const cards = [
  {
    icon: "/image/home-icon-1.png",
    title: "B2B expertise that matters",
    text: "Deep expertise in navigating B2B challenges and opportunities.",
  },
  {
    icon: "/image/home-icon-2.png",
    title: "End-to-End consulting",
    text: "From planning to execution, we cover every step.",
  },
  {
    icon: "/image/home-icon-3.png",
    title: "Data-Driven decisions",
    text: "We use data and experience to drive smart business moves.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-black pt-[90px] pb-[80px] px-4 md:px-8">
      <div className="max-w-[1150px] mx-auto">

        {/* ================= Header ================= */}
        <div className="text-center mb-[56px]">
          <h2
            className="
              text-[#F3FFC9] font-medium
              text-[28px] leading-[38px]
              md:text-[40.6px] md:leading-[50px]
            "
          >
            What makes us the right partner
          </h2>

          <p
            className="
              mt-[14px] mx-auto max-w-[520px]
              text-[#A9AD9B]
              text-[16px] leading-[25px]
            "
          >
            Choosing the right consulting partner can define the future of your
            business. At B2zz, we don’t just advise — we collaborate, innovate,
            and deliver.
          </p>
        </div>

        {/* ================= Cards Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[28px]">
          {cards.map((item, i) => (
            <div
              key={i}
              className="
                border border-[#2F3126] rounded-[30px] bg-black
                px-[30px] py-[28px]

                grid gap-y-[14px]

                /* Mobile + Tablet */
                grid-cols-1
                text-center

                /* Laptop & Desktop */
                lg:grid-cols-[auto_1fr]
                lg:text-left
              "
            >
              {/* Icon */}
              <div
                className="
                  flex justify-center
                  lg:justify-start
                "
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-[44px] h-[44px] md:w-[60px] md:h-[60px] "
                />
              </div>

              {/* Heading */}
              <h4
                className="
                  text-[#F3FFC9]
                  text-[18.6px] leading-[26px]
                  lg:self-center
                "
              >
                {item.title}
              </h4>

              {/* Paragraph */}
              <p
                className="
                  text-[#A9AD9B]
                  text-[16px] leading-[25px]
                  lg:col-span-2
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ================= Testimonial ================= */}
        <div className="relative rounded-[20px] overflow-hidden min-h-[360px]">

          {/* Background */}
          <img
            src="/image/why-choose-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#161A18]/50" />

          {/* Content */}
          <div
            className="
              relative z-10
              flex flex-col md:flex-row
              gap-[24px] md:gap-[36px]
              px-[20px] md:px-[80px]
              py-[24px] md:py-[80px]
            "
          >
            {/* Profile */}
            <img
              src="/image/review-user1.png"
              alt=""
              className="
                w-[50px] h-[50px]
                md:w-[100px] md:h-[100px]
                rounded-[10px]
                object-cover
                flex-shrink-0
              "
            />

            {/* Text */}
            <div>
              <p
                className="
                  text-[#F3FFC9]
                  text-[16px] leading-[22px]
                  md:text-[22.3px] md:leading-[34px]
                  max-w-[820px]
                  mb-[18px]
                "
              >
                Working with B2zz was a game-changer for our B2B strategy. Their
                team didn’t just offer advice — they became an extension of our
                leadership. Their insights, professionalism, and tailored
                approach helped us unlock new growth and streamline our
                operations.
              </p>

              <span
                className="
                  text-[#F3FFC9]
                  text-[16px] leading-[25px]
                "
              >
                Orion Blake, COO
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
