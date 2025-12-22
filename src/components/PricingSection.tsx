import React from 'react';

const AsteriskIcon = () => (
  <img src="/image/icon.png" alt="" />
);

const Bullet = () => (
  <div className="w-[5px] h-[5px] rounded-full bg-white opacity-80 shrink-0" />
);

const plans = [
  {
    name: "Starter",
    price: "1,050",
    description: "Perfect for early-stage teams or small B2B companies.",
    buttonText: "Get started",
    features: [
      "Strategy sessions (2x/month)",
      "Competitive landscape analysis",
      "Ideal customer profile (ICP) development",
      "1 sales funnel review or optimization"
    ]
  },
  {
    name: "Growth",
    price: "2,450",
    description: "Designed for scaling B2B teams focused on lead generation.",
    buttonText: "Start growing",
    features: [
      "Weekly consulting sessions",
      "GTM & sales process alignment",
      "CRM optimization and reporting",
      "Lead generation roadmap",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "3,850",
    description: "Consulting for mature B2B operations or multi-region teams.",
    buttonText: "Get started",
    features: [
      "Dedicated strategy consultant",
      "Quarterly growth audits & roadmap",
      "Team training and onboarding",
      "Full-stack MarTech evaluation",
      "On-call support and quarterly workshops"
    ]
  }
];

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-black text-[#A9AD9B] font-sans flex flex-col items-center py-16 md:py-24 lg:py-[14px] px-4 md:px-4">
      {/* Header */}
      <div className="text-center relative md:mb-[110px]">
        <h3 className="text-[#F3FFC9] text-[24.7px] md:text-[40.7px] lg:text-[40.7px] leading-[38px] font-medium text-center whitespace-pre-line mb-[50px]">
          The right consulting plan for your business
        </h3>

        {/* Toggle */}
        <div className="relative md:inline-flex items-center justify-between bg-[#161A18] rounded-[40px] hidden sm:block md:w-[310px] md:h-[44px] p-1.5 mx-auto">
          {/* Monthly Tab */}
          <div className="flex items-center justify-center w-[90px] h-full z-10 cursor-pointer">
            <span className="text-[#A9AD9B] text-[14.6px]">Monthly</span>
          </div>

          {/* Yearly Tab */}
          <div className="flex items-center justify-center gap-2 bg-[#2F3126] rounded-[40px] h-[33.17px] w-[205px] pl-4 pr-1 cursor-pointer absolute right-[6px] top-1/2 -translate-y-1/2">
            <span className="text-[#F3FFC9] text-[15.1px]">Yearly</span>
            <div className="bg-black rounded-[30px] px-[10px] py-[3px] flex items-center">
              <span className="text-[#F3FFC9] text-[13.3px] leading-[17px]">Save up to 30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-12 max-w-[1390px] w-full mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col w-full">
            {/* Top Card */}
            <div className="bg-[#161A18] rounded-[20px] p-[25px] h-[339.22px] relative flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-[10px] mb-[15px]">
                <AsteriskIcon />
                <span className="text-[#A9AD9B] text-[16.5px]">{plan.name}</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mt-[5px] mb-[15px]">
                <span className="text-[#F3FFC9] text-[30.1px] font-medium">${plan.price}</span>
                <span className="text-[#F3FFC9] text-[16.3px]">/month</span>
              </div>

              {/* Description */}
              <p className="text-[#A9AD9B] text-[16.7px] leading-[25px] max-w-[325px]">
                {plan.description}
              </p>

              {/* Button */}
              <button className="absolute bottom-[25px] left-[25px] right-[25px] h-[53.41px] bg-[#F3FFC9] rounded-[10px] flex items-center justify-center text-[#161A18] text-[16.3px] font-medium hover:bg-[#e4efb8] transition-colors">
                {plan.buttonText}
              </button>
            </div>

            {/* Feature List */}
            <div className="mt-[25px] px-[20px]">
              <ul className="flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center h-[75.2px] border-b border-[#2F3126] ${idx === plan.features.length - 1 ? 'border-none' : ''}`}
                  >
                    <div className="w-[20px] flex items-center justify-center shrink-0">
                      <Bullet />
                    </div>
                    <span className="text-[#A9AD9B] text-[16.7px] leading-[25px] ml-[10px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}