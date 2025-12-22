export interface CaseStudyDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  industry: string;
  region: string;
  duration: string;
  budget: string;
  heroImage: string;
  overview: string[];
  overviewImages: string[];
  approach: {
    title: string;
    description: string;
    points: string[];
  };
  challenge: {
    title: string;
    description: string;
    image: string;
  };
  solution: {
    title: string;
    description: string;
    points: string[];
    images: string[];
  };
  results: {
    title: string;
    metrics: { value: string; label: string }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "transedge": {
    id: "transedge",
    title: "Lead generation boost for a B2B logistics company",
    category: "Design & development",
    client: "TransEdge Logistics",
    industry: "B2B Logistics",
    region: "North America",
    duration: "3 months (Phase 1)",
    budget: "$25,000",
    heroImage: "/image/CaseStudies-1.png",
    overview: [
      "We began by conducting a comprehensive audit of their marketing funnel, customer personas, and digital assets. We then crafted a full-funnel strategy that included the development of high-converting landing pages, gated content assets such as whitepapers and calculators, targeted LinkedIn advertising aimed at key decision-makers, and full CRM integration using HubSpot to automate nurturing workflows. Our campaigns were fine-tuned through A/B testing and real-time data monitoring to ensure consistent performance improvement.",
      "This digital shift not only delivered short-term results but also positioned TransEdge Logistics for long-term success with a sustainable, always-on pipeline that continues to generate leads even after the project’s conclusion."
    ],
    overviewImages: [
      "/image/CaseStudiesDetails-1.png",
      "/image/CaseStudiesDetails-2.png"
    ],
    approach: {
      title: "Our Approach",
      description: "TransEdge Logistics specializes in time-sensitive freight, custom logistics solutions, and fleet management technology integration. With a growing portfolio and high customer satisfaction, the company aimed to increase visibility and generate more qualified leads in the competitive B2B logistics market.",
      points: [
        "Designed and launched a conversion-optimized landing page",
        "Implemented gated downloadable resources",
        "Introduced HubSpot workflows to track and nurture leads"
      ]
    },
    challenge: {
      title: "The Challenge",
      description: "TransEdge Logistics had an excellent logistics network and client service model — but struggled to attract new qualified B2B clients. Their website was outdated, they had no lead capture strategy, and digital campaigns were producing low ROI.",
      image: "/image/CaseStudiesDetails-3.png"
    },
    solution: {
      title: "The Solution",
      description: "We implemented a complete digital overhaul focused on capturing high-intent leads and nurturing them through automated workflows.",
      points: [
        "Strategic foundation",
        "Landing page + Offer creation",
        "LinkedIn & Email outreach",
        "CRM & automation setup"
      ],
      images: [
        "/image/CaseStudiesDetails-4.png",
        "/image/CaseStudiesDetails-5.png"
      ]
    },
    results: {
      title: "Measurable Results",
      metrics: [
        { value: "2.5X", label: "Increase in qualified B2B leads" },
        { value: "38%", label: "Bounce rate dropped" },
        { value: "4.3x", label: "Marketing ROI" },
        { value: "22/month", label: "Meeting Bookings (via form)" }
      ]
    },
    testimonial: {
      quote: "We used to rely on referrals and cold calls — now we have an inbound pipeline that runs 24/7. This project didn’t just generate leads, it reshaped how we sell.",
      author: "Logan Meyer",
      role: "CMO",
      image: "/image/team-4.png"
    }
  },
  // Fallback data
  "default": {
    id: "default",
    title: "Strategic digital shift for a B2B consulting agency",
    category: "Enterprise digital strategy",
    client: "Global Consult",
    industry: "Consulting",
    region: "Europe",
    duration: "6 months",
    budget: "$45,000",
    heroImage: "/image/CaseStudies-2.png",
    overview: [
      "Facing stagnation in a rapidly evolving market, Global Consult needed a digital transformation to stay relevant. We audited their entire digital footprint and implemented a modern tech stack.",
      "The result was a streamlined operation that reduced overhead and improved client acquisition rates significantly."
    ],
    overviewImages: [
      "/image/CaseStudiesDetails-1.png",
      "/image/CaseStudiesDetails-2.png"
    ],
    approach: {
      title: "Our Approach",
      description: "We focused on modernizing their internal tools and external presence simultaneously to ensure a cohesive brand experience.",
      points: [
        "Full tech stack audit",
        "CRM migration",
        "Employee training programs"
      ]
    },
    challenge: {
      title: "The Challenge",
      description: "Legacy systems were slowing down client deliverables, and their digital presence did not reflect their market authority.",
      image: "/image/CaseStudiesDetails-3.png"
    },
    solution: {
      title: "The Solution",
      description: "A phased digital transformation roadmap that prioritized high-impact changes first.",
      points: [
        "Cloud migration",
        "Automated reporting",
        "New corporate website"
      ],
      images: [
        "/image/CaseStudiesDetails-4.png",
        "/image/CaseStudiesDetails-5.png"
      ]
    },
    results: {
      title: "Measurable Results",
      metrics: [
        { value: "60%", label: "Missed appointments decreased" },
        { value: "2X", label: "Client retention rate" },
        { value: "15%", label: "Reduction in overhead" },
        { value: "98%", label: "Employee satisfaction" }
      ]
    },
    testimonial: {
      quote: "The strategic shift allowed us to focus on what we do best—consulting—while the technology handled the rest.",
      author: "Sarah Jenkins",
      role: "CEO",
      image: "/image/team-4.png"
    }
  }
};
