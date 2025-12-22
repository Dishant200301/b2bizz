import React from "react";

const AboutStrategySection: React.FC = () => {
    return (
        <section className="w-full bg-black px-4 md:px-8 lg:px-16 py-12 lg:py-20">
            <div
                className="
          max-w-[1400px] mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-8 lg:gap-16
          items-center 
        "
            >
                {/* Left Column */}
                <div className="flex flex-col gap-6 lg:gap-8">
                    {/* Heading */}
                    <h2
                        className="
              text-[26px] md:text-[36px] lg:text-[40px]
              leading-tight
              font-medium
              text-[#E8F6A5]
            "
                    >
                        Informed strategy,
                        Operational strength,
                        and sustainable results.
                    </h2>

                    {/* Mobile Description (Hidden on Desktop) */}
                    <p
                        className="
              lg:hidden
              text-[#A9AD9B]
              text-[15px]
              leading-relaxed
              mb-2
            "
                    >
                        We specialize in empowering B2B companies with results-driven
                        consulting solutions tailored to modern business challenges.
                    </p>

                    {/* Image */}
                    <div
                        className="
              w-full
              h-[200px] lg:h-auto
              rounded-[24px] lg:rounded-[28px]
              overflow-hidden
            "
                    >
                        <img
                            src="/image/about-strategy.jpg"
                            alt="Strategy discussion"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between h-full">
                    {/* Desktop Description (Hidden on Mobile) */}
                    <p
                        className="
              hidden lg:block
              text-[#9CA3AF]
              text-[15px] md:text-[16px]
              leading-relaxed
              max-w-[520px]
              mb-8
            "
                    >
                        We specialize in empowering B2B companies with results-driven
                        consulting solutions tailored to modern business challenges.
                    </p>

                    {/* List */}
                    <ul className="flex flex-col gap-4 lg:gap-5 mb-8 lg:mb-10">
                        {[
                            "Deep experience across B2B sectors",
                            "Solutions aligned with your business goals",
                            "Frameworks built for long-term success",
                            "Working with you, not just for you",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="
                  flex items-start gap-3
                  text-[#A9AD9B]
                  text-[15px]
                "
                            >
                                <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-[#A9AD9B]" />
                                <span className="border-b border-white/10 pb-4 w-full">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Button */}
                    <div>
                        <button
                            className="
                bg-[#E8F6A5]
                text-black
                text-[15px] lg:text-[14px]
                font-medium
                w-full lg:w-auto
                px-6 py-3.5 lg:py-3
                rounded-[12px] lg:rounded-full
                hover:opacity-90
                transition
              "
                        >
                            More about us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStrategySection;
