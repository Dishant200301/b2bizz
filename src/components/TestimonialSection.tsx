import React from "react";

const TestimonialSection = () => {
  return (
    <section className="relative w-full bg-black lg:py-[120px]">
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-[60px] lg:px-[60px]">
        <div className="relative h-[360px] rounded-[30px] overflow-hidden p-10 lg:p-10">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-[30px]"
            style={{
              backgroundImage: "url('/image/testimonial-bg.png')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#161A18] opacity-50 rounded-[30px]" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src="/image/review-user.png"
                  alt="Reviewer"
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-[10px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <p className="max-w-[1061px] text-[#F3FFC9] font-inter font-normal text-[16px] md:text-[22.3px] leading-[22px] md:leading-[34px]">
                  Working with B2zz was a game-changer for our B2B strategy.
                  Their team didn’t just offer advice — they became an extension
                  of our leadership. Their insights, professionalism, and
                  tailored approach helped us unlock new growth and streamline
                  our operations.
                </p>

                <span className="mt-6 text-[#A9AD9B] font-inter font-normal text-[16px] md:text-[17.7px] leading-[25px]">
                  Orion Blake, COO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
