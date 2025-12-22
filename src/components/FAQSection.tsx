import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const FAQItem = ({
  number,
  question,
  answer,
  isOpen,
  onClick
}: any) => (
  <motion.div
    variants={fadeUp}
    className="bg-[#161A18] border border-white/10 rounded-[20px] overflow-hidden"
  >
    <button
      onClick={onClick}
      className="w-full flex items-center gap-5 px-6 py-5 text-left"
    >
      <span className="text-[#F3FFC9] text-[18px]">
        {number}.
      </span>
      <span className="flex-1 text-[17px] font-medium text-[#F3FFC9]">
        {question}
      </span>
      
    </button>

    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-6 pl-[64px] text-[16px] text-[#a9ad9b] leading-[1.6]">
        {answer}
      </div>
    </motion.div>
  </motion.div>
);

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "What types of B2B companies do you work with?",
      a: "Professional, conversion-optimized websites tailored for business clients and lead generation."
    },
    {
      q: "What services do you offer?",
      a: "Web design, SaaS development, strategy, branding, and marketing."
    },
    {
      q: "What industries do you specialize in?",
      a: "Healthcare, Finance, Technology, Manufacturing, and Logistics."
    },
    {
      q: "How long does a typical consulting engagement last?",
      a: "Typically between 3 to 12 months depending on scope."
    },
    {
      q: "What sets your consulting firm apart?",
      a: "A data-driven approach focused on measurable ROI."
    }
  ];

  return (
    <section className="py-[40px] px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-[70px]"
        >
          <h2 className="text-[30px] md:text-[48px] font-medium text-[#F3FFC9] mb-6">
            Frequently asked questions
          </h2>
          <p className=" text-[17px] text-[#A9AD9B] max-w-lg">
            Got questions about our B2B consulting services, process, or working
            together? Here are the most common ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[50%_48%] xl:grid-cols-[50%_48%] gap-10 lg:gap-6 xl:gap-4" >
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <FAQItem
                key={i}
                number={`0${i + 1}`}
                question={f.q}
                answer={f.a}
                isOpen={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[24px] overflow-hidden min-h-[420px] relative"
          >
            <img
              src="/image/FAQ.png"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
