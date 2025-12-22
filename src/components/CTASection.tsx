import React from 'react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-black border border-[#333] rounded-[30px] p-8 md:p-20 text-center relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 max-w-[700px] mx-auto">
            <h2 className="text-[24px] md:text-[48px] font-medium text-[#F3FFC9] mb-6 leading-[1.2]">
              Take the first step toward sustainable growth
            </h2>
            <p className="text-[#A9AD9B] text-[15px] md:text-[18px] leading-relaxed mb-10">
              Looking to scale your B2B business with clarity and confidence? Our consulting experts are ready to guide you every step of the way.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#F3FFC9] text-black px-4 py-2 md:px-8 md:py-4 rounded-[12px] text-[16px] font-medium hover:bg-[#E2EEB5] transition-colors"
            > 
              Book a free call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
