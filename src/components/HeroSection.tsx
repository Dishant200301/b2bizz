import React from 'react';
import { ShieldCheck, TrendingUp, Users, MonitorSmartphone, Lock, Headset } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-[65vh] lg:h-[98vh] overflow-hidden rounded-b-[22px] lg:rounded-b-[26px] mx-auto max-w-full bg-[#161A18]  lg:p-[10px]">
      {/* Video Background */}
      <video
        className="absolute p-2 rounded-[32px] inset-0 w-full h-full object-cover z-0 lg:rounded-4xl lg:p-2"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/image/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      {/* Content Wrapper */}
      <div className="absolute inset-0 z-10 flex flex-col  justify-end p-5 md:p-10 lg:p-20 pb-[60px] md:pb-[80px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-0 md:gap-8">
          <h1 className="text-[44px] md:text-[36px] lg:text-[56px] font-medium leading-[1.1] text-primary max-w-[620px] animate-fade-in-up">
            Built for B2B,<br /> focused on results.
          </h1>

          <a href="/services" className="bg-primary text-surface px-4 py-3 w-[70%] md:px-7 md:py-3.5 rounded-[12px] md:rounded-[16px] text-[15px] lg:text-[17px] font-medium hover:translate-y-[-2px] hover:bg-[#e2efb7] transition-all duration-300 md:w-auto mt-4 md:mt-0">
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
};

export const HeroFeaturesStrip: React.FC = () => {
  const features = [
    { icon: <Headset size={24} />, text: "24/7 support and optimization" },
    { icon: <TrendingUp size={24} />, text: "Proven ROI on all solutions" },
    { icon: <Users size={24} />, text: "Dedicated client success managers" },
    { icon: <MonitorSmartphone size={24} />, text: "Real-time performance monitoring" },
    { icon: <Lock size={24} />, text: "Security-first approach" },
    { icon: <ShieldCheck size={24} />, text: "Multichannel support" },
  ];

  // Tripling for smoother infinite loop
  const loopFeatures = [...features, ...features, ...features];

  return (
    <div className="w-full h-[65px] bg-surface/50 backdrop-blur-sm flex items-center overflow-hidden relative z-20">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        {/* Using the ping-pong animation defined in CSS: Left to Right (60s) then Right to Left (60s) */}
        <div className="flex items-center gap-[60px] md:gap-[80px] lg:gap-[100px] animate-marquee-pingpong min-w-full px-4">
          {loopFeatures.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-secondary">{item.icon}</span>
              <span className="text-[16px] lg:text-[17px] font-medium text-secondary">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};