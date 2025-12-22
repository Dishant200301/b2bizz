import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import TrustedBy from '../components/TrustedBy';
import TestimonialVideo from '../components/TestimonialVideo';
import VisionMission from '../components/VisionMission';
import PrinciplesSection from '../components/PrinciplesSection';
import StrategySection from '../components/StrategySection';
import AboutHeroSection from '../components/AboutHeroSection';
import TeamSection from '../components/TeamSection';
import { CTASection } from '../components/CTASection';

// --- Components ---

const AboutHero = () => (
  <section className="relative pt-[60px] pb-20 px-5 md:px-10 lg:px-[100px] xl:px-[220px]">
    <div className="text-center mb-[60px]">
      <h1 className="text-[40px] md:text-[56px] font-medium leading-[1.2] text-primary mb-6 animate-fade-in-up">
        Get to know B2bizz B2B consulting
      </h1>
      <p className="text-secondary text-[17px] max-w-[660px] mx-auto leading-[1.5] mb-10">
        We’re your long-term growth partners. Discover who we are and how we help B2B companies unlock their full potential.
      </p>
      <button className="bg-primary text-surface px-8 py-3.5 rounded-[10px] text-[17px] font-medium hover:bg-[#e2efb7] transition-colors">
        Explore our services
      </button>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[400px] mb-[60px]">
      <div className="md:col-span-5 h-[300px] md:h-full rounded-[30px] overflow-hidden relative group">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
          alt="Team collaboration"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#161A18]/20"></div>
      </div>
      <div className="md:col-span-4 h-[300px] md:h-full rounded-[30px] overflow-hidden relative group">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          alt="Strategy meeting"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#161A18]/20"></div>
      </div>
      <div className="md:col-span-3 h-[300px] md:h-full rounded-[30px] overflow-hidden relative group">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
          alt="Office detail"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#161A18]/20"></div>
      </div>
    </div>

    {/* Ticker */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-surfaceLight pt-6 gap-4">
      <span className="text-secondary text-[17px]">Expertise across key sectors</span>
      <div className="text-primary text-[17px] font-normal flex flex-wrap gap-x-2">
        <span className="opacity-50">/</span> <span>Healthcare</span>
        <span className="opacity-50">/</span> <span>Financial services</span>
        <span className="opacity-50">/</span> <span>Technology</span>
        <span className="opacity-50">/</span> <span>Manufacturing</span>
        <span className="opacity-50">/</span> <span>Logistics</span>
        <span className="opacity-50">/</span> <span>Retail</span>
      </div>
    </div>
  </section>
);

const StoryAndStats = () => (
  <section className="py-20 px-5 md:px-10 lg:px-[100px] xl:px-[350px]">
    <h2 className="text-[28px] md:text-[30px] font-medium text-primary text-center leading-[1.4] mb-20 max-w-[1160px] mx-auto">
      We are a strategy-first B2B consulting firm dedicated to helping businesses solve
      complex challenges and accelerate their growth. With a team of experienced
      consultants, data analysts, and industry specialists, we blend strategic insight with
      hands-on execution to deliver measurable results. Our approach is simple — we
      listen, we analyze, and we act.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Visual Placeholder for Video/Image */}
      <div className="h-[280px] rounded-[30px] overflow-hidden relative group">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Abstract" />
      </div>

      {/* Stat 1 */}
      <div className="bg-[#161A18] rounded-[30px] p-8 flex flex-col justify-between h-[280px]">
        <div className="text-[42px] font-medium text-primary">4X</div>
        <p className="text-secondary text-[17px] leading-[1.4]">Average ROI on digital strategy projects</p>
      </div>

      {/* Stat 2 */}
      <div className="bg-[#161A18] rounded-[30px] p-8 flex flex-col justify-between h-[280px]">
        <div className="text-[44px] font-medium text-primary">5</div>
        <p className="text-secondary text-[17px] leading-[1.4]">Countries served with B2B services</p>
      </div>

      {/* Stat 3 & CTA Hybrid */}
      <div className="bg-[#161A18] rounded-[30px] p-8 flex flex-col justify-between h-[280px]">
        <div>
          <div className="text-[42px] font-medium text-primary">300%</div>
          <p className="text-secondary text-[16px] mt-auto pt-10">Increase in organic traffic for B2B clients</p>
        </div>
      </div>
    </div>

    {/* Full width CTA in grid or below */}
    <div className="mt-6 bg-[#161A18] rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer hover:bg-surfaceLight transition-colors">
      <div className="flex items-center gap-6">
        <div className="w-[50px] h-[50px] bg-[#2F3126] rounded-full flex items-center justify-center text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
        </div>
        <div>
          <h4 className="text-primary text-[18px] font-medium">It’s time to rethink your B2B strategy</h4>
          <p className="text-secondary text-[16px]">Schedule a free consultation</p>
        </div>
      </div>
      <div className="w-[40px] h-[40px] rounded-full border border-primary/30 flex items-center justify-center text-primary">
        <ArrowRight size={20} />
      </div>
    </div>
  </section>
);

// const Principles = () => (
//   <section className="py-20 px-5 md:px-10 lg:px-[350px]">
//     <div className="mb-12">
//         <h3 className="text-[33px] font-medium text-primary mb-4">Principles that shape our strategy</h3>
//         <p className="text-secondary text-[17px]">At the heart of our consulting practice lies a set of core values that guide how we think, work, and lead.</p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[
//             { title: "Integrity first", text: "We operate with honesty and transparency." },
//             { title: "Client-Centric", text: "Your success is our priority." },
//             { title: "Strategic thinking", text: "Every decision is backed by data and insights." },
//             { title: "Collaboration", text: "We believe in working together, not just consulting." },
//             { title: "Innovation", text: "We challenge norms to find smarter solutions." }
//         ].map((item, idx) => (
//             <div key={idx} className="border border-[#2F3126] rounded-[30px] p-8 min-h-[220px] flex flex-col hover:bg-[#161A18] transition-colors">
//                 <div className="w-3 h-3 bg-primary rounded-full mb-6"></div>
//                 <h4 className="text-primary text-[17px] font-normal mb-4">{item.title}</h4>
//                 <p className="text-secondary text-[17px] leading-[1.5]">{item.text}</p>
//             </div>
//         ))}
//     </div>
//   </section>
// );

// const VisionMission = () => {
//     const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

//     return (
//         <section className="py-20 px-5 md:px-10 lg:px-[260px]">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 bg-[#161A18] rounded-[30px] overflow-hidden min-h-[430px]">
//                 {/* Left Content */}
//                 <div className="p-10 lg:p-[60px] flex flex-col justify-center">
//                     <div className="flex gap-8 mb-10 border-b border-surfaceLight pb-4">
//                         <button 
//                             onClick={() => setActiveTab('vision')}
//                             className={`text-[22px] font-medium pb-4 border-b-2 transition-all ${activeTab === 'vision' ? 'text-primary border-primary' : 'text-secondary border-transparent'}`}
//                         >
//                             Our vision
//                         </button>
//                         <button 
//                             onClick={() => setActiveTab('mission')}
//                             className={`text-[22px] font-medium pb-4 border-b-2 transition-all ${activeTab === 'mission' ? 'text-primary border-primary' : 'text-secondary border-transparent'}`}
//                         >
//                             Our mission
//                         </button>
//                     </div>

//                     <div className="animate-fade-in">
//                         {activeTab === 'vision' ? (
//                             <>
//                                 <p className="text-secondary text-[17px] leading-[1.6] mb-8">
//                                     We envision a business world where B2B companies thrive on clarity, speed, and agility. Our long-term vision is to build a global network of high-impact B2B partnerships that redefine how strategy is implemented.
//                                 </p>
//                                 <div className="flex flex-wrap gap-3">
//                                     {['Global partnerships', 'Strategic execution', 'Digital leadership'].map(tag => (
//                                         <span key={tag} className="border border-surfaceLight text-secondary px-4 py-2 rounded-[5px] text-[13px]">
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <p className="text-secondary text-[17px] leading-[1.6] mb-8">
//                                     Our mission is to empower B2B organizations with the insights, tools, and strategies they need to navigate complexity and achieve sustainable growth in an ever-evolving market.
//                                 </p>
//                                 <div className="flex flex-wrap gap-3">
//                                     {['Client empowerment', 'People-First culture', 'Innovation'].map(tag => (
//                                         <span key={tag} className="border border-surfaceLight text-secondary px-4 py-2 rounded-[5px] text-[13px]">
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>

//                 {/* Right Image */}
//                 <div className="relative h-[300px] lg:h-auto">
//                     <img 
//                         src={activeTab === 'vision' 
//                             ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
//                             : "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
//                         } 
//                         className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
//                         alt="Vision"
//                     />
//                     <div className="absolute inset-0 bg-[#161A18]/40"></div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const TeamSection = () => {
//     const team = [
//         { name: "John Carter", role: "Managing Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
//         { name: "Nina Kapoor", role: "Financial Consultant", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
//         { name: "Alicia Morgan", role: "Senior Marketing Consultant", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
//         { name: "Liam Cheng", role: "Lead Business Analyst", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
//     ];

//     return (
//         <section className="py-20 px-5 md:px-10 lg:px-[230px]">
//             <div className="text-center mb-16">
//                 <h3 className="text-[40px] font-medium text-primary">Meet the talent behind the<br/>transformation</h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {team.map((member, idx) => (
//                     <div key={idx} className="group relative rounded-[20px] overflow-hidden h-[400px] cursor-pointer">
//                         <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

//                         <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                             <h4 className="text-primary text-[17px] mb-1">{member.name}</h4>
//                             <p className="text-primary/70 text-[13px] mb-4">{member.role}</p>

//                             <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                                 <div className="w-8 h-8 border border-primary rounded-[10px] flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
//                                     <Facebook size={14} />
//                                 </div>
//                                 <div className="w-8 h-8 border border-primary rounded-[10px] flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
//                                     <Instagram size={14} />
//                                 </div>
//                                 <div className="w-8 h-8 border border-primary rounded-[10px] flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
//                                     <Linkedin size={14} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// const CTASection = () => (
//     <section className="py-20 px-5 md:px-10 lg:px-[500px]">
//         <div className="border border-[#2F3126] rounded-[30px] p-12 text-center bg-[#0E100F]">
//             <h2 className="text-[45px] font-medium text-primary mb-6 leading-[1.2]">Take the first step toward<br/>sustainable growth</h2>
//             <p className="text-secondary text-[17px] mb-10 leading-[1.5]">
//                 Looking to scale your B2B business with clarity and confidence? Our consulting experts are ready to guide you every step of the way.
//             </p>
//             <button className="bg-primary text-surface px-8 py-4 rounded-[10px] text-[17px] font-medium hover:opacity-90 transition-opacity">
//                 Book a free call
//             </button>
//         </div>
//     </section>
// );

const About: React.FC = () => {
  return (
    <div className="w-full bg-background min-h-screen overflow-hidden">
      <Helmet>
        <title>About Us | B2bizz</title>
        <meta name="description" content="Learn about B2bizz's mission, vision, and commitment to delivering exceptional B2B consulting services. Meet our expert team and discover our values." />
        <meta name="keywords" content="about B2bizz, company mission, B2B experts, consulting team, our values" />
        <meta property="og:title" content="About Us | B2bizz" />
        <meta property="og:description" content="Learn about B2bizz's mission, vision, and commitment to delivering exceptional B2B consulting services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <AboutHeroSection />
      {/* <AboutHero /> */}
      {/* <StoryAndStats /> */}
      <StrategySection />
      <PrinciplesSection />
      <VisionMission />
      <TrustedBy />
      <TestimonialVideo />
      <TeamSection />
      {/* <TeamSection /> */}
      <CTASection />
    </div>
  );
};

export default About;
