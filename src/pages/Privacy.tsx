import React from 'react';
import { privacyContent } from '../data/privacy';

const Privacy: React.FC = () => {
    return (
        <div className="w-full  min-h-screen font-inter text-secondary">
            {/* --- HERO SECTION --- */}
            <section className="pt-[8px] md:m-2 md:rounded-[24px] md:pt-[0px] pb-0 md:pb-0 px-2 md:px-0 lg:px-[0px] xl:px-[0px]">
                <div className=" rounded-[20px] md:rounded-[24px] h-[280px] md:h-[320px] lg:h-[360px] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-8">
                    {/* Background Image with Blur */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={privacyContent.heroImage}
                            alt="Privacy Background"
                            className="w-full h-full object-cover    "
                        />
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.2] text-[#F3FFC9] mb-3 md:mb-4">
                            {privacyContent.title}
                        </h1>
                        <p className="text-[#F3FFC9] text-[14px] md:text-[15px] lg:text-[16px]">
                            Last updated: {privacyContent.lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* --- CONTENT SECTION --- */}
            <section className="py-10 md:py-12 lg:py-16 px-5 md:px-10 lg:px-[120px] xl:px-[60px]">
                <div className="max-w-[1550px] mx-auto">
                    {privacyContent.sections.map((section, idx) => (
                        <div key={idx} className="mb-12 md:mb-16 last:mb-0">
                            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-primary leading-[1.4] mb-5 md:mb-6">
                                {section.title}
                            </h2>

                            <div className="space-y-5 md:space-y-6">
                                {section.content.map((item, i) => {
                                    if (typeof item === 'string') {
                                        return (
                                            <p key={i} className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.7] text-[#A9AD9B]">
                                                {item}
                                            </p>
                                        );
                                    } else if (item.type === 'list') {
                                        return (
                                            <ul key={i} className="space-y-3 md:space-y-4 pl-1">
                                                {item.items.map((li, liIdx) => (
                                                    <li key={liIdx} className="flex items-start gap-3 md:gap-4 text-[15px] md:text-[16px] lg:text-[17px] text-[#A9AD9B] leading-[1.6]">
                                                        <div className="w-1.5 h-1.5 bg-[#A9AD9B] rounded-full mt-2.5 shrink-0"></div>
                                                        <span>{li}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    } else if (item.type === 'ordered-list') {
                                        return (
                                            <ol key={i} className="space-y-3 md:space-y-4 pl-1">
                                                {item.items.map((li, liIdx) => (
                                                    <li key={liIdx} className="flex items-start gap-3 md:gap-4 text-[15px] md:text-[16px] lg:text-[17px] text-[#A9AD9B] leading-[1.6]">
                                                        <span className="text-[#A9AD9B] font-medium mt-0.5 shrink-0">{liIdx + 1}.</span>
                                                        <span>{li}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Privacy;
