import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudyDetails } from '../data/caseStudyDetails';
import { CTASection } from '../components/CTASection';

const CaseStudyDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const data = caseStudyDetails[id || 'transedge'] || caseStudyDetails['default'];

    return (
        <div className="w-full bg-[#000000] p-2  min-h-screen text-[#4A4A4A]">
            {/* HERO SECTION */}
            <section className="relative  mx-auto  bg-[#161A18] rounded-[30px] lg:m-[10px] px-5 md:px-10 lg:px-[40px] xl:px-0 py-12 text-[#F3FFC9]">
                <div className=" max-w-[1500px] mx-auto rounded-[20px] md:rounded-[24px] p-2 md:py-8 md:px-0 lg:p-10">
                    <div className="mb-5 md:mb-6 flex items-center gap-2 text-[10px] md:text-[14px] text-[#A9AD9B]">
                        <Link to="/" className="hover:text-[#F3FFC9] transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/case-studies" className="hover:text-[#F3FFC9] transition-colors">Case Studies</Link>
                        <span>/</span>
                        <span className="text-[#F3FFC9]">{data.title}</span>
                    </div>

                    <h1 className="text-[22px] md:text-[40px] lg:text-[48px] font-medium text-[#f3ffc9] leading-[1.2] mb-8 md:mb-10 max-w-[1200px]">
                        {data.title}
                    </h1>

                    <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-[16px] md:rounded-[20px] overflow-hidden mb-8 md:mb-10">
                        <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
                        <div className="bg-transparent rounded-[16px] md:rounded-[20px] p-4 md:p-5 flex flex-col justify-center min-h-[100px] md:min-h-[110px] border border-[#2F3126]">
                            <span className="text-[#F3FFC9] text-[13px] md:text-[14px] mb-1.5 md:mb-2">Client</span>
                            <span className="text-[#A9AD9B] text-[10px] md:text-[17px] font-medium">{data.client}</span>
                        </div>
                        <div className="bg-transparent rounded-[16px] md:rounded-[20px] p-4 md:p-5 flex flex-col justify-center min-h-[100px] md:min-h-[110px] border border-[#2F3126]">
                            <span className="text-[#F3FFC9] text-[13px] md:text-[14px] mb-1.5 md:mb-2">Industry</span>
                            <span className="text-[#A9AD9B] text-[10px] md:text-[17px] font-medium">{data.industry}</span>
                        </div>
                        <div className="bg-transparent rounded-[16px] md:rounded-[20px] p-4 md:p-5 flex flex-col justify-center min-h-[100px] md:min-h-[110px] border border-[#2F3126]">
                            <span className="text-[#F3FFC9] text-[13px] md:text-[14px] mb-1.5 md:mb-2">Region</span>
                            <span className="text-[#A9AD9B] text-[10px] md:text-[17px] font-medium">{data.region}</span>
                        </div>
                        <div className="bg-transparent rounded-[16px] md:rounded-[20px] p-4 md:p-5 flex flex-col justify-center min-h-[100px] md:min-h-[110px] border border-[#2F3126]">
                            <span className="text-[#F3FFC9] text-[13px] md:text-[14px] mb-1.5 md:mb-2">Duration</span>
                            <span className="text-[#A9AD9B] text-[10px] md:text-[17px] font-medium">{data.duration}</span>
                        </div>
                        <div className="bg-transparent rounded-[16px] md:rounded-[20px] p-4 md:p-5 flex flex-col justify-center min-h-[100px] md:min-h-[110px] border border-[#2F3126]">
                            <span className="text-[#F3FFC9] text-[13px] md:text-[14px] mb-1.5 md:mb-2">Budget</span>
                            <span className="text-[#A9AD9B] text-[10px] md:text-[17px] font-medium">{data.budget}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT WRAPPER */}
            <div className="px-4 md:px-8 py-12 md:pt-20">
                <div className="max-w-[900px] mx-auto">

                    {/* OVERVIEW */}
                    <section className="mb-16 md:mb-20">
                        <div className="space-y-5 mb-10">
                            {data.overview.map((paragraph, idx) => (
                                <p key={idx} className="text-[15px] md:text-[16px] leading-[1.7] text-[#A9AD9B]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {data.overviewImages.map((img, idx) => (
                                <div key={idx} className="h-[280px] md:h-[320px] rounded-[16px] overflow-hidden">
                                    <img
                                        src={img}
                                        alt="Overview"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* APPROACH */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="text-[28px] md:text-[32px] text-[#F3FFC9] font-medium mb-4">
                            {data.approach.title}
                        </h2>
                        <p className="text-[15px] md:text-[16px] leading-[1.7] mb-6 text-[#A9AD9B]">
                            {data.approach.description}
                        </p>
                        <ul className="space-y-3">
                            {data.approach.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[15px] md:text-[16px] text-[#A9AD9B] leading-[1.7]">
                                    <span className="text-[#F3FFC9] font-medium">•</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CHALLENGE */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="text-[28px] md:text-[32px] text-[#F3FFC9] font-medium mb-4">
                            {data.challenge.title}
                        </h2>
                        <p className="text-[15px] md:text-[16px] leading-[1.7] mb-8 text-[#A9AD9B]">
                            {data.challenge.description}
                        </p>
                        <div className="h-[300px] md:h-[400px] rounded-[16px] overflow-hidden">
                            <img src={data.challenge.image} alt="Challenge" className="w-full h-full object-cover" />
                        </div>
                    </section>

                    {/* SOLUTION */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="text-[28px] md:text-[32px] text-[#F3FFC9] font-medium mb-4">
                            {data.solution.title}
                        </h2>
                        <p className="text-[15px] md:text-[16px] leading-[1.7] mb-6 text-[#A9AD9B]">
                            {data.solution.description}
                        </p>

                        <ul className="space-y-3 mb-10">
                            {data.solution.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[15px] md:text-[16px] text-[#A9AD9B] leading-[1.7]">
                                    <span className="text-[#F3FFC9] font-medium">•</span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {data.solution.images.map((img, idx) => (
                                <div key={idx} className="h-[280px] md:h-[320px] rounded-[16px] overflow-hidden">
                                    <img
                                        src={img}
                                        alt="Solution"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RESULTS */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="text-[28px] md:text-[32px] text-[#F3FFC9] font-medium mb-10">
                            {data.results.title}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
                            {data.results.metrics.map((metric, idx) => (
                                <div key={idx}>
                                    <div className="text-[32px] md:text-[36px] font-medium text-[#F3FFC9] mb-2">
                                        {metric.value}
                                    </div>
                                    <p className="text-[14px] text-[#A9AD9B]">{metric.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* TESTIMONIAL */}
                        <div className="bg-[#0e100f] rounded-[16px] p-8 md:p-10">
                            <p className="text-[#F3FFC9] text-[17px] md:text-[18px] font-normal leading-[1.6] mb-6">
                                "{data.testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                                    <img src={data.testimonial.image} alt={data.testimonial.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-[#A9AD9B] text-[15px] font-medium">{data.testimonial.author}, <span className="text-[#A9AD9B]">{data.testimonial.role}</span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* OTHER CASE STUDIES */}
            <section className="py-12 md:py-16 lg:pb-20 lg:pt-0 px-4 md:px-8 lg:px-[60px] bg-black">
                <div className="max-w-[1100px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <h2 className="text-[32px] md:text-[40px] font-medium text-[#F3FFC9]">
                            Other case studies
                        </h2>
                        <Link
                            to="/case-studies"
                            className="bg-[#F3FFC9] text-[#161A18] px-6 py-3 rounded-[8px] font-medium text-[15px] hover:bg-[#E9F5B8] transition-colors"
                        >
                            See all case studies
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <Link to="/case-studies/transedge" className="bg-[#161A18] rounded-[24px] overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:bg-[#1F2422] transition-colors lg:h-[322px]">
                            {/* Image */}
                            <div className="relative w-full h-[250px] lg:w-[200px] lg:h-[322px] xl:w-[306px] xl:h-[322px] flex-shrink-0 overflow-hidden">
                                <img
                                    src="/image/CaseStudies-1.png"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt="Lead generation boost"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <img
                                        src="/image/barca.png"
                                        alt="Barca"
                                        className="w-[120px] h-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div className="mb-3">
                                    <span className="text-[#A9AD9B] text-[12px] font-normal">
                                        Design & development
                                    </span>
                                </div>

                                <h3 className="text-[#F3FFC9] text-[18px] lg:text-[20px] font-medium leading-tight flex-grow mb-4">
                                    Enterprise resource integration for a manufacturing firm
                                </h3>

                                <div className="mt-auto">
                                    <div className="text-[#F3FFC9] text-[32px] md:text-[28px] font-medium leading-none mb-1">
                                        70%
                                    </div>
                                    <div className="text-[#A9AD9B] text-[14px] md:text-[13px] font-normal">
                                        The bounce rate dropped
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/case-studies/saas-fintech" className="bg-[#161A18] rounded-[24px] overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:bg-[#1F2422] transition-colors lg:h-[322px]">
                            {/* Image */}
                            <div className="relative w-full h-[250px] lg:w-[200px] lg:h-[322px] xl:w-[306px] xl:h-[322px] flex-shrink-0 overflow-hidden">
                                <img
                                    src="/image/CaseStudies-2.png"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt="SaaS Platform"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <img
                                        src="/image/rise.png"
                                        alt="Rise"
                                        className="w-[120px] h-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div className="mb-3">
                                    <span className="text-[#A9AD9B] text-[12px] font-normal">
                                        SaaS solution
                                    </span>
                                </div>

                                <h3 className="text-[#F3FFC9] text-[18px] lg:text-[20px] font-medium leading-tight flex-grow mb-4">
                                    Enterprise resource integration for a manufacturing firm
                                </h3>

                                <div className="mt-auto">
                                    <div className="text-[#F3FFC9] text-[32px] md:text-[28px] font-medium leading-none mb-1">
                                        70%
                                    </div>
                                    <div className="text-[#A9AD9B] text-[14px] md:text-[13px] font-normal">
                                        The bounce rate dropped
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />
        </div>
    );
};

export default CaseStudyDetails;
