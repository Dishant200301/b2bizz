import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceDetails } from '../data/serviceDetails';
import TestimonialSection from '../components/TestimonialSection';
import TestimonialVideo from '../components/TestimonialVideo';
import PricingSection from '../components/PricingSection';
import TestimonialCard from '../components/TestimonialSection1';
import ServicesSection from '../components/ServiceSection';
import { CTASection } from '../components/CTASection';

const ServiceDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const data = serviceDetails[id || 'web'] || serviceDetails['default'];

    return (
        <div className="w-full  min-h-screen  text-[#B8BDB5]">
            {/* HERO SECTION */}
            <section className="pt-[100px] bg-[#161A18] md:m-2 md:rounded-[24px] md:pt-[120px] pb-12 md:pb-16 m-2 rounded-3xl px-4 md:px-6 lg:px-[40px] xl:px-[50px]">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-20">
                    {/* LEFT CONTENT */}
                    <div className="flex-1 w-full lg:w-auto">
                        <h1 className="text-[28px] md:text-[44px] lg:text-[52px] xl:text-[50px] font-medium text-[#F3FFC9] leading-[1.15] mb-4 md:mb-5">
                            {data.title}
                        </h1>

                        <p className="text-[#A9AD9B] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] mb-6 md:mb-8 max-w-[480px]">
                            {data.subtitle}
                        </p>

                        <Link
                            to="/contact"
                            className="inline-block bg-[#F3FFC9] text-[#161A18] px-6 md:px-7 py-3 md:py-3.5 rounded-[10px] text-[14px] md:text-[15px] font-medium hover:bg-[#E9F5B8] transition-colors"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 w-full lg:w-auto">
                        <div className="w-full h-[280px] md:h-[320px] lg:h-[300px] xl:h-[320px] rounded-[16px] md:rounded-[20px] overflow-hidden">
                            <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT WRAPPER */}
            <div className="px-2 md:px-4 lg:px-[40px] xl:px-[50px] max-w-[1500px] mx-auto">

                {/* OVERVIEW */}
                <section className="relative py-12 md:py-16 lg:py-20 bg-black rounded-[20px] md:rounded-[24px] mx-4 md:mx-6 lg:mx-0">

                    <div className="px-0 md:px-0 lg:px-0 xl:px-0">
                        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                            {/* LEFT IMAGE */}
                            <div className="flex-1 w-full lg:w-auto lg:max-w-[586px]">
                                <div className="w-full h-[280px] md:h-[320px] lg:h-[505px] rounded-[20px] md:rounded-[24px] overflow-hidden">
                                    <img
                                        src={data.detailImage}
                                        alt="Overview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="flex-1 w-full lg:w-auto">
                                <h2 className="text-[22px] md:text-[34px] lg:text-[30px] xl:text-[34px] font-normal text-[#F3FFC9] leading-[1.15] mb-5 md:mb-6 lg:mb-7">
                                    {data.descriptionTitle}
                                </h2>

                                <p className="text-[14px] md:text-[15px] lg:text-[14px] leading-[1.65] text-[#A0A0A0] mb-6 md:mb-7 lg:mb-8 max-w-[560px]">
                                    {data.description}
                                </p>

                                <ul className="space-y-3 md:space-y-3.5 mb-8 md:mb-9 lg:mb-10">
                                    {data.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-1 h-1 bg-white rounded-full mt-2.5 shrink-0"></div>
                                            <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#F3FFC9] leading-normal">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className="inline-block bg-[#F3FFC9] text-[#161A18] px-6 md:px-7 py-3 md:py-3.5 rounded-[10px] text-[14px] md:text-[15px] font-medium hover:bg-[#E9F5B8] transition-colors shadow-sm"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <PricingSection />






            </div>
            <TestimonialCard />
            {/* OTHER CASE STUDIES */}
            <ServicesSection />

            <CTASection />
        </div>
    );
};

export default ServiceDetails;
