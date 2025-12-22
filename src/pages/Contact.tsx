import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../components/FAQSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactInfoCard: React.FC<{
  title: string;
  value: React.ReactNode;
  icon: string;
}> = ({ title, value, icon }) => (
  <motion.div
    variants={fadeUp}
    className="
      rounded-[24px]
      border border-white/10
      bg-[#161A18]
      px-8 py-6
      flex flex-col gap-3
    "
  >
    <img src={icon} alt="" className="w-[40px] h-[40px]" />
    <h4 className="text-[18px] text-[#F3FFC9]">{title}</h4>
    <div className="text-[16px] text-[#A9AD9B] leading-[1.5]">
      {value}
    </div>
  </motion.div>
);

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <section className="py-[10px] px-[10px] lg:py-[10px] ">
        <div className="max-w-[1500px] mx-auto bg-[#161A18] rounded-[10px] md:rounded-[30px] px-4 md:px-[30px] lg:px-[80px] pt-16 md:pt-20 lg:pt-[80px] pb-16 md:pb-20 lg:pb-[90px]">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-[620px] mx-auto mb-12 md:mb-16 lg:mb-[80px] px-4"
          >
            <h1 className="text-[28px] md:text-[44px] lg:text-[56px] font-medium text-[#F3FFC9] mb-4">
              Connect with us
            </h1>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#A9AD9B]">
              Let’s start a conversation that moves your business forward.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16 lg:mb-[90px]"
          >
            <ContactInfoCard
              title="Email"
              icon="/image/contact-logo-1.png"
              value={<a href="mailto:hello@example.com">hello@example.com</a>}
            />

            <ContactInfoCard
              title="Phone"
              icon="/image/contact-logo-2.png"
              value={<a href="tel:+18004567890">+1 (800) 456-7890</a>}
            />

            <ContactInfoCard
              title="Office address"
              icon="/image/contact-logo-3.png"
              value="Your B2B Consulting Co. 120 Business Avenue, NY 10001, USA"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[760px] mx-auto"
          >
            <form className="flex flex-col gap-4">
              <input
                placeholder="Your name"
                className="h-[58px] rounded-[12px] bg-black border border-white/10 px-5 text-[15px] outline-none focus:border-[#F3FFC9]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  placeholder="Your email address"
                  className="h-[58px] rounded-[12px] bg-black border border-white/10 px-5 text-[15px] outline-none focus:border-[#F3FFC9]"
                />
                <input
                  placeholder="Your phone number"
                  className="h-[58px] rounded-[12px] bg-black border border-white/10 px-5 text-[15px] outline-none focus:border-[#F3FFC9]"
                />
              </div>

              <textarea
                placeholder="Message"
                className="h-[190px] rounded-[12px] bg-black border border-white/10 px-5 py-4 text-[15px] outline-none resize-none focus:border-[#F3FFC9]"
              />

              <button
                className="
                  h-[60px]
                  rounded-[14px]
                  bg-[#F3FFC9]
                  text-[#161A18]
                  text-[17px]
                  font-medium
                "
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Contact;
