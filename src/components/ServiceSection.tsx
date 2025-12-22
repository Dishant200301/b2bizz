import React from 'react';
import { Link } from 'react-router-dom';

// Data for the services to match the design content exactly
const services = [
  {
    id: "saas",
    title: "Custom SaaS solutions",
    description: "Conversion-focused websites are built for speed, trust, and lead generation.",
    tags: ["Saas development", "Cloud platform", "MVP"],
    image: "/image/service-2.png"
  },
  {
    id: "web",
    title: "B2B website design & development",
    description: "Strategic insights that align digital efforts with business goals.",
    tags: ["Digital transformation", "B2B marketing", "KPIs"],
    image: "/image/service-3.png"
  },
  {
    id: "crm",
    title: "CRM & ERP integrations",
    description: "Professional, conversion-optimized websites tailored for business clients and lead generation.",
    tags: ["Automation", "Business tools"],
    image: "/image/service-4.png"
  },
  {
    id: "saas",
    title: "Custom SaaS solutions",
    description: "Conversion-focused websites are built for speed, trust, and lead generation.",
    tags: ["Saas development", "Cloud platform", "MVP"],
    image: "/image/service-2.png"
  },
  {
    id: "web",
    title: "B2B website design & development",
    description: "Strategic insights that align digital efforts with business goals.",
    tags: ["Digital transformation", "B2B marketing", "KPIs"],
    image: "/image/service-3.png"
  },
  {
    id: "crm",
    title: "CRM & ERP integrations",
    description: "Professional, conversion-optimized websites tailored for business clients and lead generation.",
    tags: ["Automation", "Business tools"],
    image: "/image/service-4.png"
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-black py-16 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1380px]">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-[#F3FFC9] text-[28px] md:text-[40px] font-normal leading-tight">
            Other Services
          </h2>
          <Link
            to="/services"
            className="bg-[#F3FFC9] hover:bg-[#e6f2bd] transition-colors text-[#161A18] text-[14px] font-medium px-2 py-2 md:px-6 md:py-3 rounded-[8px]"
          >
            Explore all services
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.id}`}
              className="bg-[#0E100F] rounded-[24px] p-4 flex flex-col relative group cursor-pointer hover:bg-[#1A1D1B] transition-colors"
            >
              {/* Image Area */}
              <div className="h-[200px] md:h-[300px] w-full overflow-hidden rounded-[16px] mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[#F3FFC9] text-[18px] font-medium leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-[#A9AD9B] text-[14px] font-normal leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags positioned at the bottom */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#161A18] text-[#A9AD9B] text-[12px] px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}