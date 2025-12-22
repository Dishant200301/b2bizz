import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  statValue: string;
  statLabel: string;
  image: string;
  logo: string;
}

const allCaseStudies: CaseStudy[] = [
  {
    id: "transedge",
    category: "Design & development",
    title: "Lead generation boost for a B2B logistics company",
    statValue: "38%",
    statLabel: "Bounce rate dropped",
    image: "/image/CaseStudies-1.png",
    logo: "/image/barca.png"
  },
  {
    id: "saas-fintech",
    category: "SaaS solution",
    title: "Scalable SaaS platform for a fintech startup",
    statValue: "30%",
    statLabel: "The campaign achieved",
    image: "/image/CaseStudies-2.png",
    logo: "/image/rise.png"
  },
  {
    id: "manufacturing",
    category: "CRM & ERP integrations",
    title: "Enterprise resource integration for a manufacturing firm",
    statValue: "70%",
    statLabel: "The bounce rate dropped",
    image: "/image/CaseStudies-3.png",
    logo: "/image/uturn.png"
  },
  {
    id: "consulting",
    category: "digital strategy",
    title: "Strategic digital shift for a B2B consulting agency",
    statValue: "60%",
    statLabel: "Missed appointments decreased",
    image: "/image/CaseStudies-4.png",
    logo: "/image/oslo.png"
  },
  {
    id: "saas-product",
    category: "Design & development",
    title: "SaaS product launch",
    statValue: "95%",
    statLabel: "Users found the platform",
    image: "/image/CaseStudies-5.png",
    logo: "/image/kobe.png"
  },
  {
    id: "retail",
    category: "Retail",
    title: "Digital transformation for retail",
    statValue: "30%",
    statLabel: "Increase in customer retention",
    image: "/image/CaseStudies-6.png",
    logo: "/image/thrive.png"
  },
  {
    id: "nonprofit",
    category: "Web design",
    title: "Website redesign for non-profit",
    statValue: "60%",
    statLabel: "Increase in website traffic",
    image: "/image/CaseStudies-7.png",
    logo: "/image/kobe.png"
  },
];

const CaseStudyHero = () => (
  <section className="py-[7px] p-2 md:p-2 ">
    <div className="max-w-[1500px] mx-auto bg-[#161A18] text-center rounded-[30px] px-4 md:px-[30px] lg:px-[80px] py-16 md:py-24 lg:py-[115px]">
      <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-[#F3FFC9] animate-fade-in-up mt-5">
        Our case studies
      </h1>
    </div>
  </section>
);

const CaseStudyCard: React.FC<CaseStudy> = ({
  id,
  category,
  title,
  statValue,
  statLabel,
  image,
  logo,
}) => {
  return (
    <Link
      to={`/case-studies/${id}`}
      className="bg-[#161A18] rounded-[24px] overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:bg-[#1F2422] transition-colors lg:h-[322px]"
    >
      {/* Image */}
      <div className="relative w-full h-[250px] lg:w-[200px] lg:h-[322px] xl:w-[306px] xl:h-[322px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <img
            src={logo}
            alt={title}
            className="w-[120px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        {/* Category */}
        <div className="mb-3">
          <span className="px-4 py-1 rounded-[40px] bg-[#0E100F] text-[#A9AD9B] text-[12px] font-normal">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#F3FFC9] text-[18px] lg:text-[20px] font-medium leading-tight flex-grow mb-4">
          {title}
        </h3>

        {/* Stats */}
        <div className="mt-auto">
          <div className="text-[#F3FFC9] text-[32px] md:text-[28px] font-medium leading-none mb-1">
            {statValue}
          </div>
          <div className="text-[#A9AD9B] text-[14px] md:text-[13px] font-normal">
            {statLabel}
          </div>
        </div>
      </div>
    </Link>
  );
};

const CaseStudies: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Page 1: 4 items, Page 2: 3 items
  const page1Items = allCaseStudies.slice(0, 4);
  const page2Items = allCaseStudies.slice(4, 7);

  const currentCases = currentPage === 1 ? page1Items : page2Items;
  const totalPages = 2;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-black min-h-screen">
      <CaseStudyHero />
      <section className="py-12 px-6 md:px-8 max-w-[1500px] mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {currentCases.map((item) => (
            <CaseStudyCard key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          {currentPage > 1 ? (
            <button
              onClick={handlePrevious}
              className="bg-[#F3FFC9] text-[#161A18] px-6 lg:px-[206px] py-[12px] md:py-[16px] rounded-[8px] font-medium text-[15px] flex items-center gap-2 hover:bg-[#E9F5B8] transition-colors w-[50%] lg:w-[50%] justify-center"
            >
              <ChevronLeft size={18} />
              Previous
            </button>
          ) : (
            <div></div>
          )}

          {/* Page Counter */}
          <div className="text-white text-[16px]">
            {currentPage} / {totalPages}
          </div>

          {/* Next Button */}
          {currentPage < totalPages ? (
            <button
              onClick={handleNext}
              className="bg-[#F3FFC9] text-[#161A18] px-6 lg:px-[206px] py-[12px] md:py-[16px] rounded-[8px] font-medium text-[15px] flex items-center gap-2 hover:bg-[#E9F5B8] transition-colors w-[50%] lg:w-[50%] justify-center"
            >
              Next
              <ChevronRight size={18} />
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
