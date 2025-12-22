import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const VisionMission: React.FC = () => {
    const [open, setOpen] = useState<"vision" | "mission">("vision");

    return (
        <section className="w-full py-20">
            <div className="mx-auto max-w-[1400px] px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_505px] xl:grid-cols-[1fr_705px] gap-8 items-start">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="relative h-[400px] rounded-[20px] overflow-hidden">
                        <img
                            src="/image/our-vision.png"
                            alt="Our Vision"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#161A18] opacity-50 rounded-[20px]" />
                    </div>

                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="flex flex-col gap-4">

                        {/* -------- OUR VISION -------- */}
                        <div
                            className={`bg-[#161A18] rounded-[20px] p-5 transition-all duration-300 ${open === "vision" ? "ring-1 ring-[#F3FFC9]/20" : ""
                                }`}
                        >
                            <button
                                onClick={() => setOpen(open === "vision" ? "mission" : "vision")}
                                className="w-full flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/image/our-vision-1.png"
                                        className="w-[30px] h-[30px] transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <h4 className="text-[#F3FFC9] text-[22.3px] leading-[31px] font-medium transition-colors duration-300 group-hover:text-white">
                                        Our vision
                                    </h4>
                                </div>

                                <div className={`w-[16px] h-[16px] flex items-center justify-center text-[#F3FFC9] transition-all duration-300 ${open === "vision" ? "rotate-0" : "rotate-0"
                                    }`}>
                                    {open === "vision" ? (
                                        <Minus className="transition-transform duration-300 group-hover:scale-110" />
                                    ) : (
                                        <Plus className="transition-transform duration-300 group-hover:scale-110" />
                                    )}
                                </div>
                            </button>

                            {/* CONTENT - Smooth accordion animation */}
                            <div
                                className={`grid transition-all duration-700 ease-in-out ${open === "vision"
                                        ? "grid-rows-[1fr] opacity-100 mt-6"
                                        : "grid-rows-[0fr] opacity-0 mt-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className={`transition-transform duration-700 ease-out ${open === "vision" ? "translate-y-0" : "-translate-y-4"
                                        }`}>
                                        <p className="text-[#A9AD9B] text-[16.7px] leading-[25px] max-w-[560px]">
                                            We envision a business world where B2B companies thrive on clarity,
                                            speed, and agility. Our long-term vision is to build a global network
                                            of high-impact B2B partnerships that redefine how strategy is implemented.
                                        </p>

                                        {/* TAGS */}
                                        <div className="flex flex-wrap gap-3 mt-6">
                                            {[
                                                "Global partnerships",
                                                "Strategic execution",
                                                "Digital leadership",
                                                "Client empowerment",
                                                "People-first culture",
                                            ].map((tag, index) => (
                                                <span
                                                    key={tag}
                                                    className={`px-3 py-1.5 border border-[#2F3126] rounded-[5.2px]
                          text-[#A9AD9B] text-[13px] leading-[25px] transition-all duration-300
                          hover:border-[#F3FFC9]/30 hover:text-[#F3FFC9] ${open === "vision"
                                                            ? "opacity-100 translate-y-0"
                                                            : "opacity-0 translate-y-2"
                                                        }`}
                                                    style={{
                                                        transitionDelay: open === "vision" ? `${index * 50}ms` : "0ms"
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* -------- OUR MISSION -------- */}
                        <div
                            className={`bg-[#161A18] rounded-[20px] p-5 transition-all duration-300 ${open === "mission" ? "ring-1 ring-[#F3FFC9]/20" : ""
                                }`}
                        >
                            <button
                                onClick={() => setOpen(open === "mission" ? "vision" : "mission")}
                                className="w-full flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/image/our-mission.png"
                                        className="w-[30px] h-[30px] transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <h4 className="text-[#F3FFC9] text-[22.5px] leading-[31px] font-medium transition-colors duration-300 group-hover:text-white">
                                        Our mission
                                    </h4>
                                </div>

                                <div className="w-[16px] h-[16px] flex items-center justify-center text-[#F3FFC9]">
                                    {open === "mission" ? (
                                        <Minus className="transition-transform duration-300 group-hover:scale-110" />
                                    ) : (
                                        <Plus className="transition-transform duration-300 group-hover:scale-110" />
                                    )}
                                </div>
                            </button>

                            {/* CONTENT - Smooth accordion animation */}
                            <div
                                className={`grid transition-all duration-700 ease-in-out ${open === "mission"
                                        ? "grid-rows-[1fr] opacity-100 mt-6"
                                        : "grid-rows-[0fr] opacity-0 mt-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className={`transition-transform duration-700 ease-out ${open === "mission" ? "translate-y-0" : "-translate-y-4"
                                        }`}>
                                        <p className="text-[#A9AD9B] text-[16.7px] leading-[25px]">
                                            Our mission is to become a trusted growth partner for every B2B organization we work with. We do this by aligning deep industry expertise with innovative thinking and actionable roadmaps that move businesses forward.
                                        </p>
                                        <br />
                                        <p className="text-[#A9AD9B] text-[16.7px] leading-[25px]">
                                            Whether it's entering new markets, optimizing operations, or accelerating lead generation, our goal is always the same: create results that matter.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
