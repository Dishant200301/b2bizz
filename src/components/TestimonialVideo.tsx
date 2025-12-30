import React from "react";

const TestimonialVideo: React.FC = () => {
  return (
    <section className="w-full py-[80px]">
      {/* Outer container (centered like Figma: left/right 380px) */}
      <div className="mx-auto max-w-[1160px] px-5 md:px-10">

        {/* Card */}
        <div className="relative h-[385px] rounded-[30px] overflow-hidden">

          {/* Background Video */}
          <video
            src="/image/TestimonialVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#161A18] opacity-50 rounded-[30px]" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between px-[20px] py-[50px]
                          md:px-[60px] md:py-[50px]
                          sm:px-6 sm:py-8">

            {/* Quote */}
            <p
              className="
                max-w-[1030px]
                text-[#F3FFC9]
                font-inter
                font-normal
                text-[16.3px]
                leading-[25px]
                md:leading-[31px]
                sm:text-[18px]
                sm:leading-[28px]
              "
            >
              Working with B2zz was a game-changer for our B2B strategy.
              Their team didn’t just offer advice — they became an extension
              of our leadership. Their insights, professionalism, and tailored
              approach helped us unlock new growth and streamline our operations.
            </p>

            {/* Author */}
            <div className="flex items-center gap-[10px] mt-6">

              {/* Avatar */}
              <img
                src="/image/orion-blake.png"
                alt="Orion Blake"
                className="w-[45px] h-[45px] rounded-[5.2px] object-cover"
              />

              {/* Name + Role */}
              <div className="flex flex-col">
                <span className="text-[#F3FFC9] text-[17.4px] leading-[25px]">
                  Orion Blake,
                </span>
                <span className="text-[#F3FFC9] text-[14px] leading-[17px] opacity-80">
                  COO
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;
