import React from 'react';

// --- Client Logos ---
const LogoItem: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-[#0e100f] rounded-[20px] flex items-center justify-center shrink-0 transition-all duration-300">
        <img src={src} alt={alt} className="max-w-[70px] max-h-[40px] md:max-w-[140px] md:max-h-[30px] object-contain opacity-70" />
    </div>
);

const ClientLogos: React.FC = () => {
    const logos = [
        { src: '/image/kobe.png', alt: 'KOBE' },
        { src: '/image/rise.png', alt: 'Rise' },
        { src: '/image/uturn.png', alt: 'U-Turn' },
        { src: '/image/oslo.png', alt: 'oslo.' },
        { src: '/image/barca.png', alt: 'Barca' },
        { src: '/image/thrive.png', alt: 'thrive' },
    ];
    // Duplicate multiple times to ensure all cards are visible from start and animation is seamless
    const doubledLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-12 md:py-20 flex flex-col items-center gap-10 overflow-hidden relative bg-black">
            <h3 className="text-[#A9AD9B] text-[15px] md:text-[16.7px] font-normal text-center mb-2">Trusted by fast-moving B2B teams</h3>

            <div className="relative w-full max-w-[1400px] h-[120px] md:h-[200px] overflow-hidden flex items-center">
                {/* Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-[120px] z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[120px] z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

                {/* Marquee Animation - Continuous scrolling with all cards visible */}
                <div className="flex gap-[24px] animate-scroll w-max items-center">
                    {doubledLogos.map((logo, idx) => (
                        <LogoItem key={`${logo.alt}-${idx}`} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
