import React from "react";

const StrategyOverview = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">

        {/* ================= HEADING ================= */}
        <p className="text-center text-[#F3FFC9] font-medium text-[16px] md:text-[29.3px] leading-[32px] max-w-[1259.92px] mx-auto">
          We are a strategy-first B2B consulting firm dedicated to helping businesses
          solve complex challenges and accelerate their growth. With a team of
          experienced consultants, data analysts, and industry specialists, we blend
          strategic insight with hands-on execution to deliver measurable results.
          Our approach is simple — we listen, we analyze, and we act.
        </p>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-[1.35fr_1fr] lg:grid-cols-[1.0fr_1fr] gap-6">

          {/* ================= LEFT : VIDEO ================= */}
          <div className="rounded-[30px] overflow-hidden h-[260px] md:h-[420px]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/image/strategy-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col gap-6">

            {/* ===== ROW 1 ===== */}
            <div
              className="
                grid gap-6
                grid-cols-2
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              <StatCard
                value="4X"
                text="Average ROI on digital strategy projects"
              />
              <StatCard
                value="5"
                text="Countries served with B2B services"
              />
              <StatCard
                value="300%"
                text="Increase in organic traffic for B2B clients"
                className="hidden lg:flex"
              />
            </div>

            {/* ===== ROW 2 (Tablet & Mobile only) ===== */}
            <StatCard
              value="300%"
              text="Increase in organic traffic for B2B clients"
              className="lg:hidden"
            />

            {/* ===== ROW 3 : CTA ===== */}
            <div className="bg-[#161A18] rounded-[20px] px-6 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] flex items-center justify-center text-[#F3FFC9]">
                  <img src="/image/strategy.png" alt="" />
                </div>
                <div>
                  <p className="text-[#F3FFC9] font-medium text-[18.4px] leading-[26px]">
                    It’s time to rethink your B2B strategy
                  </p>
                  <p className="text-[#A9AD9B] text-[16.7px] leading-[25px]">
                    Schedule a free consultation
                  </p>
                </div>
              </div>

              <span className="text-[#F3FFC9] text-[20px]">→</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyOverview;

/* ================= STAT CARD ================= */

const StatCard = ({
  value,
  text,
  className = "",
}: {
  value: string;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[#161A18] rounded-[30px] p-6 h-[180px] md:h-[150px] lg:h-[280px] flex flex-col justify-between ${className}`}
    >
      <div className="text-[#F3FFC9] font-medium text-[40px] leading-[48px]">
        {value}
      </div>
      <p className="text-[#A9AD9B] text-[14px] md:text-[16.7px] leading-[25px]">
        {text}
      </p>
    </div>
  );
};
