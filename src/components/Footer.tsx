import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none">
      <path d="M6.65796 11.6732H10.0339C10.0339 14.5689 12.4007 17.1121 15.0977 17.1121C17.7947 17.1121 20.1616 14.5689 20.1616 11.6732H23.5375C23.5375 16.4519 19.6739 20.4881 15.0977 20.4881C10.5215 20.4881 6.65796 16.4519 6.65796 11.6732Z" fill="#F3FFC9" />
      <path d="M0 11.7181H3.37591C3.37591 18.1811 8.63483 23.44 15.0978 23.44C21.5608 23.44 26.8197 18.1811 26.8197 11.7181H30.1956C30.1956 20.0416 23.4213 26.8159 15.0978 26.8159C6.77433 26.8159 0 20.0453 0 11.7181Z" fill="#F3FFC9" />
      <path d="M15.0982 0C21.5611 0 26.8201 5.25892 26.8201 11.7219H23.4441C23.4441 7.11942 19.7006 3.37591 15.0982 3.37591C10.4957 3.37591 6.75213 7.11942 6.75213 11.7219H3.37622C3.37622 5.25516 8.63514 0 15.0982 0Z" fill="#F3FFC9" />
      <path d="M15.0973 6.57925C17.9406 6.57925 20.2549 8.89362 20.2549 11.7369H16.8791C16.8791 10.7541 16.0801 9.95516 15.0973 9.95516C14.1145 9.95516 13.3156 10.7541 13.3156 11.7369H9.9397C9.9397 8.88987 12.2541 6.57925 15.0973 6.57925Z" fill="#F3FFC9" />
    </svg>
    <span className="text-[#F3FFC9] text-[22px] font-medium">B2zz</span>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161a18] mt-24 pt-10 mx-2 rounded-t-3xl
    ">
      <div className="max-w-[1500px] mx-auto px-4 lg:px-10">

        {/* ================= MAIN CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ================= LEFT CARD ================= */}
          <div className="bg-black rounded-[30px] border border-[#2F3126] p-6 md:p-8 lg:p-10">

            {/* Subscribe */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] flex-1 bg-black border border-[#8D9180]
                rounded-[10px] px-4 py-4 text-[#8D9180] text-[15px]
                placeholder:text-[#505348] outline-none"
              />
              <button
                className="h-[52px] px-8 bg-[#F3FFC9] text-black
                rounded-[10px] text-[15px] font-medium"
              >
                Subscribe
              </button>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {/* Pages */}
              <div>
                <h4 className="text-[#F3FFC9] text-[18px] mb-6">Pages links</h4>
                <div className="grid grid-cols-1 gap-y-4 text-[16px] text-[#8D9180]">
                  <Link to="/" className="text-[#F3FFC9]">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/services/digital-marketing">Service Details</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>

              {/* Utility */}
              <div>
                <h4 className="text-[#F3FFC9] text-[18px] mb-6">Utility links</h4>
                <div className="grid grid-cols-1 gap-y-4 text-[16px] text-[#8D9180]">
                  <Link to="/blog">Blog</Link>
                  <Link to="/about">About</Link>
                  <Link to="/case-studies">Case Studies</Link>
                  <Link to="/privacy">Privacy Policy</Link>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-10">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-[36px] h-[36px] border border-[#F3FFC9]
                  rounded-[10px] flex items-center justify-center text-[#F3FFC9]"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="bg-black rounded-[30px] border border-[#2F3126] p-6 md:p-8 lg:p-10 relative">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="text-[#F3FFC9] text-[18px] mb-4">Contact on</h4>
                <p className="text-[#8D9180] text-[16px] mb-2">hello@example.com</p>
                <p className="text-[#8D9180] text-[16px]">+123 456 7890</p>
              </div>

              <div>
                <h4 className="text-[#F3FFC9] text-[18px] mb-4">Address</h4>
                <p className="text-[#8D9180] text-[16px] leading-[24px]">
                  Your B2B Consulting Co. 120<br />
                  Business Avenue, NY 10001,<br />
                  USA
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-[#F3FFC9] text-[18px] mb-4">
                Featured case study
              </h4>
              <img
                src="/image/footer-image.png"
                className="w-[200px] h-[140px] rounded-[20px] object-cover"
              />
            </div>

            <div className="absolute bottom-8 right-8">
              <Logo />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="text-center py-6 text-[#6B7280] text-[14px]">
          Designed by <span className="underline">Webestica</span>, Powered by{" "}
          <span className="underline">Webflow</span>
        </div>
      </div>
    </footer>
  );
};
