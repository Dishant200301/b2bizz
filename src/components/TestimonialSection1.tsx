import React from 'react';

export default function TestimonialCard() {
  return (
    <div className="w-full  bg-black md:flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-[1160px] h-[385px] rounded-[30px] overflow-hidden group">
        
        {/* Background Image - Simulating the blurred video/image background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image/TestimonialVideo.jpg')`, // Placeholder for the blurred bokeh effect
            filter: 'blur(10px) brightness(0.8)',
            transform: 'scale(1.1)' // Prevent blur edges
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#161A18] opacity-50 mix-blend-multiply" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-between px-[30px] py-[40px] md:px-[60px] md:py-[50px]">
          
          {/* Quote Text */}
          <p className="font-sans text-[#F3FFC9] text-[17px] md:text-[22.3px] leading-[1.4] md:leading-[31px] font-normal max-w-[1031px]">
            Working with B2bizz was a game-changer for our B2B strategy. Their team didn’t just offer advice — they became an extension of our leadership. Their insights, professionalism, and tailored approach helped us unlock new growth and streamline our operations.
          </p>

          {/* Author Section */}
          <div className="flex items-center gap-[10px]">
            {/* Avatar */}
            <img 
              src="/image/team-1.png" 
              alt="Orion Blake" 
              className="w-[45px] h-[45px] rounded-[5.2px] object-cover bg-gray-500"
            />
            
            {/* Info */}
            <div className="flex flex-col">
              <span className="font-sans text-[#F3FFC9] text-[17.4px] leading-[25px] font-normal">
                Orion Blake,
              </span>
              <span className="font-sans text-[#F3FFC9] text-[14px] leading-[17px] font-normal opacity-90">
                COO
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}