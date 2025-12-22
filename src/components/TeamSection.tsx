import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "John Carter",
    role: "Managing Director",
    image: "/image/team-1.png",
  },
  {
    name: "Nina Kapoor",
    role: "Financial Consultant",
    image: "/image/team-2.png",
  },
  {
    name: "Alicia Morgan",
    role: "Senior Marketing Consultant",
    image: "/image/team-3.png",
  },
  {
    name: "Liam Cheng",
    role: "Lead Business Analyst",
    image: "/image/team-4.png",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-black py-12">
      {/* Heading */}
      <h3 className="max-w-[510px] mx-auto px-4 text-center text-[#F3FFC9] font-inter font-medium text-[26px] md:text-[36px] lg:text-[40px] leading-tight md:leading-[57px]">
        Meet the talent behind the transformation
      </h3>

      {/* Grid */}
      <div className="mt-20 max-w-[1460px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-[20px] group"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[342.5px] object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#161A18]/50 rounded-[20px]" />

            {/* Name + Role */}
            <div
              className="
                absolute left-6 bottom-6 z-10
                transition-all duration-300
                lg:group-hover:bottom-14
              "
            >
              <p className="text-[#F9FFE5] text-[16.7px] leading-[25px] font-inter">
                {member.name}
              </p>
              <p className="text-[#F9FFE5] text-[13.1px] leading-[25px] font-inter">
                {member.role}
              </p>
            </div>

            {/* Social Icons */}
            <div
              className="
                absolute left-6 bottom-6 z-10 flex gap-3
                transition-all duration-300
                opacity-0 md:opacity-0 md:group-hover:opacity-100
                lg:opacity-0 lg:group-hover:opacity-100
                lg:translate-y-2 lg:group-hover:translate-y-0
              "
            >
              <SocialIcon icon={<Facebook size={15} />} />
              <SocialIcon icon={<Instagram size={15} />} />
              <SocialIcon icon={<Linkedin size={15} />} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

/* ----------------------------- */
/* Social Icon Component */
/* ----------------------------- */
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="w-[30px] h-[30px] border border-[#F3FFC9] rounded-[10px] flex items-center justify-center">
      <span className="text-[#F3FFC9]">{icon}</span>
    </div>
  );
};
