import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero, HeroFeaturesStrip } from '../components/HeroSection';
import ClientLogos from '../components/ClientLogos';
import IndustriesCarousel from '../components/IndustriesCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import { ServicesOverview, PerformanceStats } from '../components/ServicesSection';
import { CaseStudyCarousel } from '../components/CaseStudySection';
import AboutStrategySection from '../components/AboutStrategySection';
import { CTA } from '../components/CTA';
import { MethodSection } from '../components/MethodSection';



const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>B2bizz - Strategic B2B Growth Solutions</title>
        <meta name="description" content="Transform your B2B business with our strategic growth solutions. Expert consulting, digital transformation, and proven results for fast-moving B2B teams." />
        <meta name="keywords" content="B2B consulting, business growth, digital transformation, strategic planning, B2B solutions" />
        <meta property="og:title" content="B2bizz - Strategic B2B Growth Solutions" />
        <meta property="og:description" content="Transform your B2B business with our strategic growth solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero section with #161A18 background */}
      <div className="w-full bg-[#161A18] ">
        <Hero />
        <HeroFeaturesStrip />
      </div>

      {/* All content below with #000000 background */}
      <div className="w-full bg-black min-h-screen ">
        <ClientLogos />
        <AboutStrategySection />
        <IndustriesCarousel />
        <WhyChooseUs />
        <ServicesOverview />
        <PerformanceStats />
        <CaseStudyCarousel />
        <MethodSection />
        <CTA />
      </div>
    </>
  );
};

export default Home;
