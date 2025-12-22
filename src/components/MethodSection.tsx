import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MethodSection: React.FC = () => {
    const [step, setStep] = useState(1);

    const steps = [
        {
            title: "Understand your business",
            icon: "/image/contact-logo-1.png",
        },
        {
            title: "Build the right strategy",
            icon: "/image/contact-logo-2.png",
        },
        {
            title: "Execute & deliver results",
            icon: "/image/contact-logo-3.png",
        },
    ];

    return (
        <section className="bg-black pb-[90px] pt-0 md:py-[90px] overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 md:px-8">

                {/* ================= MOBILE ================= */}
                <div className="block md:hidden">

                    <h2 className="text-[#F3FFC9] text-[28px] leading-[36px] font-normal mb-4">
                        Our method for strategic B2B growth
                    </h2>

                    <p className="text-[#A9AD9B] text-[16px] leading-[26px] mb-6">
                        Our streamlined 3-step approach ensures your business gets a focused
                        strategy, practical solutions, and measurable outcomes.
                    </p>

                    <Link
                        to="/services"
                        className="inline-block bg-[#F3FFC9] text-[#161A18]
            px-[28px] py-[14px] rounded-[12px] text-[15px] font-medium mb-8"
                    >
                        Explore our services
                    </Link>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                        {["Step 1", "Step 2", "Step 3"].map((label, i) => (
                            <button
                                key={i}
                                onClick={() => setStep(i)}
                                className={`px-4 py-2 rounded-full text-[13px]
                  ${step === i
                                        ? "bg-[#2F3126] text-[#F3FFC9]"
                                        : "bg-[#161A18] text-[#8B8F84]"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {steps.slice(0, 2).map((item, i) => (
                            <div
                                key={i}
                                className={`border rounded-[16px] p-4
                  ${step === i
                                        ? "border-[#F3FFC9]"
                                        : "border-[#2A2D25] opacity-40"
                                    }`}
                            >
                                <img src={item.icon} className="w-[30px] h-[30px] mb-3" />
                                <p className="text-[#F3FFC9] text-[15px]">{item.title}</p>
                            </div>
                        ))}

                        <div
                            className={`col-span-2 border rounded-[16px] p-4
                ${step === 2
                                    ? "border-[#F3FFC9]"
                                    : "border-[#2A2D25] opacity-40"
                                }`}
                        >
                            <img
                                src={steps[2].icon}
                                className="w-[30px] h-[30px] mb-3"
                            />
                            <p className="text-[#F3FFC9] text-[15px]">
                                {steps[2].title}
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= LAPTOP / DESKTOP ================= */}
                <div className=" hidden sm:block lg:grid grid-cols-2 gap-0">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-[#F3FFC9] text-[48px] leading-[56px] font-normal mb-6">
                            Our method for <br /> strategic B2B <br/>growth
                        </h2>

                        <p className="text-[#A9AD9B] text-[18px] leading-[26px] max-w-[420px] mb-8">
                            Our streamlined 3-step approach ensures your business gets a focused
                            strategy, practical solutions, and measurable outcomes.
                        </p>

                        <Link
                            to="/services"
                            className="inline-block bg-[#F3FFC9] text-[#161A18]
              px-[28px] py-[14px] rounded-[12px] text-[15px] font-medium"
                        >
                            Explore our services
                        </Link>
                    </div>

                    {/* Right Graph */}
                    <div className="relative">

                        {/* Tabs */}
                        <div className="flex bg-[#161A18] rounded-full p-1 w-fit mt-3 mb-6">
                            {["Step 1", "Step 2", "Step 3"].map((label, i) => (
                                <button
                                    key={i}
                                    onClick={() => setStep(i)}
                                    className={`px-6 py-2 rounded-full text-[13px]
                    ${step === i
                                            ? "bg-[#2F3126] text-[#F3FFC9]"
                                            : "text-[#8B8F84]"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Graph Container */}
                        <div className="relative h-[420px]  rounded-[20px] overflow-hidden ">

                            {/* Dark Background Graph - Lower portion */}
                            <div
                                className="absolute inset-0 "
                                style={{
                                    clipPath: 'polygon(0% 85%, 100% 55%, 100% 100%, 0% 100%)'
                                }}
                            />

                            {/* Light Green Graph - Animated based on step */}
                            <div
                                className={`absolute inset-0 bg-[#F3FFC9] transition-all duration-700 ease-in-out`}
                                style={{
                                    clipPath: step === 0
                                        ? 'polygon(0% 90%, 33% 80%, 33% 100%, 0% 100%)'
                                        : step === 1
                                            ? 'polygon(0% 90%, 66% 65%, 66% 100%, 0% 100%)'
                                            : 'polygon(0% 90%, 100% 50%, 100% 100%, 0% 100%)'
                                }}
                            />

                            {/* Floating Cards */}
                            {steps.map((item, i) => (
                                <div
                                    key={i}
                                    className={`absolute z-10
                    ${i === 0 && "bottom-[90px] left-[12%]"}
                    ${i === 1 && "top-1/2 left-[42%] -translate-y-1/2"}
                    ${i === 2 && "top-[80px] right-[10%]"}
                    ${step === i ? "opacity-100" : "opacity-30"}
                    transition-opacity duration-500
                  `}
                                >
                                    <div
                                        className={`flex items-center gap-3 bg-black
                    border rounded-[14px] px-4 py-3 min-w-[220px]
                    ${step === i ? "border-[#F3FFC9]" : "border-[#2A2D25]"}`}
                                    >
                                        <img src={item.icon} className="w-[40px] h-[40px]" alt={item.title} />
                                        <span className="text-[#F3FFC9] text-[14px]">
                                            {item.title}
                                        </span>
                                    </div>

                                    {/* Dotted Line */}
                                    <div className="absolute left-1/2 top-full h-[80px]
                    border-l border-dashed border-[#2F3126]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
