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
import { AnimatedSection } from '../components/AnimatedSection';



const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>B2zz - Strategic B2B Growth Solutions</title>
        <meta name="description" content="Transform your B2B business with our strategic growth solutions. Expert consulting, digital transformation, and proven results for fast-moving B2B teams." />
        <meta name="keywords" content="B2B consulting, business growth, digital transformation, strategic planning, B2B solutions" />
        <meta property="og:title" content="B2zz - Strategic B2B Growth Solutions" />
        <meta property="og:description" content="Transform your B2B business with our strategic growth solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero section with #161A18 background */}
      <div className="w-full bg-[#161A18] ">
        <AnimatedSection animation="fade" duration={1000}>
          <Hero />
        </AnimatedSection>
        <AnimatedSection animation="fadeSlideUp" delay={200} duration={800}>
          <HeroFeaturesStrip />
        </AnimatedSection>
      </div>

      {/* All content below with #000000 background */}
      <div className="w-full bg-black min-h-screen ">
        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <ClientLogos />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <AboutStrategySection />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <IndustriesCarousel />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <WhyChooseUs />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <ServicesOverview />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <PerformanceStats />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <CaseStudyCarousel />
        </AnimatedSection>

        <AnimatedSection animation="fadeSlideUp" duration={800}>
          <MethodSection />
        </AnimatedSection>

        <AnimatedSection animation="scale" duration={800}>
          <CTA />
        </AnimatedSection>
      </div>
    </>
  );
};

export default Home;
