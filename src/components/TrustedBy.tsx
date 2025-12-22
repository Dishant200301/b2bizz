import React from "react";

/* ================= LOGO DATA ================= */
const logos = [
    { src: "/image/uturn.png", alt: "U-Turn" },
    { src: "/image/oslo.png", alt: "Oslo" },
    { src: "/image/barca.png", alt: "Barca" },
    { src: "/image/thrive.png", alt: "Thrive" },
    { src: "/image/kobe.png", alt: "Kobe" },
    { src: "/image/rise.png", alt: "Rise" },
];

/* ================= COMPONENT ================= */
const TrustedBy: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-4 md:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">

                    {/* TEXT */}
                    <p
                        className="
              text-[#A9AD9B]
              font-inter
              font-normal
              text-[16.9px]
              leading-[25px]
              md:w-[227px]
              md:whitespace-normal
              whitespace-nowrap
            "
                    >
                        Trusted by Fast-Moving B2B Teams
                    </p>

                    {/* MARQUEE */}
                    <div className="relative flex-1 overflow-hidden h-[26px]">

                        {/* LEFT GRADIENT */}
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[80px]
              bg-gradient-to-r from-black to-transparent" />

                        {/* RIGHT GRADIENT */}
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[80px]
              bg-gradient-to-l from-black to-transparent" />

                        {/* TRACK - 40s left-to-right animation */}
                        <div className="flex w-max animate-marquee-right-40s gap-[80px]">
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-[26px] w-auto opacity-80"
                                    draggable={false}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
