import React from 'react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';
import FAQSection from '../components/FAQSection';
import TestimonialSection from '../components/TestimonialSection';

const ServicesHero = () => (
  <section className="relative pt-[100px] md:pt-[120px] pb-[0px] md:pb-[80px] px-4 md:px-6 text-center bg-[#1A1D1B] md:mt-2 md:mx-2 md:rounded-t-[30px]">
    <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-normal leading-[1.1] text-[#F3FFC9] mb-3 md:mb-4">
      Our Services
    </h1>
    <p className="text-[#B8BDB5] text-[13px] md:text-[14px] lg:text-[15px] max-w-[600px] md:max-w-[700px] mx-auto leading-[1.6]">
      Crafted digital solutions that drive results. Explore our full suite of services designed to elevate your brand and grow your business.
    </p>
  </section>
);

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, tags, image }) => (
  <Link
    to={`/services/${id}`}
    className="bg-[#0e100f] rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col h-full group cursor-pointer hover:bg-[#2f3126] transition-colors"
  >
    <div className="rounded-[16px] md:rounded-[20px] overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] m-3 md:m-4 mb-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-4 md:p-5 lg:p-6 pt-4 md:pt-5 flex flex-col grow">
      <h3 className="text-[#F3FFC9] text-[18px] md:text-[20px] lg:text-[22px] font-normal mb-2 md:mb-3 leading-[1.3]">{title}</h3>
      <p className="text-[#B8BDB5] text-[13px] md:text-[14px] lg:text-[15px] leading-[1.5] mb-4 md:mb-5">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="bg-[#2F3126] text-[#B8BDB5] text-[11px] md:text-[12px] lg:text-[13px] px-2.5 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const ServicesGrid = () => {
  const services = [
    {
      id: "web",
      title: "B2B website design & development",
      description: "Conversion-focused websites are built for speed, trust, and lead generation.",
      tags: ["Business website", "Corporate site", "Responsive design", "Frontend"],
      image: "/image/service-1.png"
    },
    {
      id: "saas",
      title: "Custom SaaS solutions",
      description: "Robust SaaS platforms tailored for growth, scalability, and performance.",
      tags: ["Saas development", "Cloud platform", "MVP"],
      image: "/image/service-2.png"
    },
    {
      id: "strategy",
      title: "Enterprise digital strategy",
      description: "Streamline operations with seamless business system integrations.",
      tags: ["Digital transformation", "B2B marketing", "KPIs"],
      image: "/image/service-3.png"
    },
    {
      id: "crm",
      title: "CRM & ERP integrations",
      description: "Streamline operations with seamless business system integrations.",
      tags: ["Automation", "Business tools"],
      image: "/image/service-4.png"
    },
    {
      id: "marketing",
      title: "Data-Driven marketing",
      description: "Professional, conversion-optimized websites tailored for business clients.",
      tags: ["Data insight", "Marketing analytics", "Marketing attribution"],
      image: "/image/service-5.png"
    }
  ];

  return (
    <section className="px-4 md:px-6 lg:px-[80px] xl:px-[120px] py-[50px] md:py-[60px] bg-[#1A1D1B] md:mx-2 md:rounded-b-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-black min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <section className="py-[80px] md:py-[100px] lg:py-[120px] px-4 bg-black">
        <StatsSection />
      </section>
      <TestimonialSection />
      <FAQSection />
    </div>
  );
};

export default Services;
