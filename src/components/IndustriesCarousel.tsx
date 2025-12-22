import React, { useState, useRef, useEffect } from 'react';

// --- Industries Carousel ---
const IndustryCard: React.FC<{ title: string; image: string }> = ({ title, image }) => (
    <div className="w-full md:w-[320px] lg:w-[340px] h-[240px] md:h-[320px] lg:h-[400px] rounded-[24px] relative overflow-hidden group cursor-pointer shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full z-10">
            <h4 className="text-[#F3FFC9] text-[18px] md:text-[20px] font-normal">{title}</h4>
        </div>
    </div>
);

const IndustriesCarousel: React.FC = () => {
    const industries = [
        { title: "Healthcare", image: "/image/home-service-1.png" },
        { title: "Financial services", image: "/image/home-service-2.png" },
        { title: "Technology", image: "/image/home-service-3.png" },
        { title: "Manufacturing", image: "/image/home-service-4.png" },
        { title: "Logistics & supply chain", image: "/image/home-service-5.png" },
    ];

    // Create a tripled list for seamless infinite scrolling
    const items = [...industries, ...industries, ...industries];
    const totalItems = industries.length;
    // Start at the middle set
    const [currentIndex, setCurrentIndex] = useState(totalItems);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    // Handle the infinite loop reset
    useEffect(() => {
        if (!isTransitioning) return;

        const transitionEndHandler = () => {
            setIsTransitioning(false);
            // If we reached the end of the 3rd set, jump to the end of the 1st set (same position visually)
            // Actually, simpler: if we are at index `2 * totalItems`, jump to `totalItems`
            if (currentIndex >= 2 * totalItems) {
                setCurrentIndex(currentIndex - totalItems);
            }
            // If we are at the start of the 1st set (index 0), jump to start of 2nd set
            else if (currentIndex < totalItems) {
                setCurrentIndex(currentIndex + totalItems);
            }
        };

        const track = trackRef.current;
        if (track) {
            track.addEventListener('transitionend', transitionEndHandler);
        }

        return () => {
            if (track) {
                track.removeEventListener('transitionend', transitionEndHandler);
            }
        };
    }, [currentIndex, isTransitioning, totalItems]);

    return (
        <section className="py-12 md:py-20 w-full overflow-hidden bg-black">
            {/* Header with Title and Navigation */}
            <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0">
                    <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-normal text-[#F3FFC9] max-w-[700px] leading-[1.1]">
                        Accelerating B2B growth across diverse industries
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-[48px] h-[48px] rounded-[12px] bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors border border-[#2A2A2A]"
                            aria-label="Previous"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F3FFC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-[48px] h-[48px] rounded-[12px] bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors border border-[#2A2A2A]"
                            aria-label="Next"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F3FFC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Carousel */}
            <div className="w-full overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
                    <div
                        ref={trackRef}
                        className={`
                            flex 
                            [--slide-pct:100%] md:[--slide-pct:50%] lg:[--slide-pct:25%] lg:gap-32 xl:gap-8
                            ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}
                        `}
                        style={{
                            transform: `translateX(calc(-1 * var(--slide-pct) * ${currentIndex}))`
                        }}
                    >
                        {items.map((ind, idx) => (
                            <div
                                key={idx}
                                className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2 md:px-0"
                            >
                                <IndustryCard title={ind.title} image={ind.image} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesCarousel;
