import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "transedge",
    category: "Design & development",
    title: "Lead generation boost for a B2B logistics company",
    company: "TransEdge Logistics",
    challenge: "Low lead conversion from the existing website.",
    solution:
      "Redesigned their website UX and implemented targeted lead capture automation.",
    stats: [
      { val: "2.5X", label: "Increase in qualified B2B leads" },
      { val: "38%", label: "Bounce rate dropped" },
    ],
    image:
      "/image/CaseStudies-1.png",
  },
  {
    id: "fintech",
    category: "SaaS solution",
    title: "Scalable SaaS platform for a fintech startup",
    company: "Brand Boosters",
    challenge: "Delayed product iteration and slow market response.",
    solution:
      "Introduced agile workflows and modular architecture for rapid deployment.",
    stats: [
      { val: "50%", label: "User growth increase" },
      { val: "30%", label: "Faster release cycles" },
    ],
    image:
      "/image/CaseStudies-2.png",
  },
  {
    id: "manufacturing",
    category: "ERP integration",
    title: "Enterprise system unification for manufacturers",
    company: "Green Enterprise",
    challenge: "Disconnected legacy systems.",
    solution:
      "Unified ERP, CRM, and supply chain tools into one platform.",
    stats: [
      { val: "25%", label: "Operational efficiency gain" },
      { val: "70%", label: "Data visibility improved" },
    ],
    image:
      "/image/CaseStudies-3.png",
  },
  {
    id: "consulting",
    category: "Digital strategy",
    title: "Digital transformation for a consulting firm",
    company: "Spendora",
    challenge: "Outdated digital presence.",
    solution:
      "Revamped branding and automated lead pipelines.",
    stats: [
      { val: "40%", label: "Client acquisition growth" },
      { val: "60%", label: "Process automation" },
    ],
    image:
      "/image/CaseStudies-4.png",
  },
  {
    id: "saas-product",
    category: "Product launch",
    title: "Successful SaaS product launch",
    company: "InnovateTech",
    challenge: "No initial market traction.",
    solution:
      "Built MVP and executed go-to-market strategy.",
    stats: [
      { val: "20K+", label: "Early adopters" },
      { val: "95%", label: "Positive user feedback" },
    ],
    image:
      "/image/CaseStudies-5.png",
  },
];

export const CaseStudyCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = caseStudies[index];

  const next = () =>
    setIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );

  return (
    <section className="bg-black px-2 md:px-8 py-12">
      <div className="max-w-[1500px] mx-auto bg-[#1A1D1B] rounded-2xl md:rounded-[40px] p-4 md:p-10">

        {/* Header */}
        <span className="inline-block bg-[#0E100F] text-[#A9AD9B]
          px-[10px] py-[4px] md:px-[16px] md:py-[6px] rounded-full text-[12px] md:text-[13px] mb-4">
          {current.category}
        </span>

        <h2 className="text-[#F3FFC9] font-medium
          text-[20px] leading-[34px]
          md:text-[40px] md:leading-[48px]
          max-w-[1000px]">
          {current.title}
        </h2>

        {/* Card */}
        <div className="mt-8 bg-black rounded-[30px] overflow-hidden flex flex-col md:flex-row lg:flex-row">
          <div className="w-full h-[200px] md:h-[550px] lg:h-[440px] md:w-[546px] lg:w-[586px]">
            <img
              src={current.image}
              alt={current.company}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 xl:py-10 xl:pl-10 xl:pr-0 flex flex-col justify-between">
            <div>
              <h3 className="text-[#F3FFC9] text-[22px] font-medium mb-2 md:mb-6">
                {current.company}
              </h3>

              <div className="mb-2 md:mb-4">
                <span className="block text-[#A9AD9B] text-[13px] mb-1">
                  Challenge:
                </span>
                <p className="text-[#F3FFC9] text-[15px]">
                  {current.challenge}
                </p>
              </div>

              <div className="mb-4 md:mb-8">
                <span className="block text-[#A9AD9B] text-[13px] mb-1">
                  Solution:
                </span>
                <p className="text-[#F3FFC9] text-[15px] leading-[24px]">
                  {current.solution}
                </p>
              </div>

              <div className="flex flex-row sm:flex-row gap-4 mb-8">
                {current.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 border border-[#2F3126] rounded-[10px] p-2"
                  >
                    <div className="text-[#F3FFC9] text-[18px] md:text-[22px] font-medium mb-1">
                      {stat.val}
                    </div>
                    <div className="text-[#A9AD9B] text-[14px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"className ="mr-2 ">
                  <path
                    d="M2 10.6842H16M16 10.6842L13.3949 8.0791M16 10.6842L13.3949 13.2893M2 0V11.0526"
                    stroke="#F3FFC9"
                    strokeWidth="1.2"
                  />
                </svg>
              <Link
                to={`/case-studies/${current.id}`}
                className="flex items-center gap-2 text-[#F3FFC9] text-[14px] font-medium"
              >
                View detail 
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row md:items-center items-end justify-end  md:justify-between gap-6  ">
          <Link
            to="/case-studies"
            className="bg-[#F3FFC9] text-[#161A18]
              px-[28px] py-[14px] rounded-[10px]
              text-[15px] font-medium w-full sm:w-auto text-center hidden sm:block"
          >
            View case studies
          </Link>

          <div className="flex gap-3">
            <button onClick={prev} className="w-[40px] h-[40px] rounded-[10px] bg-black border border-[#2F3126] flex items-center justify-center">
              <ChevronLeft size={18} className="text-[#F3FFC9]" />
            </button>
            <button onClick={next} className="w-[40px] h-[40px] rounded-[10px] bg-black border border-[#2F3126] flex items-center justify-center">
              <ChevronRight size={18} className="text-[#F3FFC9]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
