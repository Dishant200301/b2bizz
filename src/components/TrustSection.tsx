import React from 'react';
import { Activity, ShieldCheck, BarChart3, Briefcase } from 'lucide-react';

// --- Client Logos ---
const LogoItem: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="w-[200px] h-[200px] bg-[#161A18] rounded-[14px] flex items-center justify-center shrink-0 transition-all duration-300">
    <img src={src} alt={alt} className="max-w-[140px] max-h-[80px] object-contain opacity-70" />
  </div>
);

export const ClientLogos: React.FC = () => {
  const logos = [
    { src: '/image/kobe.png', alt: 'KOBE' },
    { src: '/image/rise.png', alt: 'Rise' },
    { src: '/image/uturn.png', alt: 'U-Turn' },
    { src: '/image/oslo.png', alt: 'oslo.' },
    { src: '/image/barca.png', alt: 'Barca' },
    { src: '/image/thrive.png', alt: 'thrive' },
  ];
  // Duplicate for smooth scrolling
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 flex flex-col items-center gap-10 overflow-hidden relative bg-black">
      <h3 className="text-[#A9AD9B] text-[16.7px] font-normal text-center mb-2">Trusted by fast-moving B2B teams</h3>

      <div className="relative w-full max-w-[1400px] h-[260px] overflow-hidden flex items-center">
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-[120px] z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[120px] z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        {/* Marquee Animation - Alternating: Left to Right (60s) then Right to Left (60s) */}
        <div className="flex gap-[24px] animate-marquee-alternate w-max items-center">
          {doubledLogos.map((logo, idx) => (
            <LogoItem key={`${logo.alt}-${idx}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Industries Carousel ---
const IndustryCard: React.FC<{ title: string; image: string }> = ({ title, image }) => (
  <div className="w-[400px] h-[400px] rounded-[16px] relative overflow-hidden group cursor-pointer shrink-0">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
    <div className="absolute bottom-0 left-0 p-[16px] w-full z-10">
      <h4 className="text-white text-[13px] font-normal">{title}</h4>
    </div>
  </div>
);

export const IndustriesCarousel: React.FC = () => {
  const industries = [
    { title: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
    { title: "Financial services", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800" },
    { title: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { title: "Logistics & supply chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  ];
  // Tripled for infinite loop
  const doubledIndustries = [...industries, ...industries, ...industries];

  return (
    <section className="py-12 w-full overflow-hidden bg-black">
      {/* Header with Title and Navigation */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] md:text-[24px] lg:text-[40px] font-normal text-[#F3FFC9] max-w-[700px] leading-tight">
            Accelerating B2B growth across diverse industries
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              className="w-[40px] h-[40px] rounded-full bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors border border-[#2A2A2A]"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="w-[40px] h-[40px] rounded-full bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors border border-[#2A2A2A]"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Cards Carousel */}
      <div className="flex gap-[16px] animate-scroll w-max px-4 md:px-8 lg:px-16">
        {doubledIndustries.map((ind, idx) => (
          <IndustryCard key={idx} title={ind.title} image={ind.image} />
        ))}
      </div>
    </section>
  );
};

// --- Why Choose Us ---
export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-5 md:px-10 lg:px-[350px] mt-20">
      <div className="text-center mb-16">
        <h3 className="text-[30px] md:text-[42px] text-primary font-medium mb-6">What makes us the right partner</h3>
        <p className="text-secondary text-[17px] max-w-[450px] mx-auto leading-[1.55]">
          Choosing the right consulting partner can define the future of your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[40px] mb-16">
        {[
          { icon: <Briefcase size={40} />, title: "B2B expertise that matters", text: "Deep expertise in navigating B2B challenges and opportunities." },
          { icon: <Activity size={40} />, title: "End-to-End consulting", text: "From planning to execution, we cover every step." },
          { icon: <BarChart3 size={40} />, title: "Data-Driven decisions", text: "We use data and experience to drive smart business moves." },
        ].map((feature, i) => (
          <div key={i} className="border border-surfaceLight rounded-[30px] p-[32px] pt-[40px] flex flex-col gap-5 hover:bg-surfaceLight/10 transition-colors">
            <div className="text-icon mb-2">{feature.icon}</div>
            <div>
              <h4 className="text-primary text-[19px] mb-3 leading-[26px]">{feature.title}</h4>
              <p className="text-secondary text-[17px] leading-[25px] max-w-[300px]">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Block */}
      <div className="w-full bg-surfaceDark rounded-[30px] relative overflow-hidden min-h-[360px] flex flex-col md:flex-row items-center p-8 md:p-0">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-50 filter blur-sm" alt="Background" />
          <div className="absolute inset-0 bg-[#161A18]/50"></div>
        </div>

        {/* Reviewer Image Absolute Position Desktop */}
        <div className="relative z-10 w-full h-full min-h-[360px]">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-[100px] h-[100px] rounded-[10px] object-cover absolute top-[40px] md:top-[100px] left-[20px] md:left-[100px]"
            alt="User"
          />

          <div className="absolute top-[160px] md:top-[100px] left-[20px] md:left-[230px] pr-5 md:pr-10">
            <p className="text-primary text-[20px] md:text-[23px] leading-[34px] max-w-[830px]">
              "Working with B2zz was a game-changer for our B2B strategy. Their insights and professional approach helped us unlock new growth."
            </p>
            <div className="mt-8 md:mt-[60px]">
              <p className="text-primary text-[18px]">Orion Blake, COO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};