import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-0 md:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-[1100px] mx-auto">
        {/* Main CTA Card */}
        <div className="relative rounded-[30px] overflow-hidden mb-6">
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(/image/CTA-image.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center py-16 md:py-20 px-6">
            <h2 className="text-[24px] md:text-[40px] font-medium text-[#F3FFC9] mb-6 leading-tight">
              Is your B2B business ready for<br />the next level?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-[#F3FFC9] px-6 py-3 rounded-[10px] text-[15px] font-medium hover:bg-[#F3FFC9] hover:text-black transition-colors"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path
                    d="M2 10.6842H16M16 10.6842L13.3949 8.0791M16 10.6842L13.3949 13.2893M2 0V11.0526"
                    stroke="#F3FFC9"
                    strokeWidth="1.2"
                  />
                </svg>
              Book a Free Call
            </Link>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Link
            to="/contact"
            className="group bg-[#0E100F] rounded-[20px] p-4 flex items-center justify-between hover:bg-[#161A18] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-[38px] h-[38px] md:w-[48px] md:h-[48px] bg-[#F3FFC9] rounded-full flex items-center justify-center">
                <Zap size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-[#F3FFC9] text-[15px] md:text-[18px] font-medium mb-1">
                  Time to level up your B2B game?
                </h3>
                <p className="text-[#9CA3AF] text-[14px]">Contact now</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform hidden sm:block" />
          </Link>

          {/* Card 2 */}
          <Link
            to="/contact"
            className="group bg-[#0E100F] rounded-[20px] p-4 flex items-center justify-between hover:bg-[#161A18] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-[38px] h-[38px] md:w-[48px] md:h-[48px] bg-[#F3FFC9] rounded-full flex items-center justify-center">
                <Users size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-[#F3FFC9] text-[15px] md:text-[18px] font-medium mb-1">
                  Need expert help to scale fast?
                </h3>
                <p className="text-[#9CA3AF] text-[14px]">Contact our experts</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform hidden sm:block" />
          </Link>
        </div>
      </div>
    </section>
  );
};
