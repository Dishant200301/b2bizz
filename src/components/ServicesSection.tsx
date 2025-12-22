import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, Cloud, Globe2, Network, PieChart } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'B2B website design & development',
    icon: <img src="/image/home-service-icon-1.png" className="w-[24px] h-[24px]" />,
    description: 'Professional, conversion-optimized websites tailored for business clients and lead generation.',
    tags: ['Business website', 'Responsive design', 'Frontend'],
    image: '/image/service-1.png',
    progress: 90
  },
  {
    id: 'saas',
    title: 'Custom SaaS solutions',
    icon: <img src="/image/home-service-icon-2.png" className="w-[24px] h-[24px]" />,
    description: 'Scalable cloud-based software solutions designed to streamline your operations.',
    tags: ['SaaS', 'Cloud', 'Architecture'],
    image: '/image/service-2.png',
    progress: 75
  },
  {
    id: 'strategy',
    title: 'Enterprise digital strategy',
    icon: <img src="/image/home-service-icon-3.png" className="w-[24px] h-[24px]" />,
    description: 'Comprehensive digital transformation roadmaps for large-scale enterprises.',
    tags: ['Digital Transformation', 'Consulting'],
    image: '/image/service-3.png',
    progress: 60
  },
  {
    id: 'crm',
    title: 'CRM & ERP integrations',
    icon: <img src="/image/home-service-icon-4.png" className="w-[24px] h-[24px]" />,
    description: 'Seamless integration of your customer and resource planning systems.',
    tags: ['Integration', 'Automation'],
    image: '/image/service-4.png',
    progress: 85
  },
  {
    id: 'marketing',
    title: 'Data-Driven marketing',
    icon: <img src="/image/home-service-icon-5.png" className="w-[24px] h-[24px]" />,
    description: 'Analytics-first marketing campaigns that deliver measurable ROI.',
    tags: ['Analytics', 'Growth'],
    image: '/image/service-5.png',
    progress: 95
  }
];

export const ServicesOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <section className="md:py-20 px-4 md:px-16 bg-black">
      <div className="max-w-[1500px] mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[28px] md:text-[42px] text-primary font-medium max-w-[620px] leading-tight">
            Expert services that move your business forward
          </h3>
          <Link
            to="/contact"
            className="border border-primary text-primary px-4 py-2 md:px-8 md:py-3 rounded-[10px] text-[17px]  hover:text-black transition-colors hover:bg-[#F3FFC9] hover:text-black md:w-auto text-center"
          >
            Get started
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Left: Tablist */}
          <motion.div
            className="flex flex-col gap-5"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
          >
            {services.map((service, index) => {
              const isActive = activeTab.id === service.id;
              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  onDoubleClick={() => navigate(`/services/${service.id}`)}
                  className={`cursor-pointer rounded-[20px] px-[20px] py-[20px] transition-all duration-300 flex flex-col justify-center ${isActive ? 'bg-[#161A18]' : 'bg-[#161A18] h-[66px] hover:bg-surface/80'
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-4">
                    <span className={`${isActive ? 'text-primary' : 'text-icon'}`}>{service.icon}</span>
                    <h4 className={`text-[16px] md:text-[19px] font-normal ${isActive ? 'text-primary' : 'text-primary'}`}>{service.title}</h4>
                  </div>
                  {isActive && (
                    <div className="mt-4 animate-fade-in ">
                      <p className="text-secondary text-[16px] md:text-[16.7px] mb-4 max-w-[520px]">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                          <span key={tag} className="text-[13px] text-secondary border border-[#2f3126] px-3 py-1.5 rounded-[5px] bg-[#161A18]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Preview Panel */}
          <motion.div
            className="md:bg-[#161A18] rounded-[20px] p-0 h-full min-h-[350px] md:min-h-[500px] flex flex-col relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
            }}
          >
            {/* Background blurred image simulation */}
            <div className="absolute inset-0 md:bg-gradient-to-br from-green-900/20 to-black/80 z-0 hiiden sm:block"></div>

            <div className="relative z-10 md:p-[40px] md:bg-primary text-surface rounded-[20px] md:m-4 h-full flex flex-col ">
              <div className="text-sm opacity-60 mb-2 hidden sm:block">Projects &gt; {activeTab.title}</div>
              <h3 className="text-2xl font-medium mb-6 leading-tight hidden sm:block">Project Preview: {activeTab.title}</h3>

              <div className="grid grid-cols-2 gap-4 mb-6 hidden sm:block">
                <div>
                  <span className="text-sm opacity-60 block">Status:</span>
                  <span className="bg-[#E4F7B5] px-2 py-0.5 rounded text-sm inline-block mt-1">Completed</span>
                </div>
                <div>
                  <span className="text-sm opacity-60 block">Date:</span>
                  <span className="text-sm font-medium mt-1">25 May, 2025</span>
                </div>
              </div>

              <div className="mb-8 hidden sm:block">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{activeTab.progress}%</span>
                </div>
                <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-black h-full rounded-full transition-all duration-500"
                    style={{ width: `${activeTab.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="rounded-[20px] overflow-hidden h-auto mt-auto flex-grow relative">
                <img src={activeTab.image} alt="Preview" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    
    </section >
  );
};

export const PerformanceStats: React.FC = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 xl:px-36 bg-black">
      <div className="max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Map Decoration */}
          <div className="flex justify-center opacity-100">
            <img src="/image/world-map.png" alt="World Map" className="w-full h-auto" />
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[36px] font-medium text-[#F3FFC9] mb-4 leading-tight">
              Proven performance, Measurable results
            </h2>
            <p className="text-[15px] md:text-[18px] text-[#A9AD9B] leading-[1.7] mb-12">
              Our work is backed by measurable results. These numbers reflect the trust, success, and outcomes we've delivered for our B2B partners across industries and regions.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="">
                <div className="text-[40px] md:text-[48px] font-medium text-[#F3FFC9] mb-2">4X
                  <div className="border-b border-[#2F3126] pb-4"></div>
                </div>
                <p className="text-[14px] md:text-[18px] text-[#A9AD9B]">Average ROI on digital strategy projects</p>
              </div>
              <div className="">
                <div className="text-[40px] md:text-[48px] font-medium text-[#F3FFC9] mb-2">5
                  <div className="border-b border-[#2F3126] pb-4"></div>
                </div>
                <p className="text-[14px] md:text-[18px] text-[#A9AD9B]">Countries served with B2B services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};