export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  detailImage: string;
  descriptionTitle: string;
  description: string;
  benefits: string[];
  pricing: {
    monthly: PricingTier[];
    yearly: PricingTier[];
  };
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "web": {
    id: "web",
    title: "B2B website design & development",
    subtitle: "Conversion-focused websites are built for speed, trust, and lead generation.",
    heroImage: "/image/service-1.png",
    detailImage: "/image/service-details.png",
    descriptionTitle: "Website design isn’t just about looks — it’s about building trust and driving results.",
    description: "In the B2B world, your website is often the first and most critical touchpoint. If it’s slow, outdated, or unclear, you're losing leads. We build high-performing websites that speak directly to your audience, convert better, and scale with your business.",
    benefits: [
      "Communicate value clearly and quickly",
      "Improve lead generation with smart UX",
      "Enhance credibility and professionalism",
      "Make updates easily with a user-friendly CMS"
    ],
    pricing: {
      monthly: [
        {
          name: "Starter",
          price: "$1,050",
          description: "Perfect for early-stage teams or small B2B companies.",
          features: ["Strategy sessions (2x/month)", "Competitive landscape analysis", "Ideal customer profile (ICP) development", "1 sales funnel review or optimization"],
          cta: "Get started"
        },
        {
          name: "Growth",
          price: "$2,450",
          description: "Designed for scaling B2B teams focused on lead generation.",
          features: ["Weekly consulting sessions", "GTM & sales process alignment", "CRM optimization and reporting", "Lead generation roadmap", "Priority support"],
          cta: "Start growing"
        },
        {
          name: "Enterprise",
          price: "$3,850",
          description: "Consulting for mature B2B operations or multi-region teams.",
          features: ["Dedicated strategy consultant", "Quarterly growth audits & roadmap", "Team training and onboarding", "Full-stack MarTech evaluation", "On-call support and quarterly workshops"],
          cta: "Get started"
        }
      ],
      yearly: [
        {
          name: "Starter",
          price: "$10,500",
          description: "Perfect for early-stage teams or small B2B companies.",
          features: ["Strategy sessions (2x/month)", "Competitive landscape analysis", "Ideal customer profile (ICP) development", "1 sales funnel review or optimization"],
          cta: "Get started"
        },
        {
          name: "Growth",
          price: "$24,500",
          description: "Designed for scaling B2B teams focused on lead generation.",
          features: ["Weekly consulting sessions", "GTM & sales process alignment", "CRM optimization and reporting", "Lead generation roadmap", "Priority support"],
          cta: "Start growing"
        },
        {
          name: "Enterprise",
          price: "$38,500",
          description: "Consulting for mature B2B operations or multi-region teams.",
          features: ["Dedicated strategy consultant", "Quarterly growth audits & roadmap", "Team training and onboarding", "Full-stack MarTech evaluation", "On-call support and quarterly workshops"],
          cta: "Get started"
        }
      ]
    }
  },
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing Strategies",
    subtitle: "Data-driven marketing to grow your B2B presence.",
    heroImage: "/image/service-1.png",
    detailImage: "/image/service-details.png",
    descriptionTitle: "Marketing that drives real growth.",
    description: "We create comprehensive digital marketing strategies that align with your business goals, ensuring you reach the right audience at the right time.",
    benefits: [
      "Targeted audience reach",
      "Improved brand visibility",
      "Higher conversion rates",
      "Measurable ROI tracking"
    ],
    pricing: {
      monthly: [
        {
          name: "Starter",
          price: "$1,200",
          description: "Essential marketing for small teams.",
          features: ["Social media management", "Monthly newsletter", "Basic SEO"],
          cta: "Get started"
        },
        {
          name: "Growth",
          price: "$2,800",
          description: "Accelerate your lead generation.",
          features: ["PPC management", "Content creation (4 posts/mo)", "Advanced SEO", "Weekly reporting"],
          cta: "Start growing"
        },
        {
          name: "Enterprise",
          price: "$4,500",
          description: "Full-scale marketing department.",
          features: ["Omnichannel strategy", "Video marketing", "PR management", "Dedicated account manager"],
          cta: "Get started"
        }
      ],
      yearly: [
        {
          name: "Starter",
          price: "$12,000",
          description: "Essential marketing for small teams.",
          features: ["Social media management", "Monthly newsletter", "Basic SEO"],
          cta: "Get started"
        },
        {
          name: "Growth",
          price: "$28,000",
          description: "Accelerate your lead generation.",
          features: ["PPC management", "Content creation (4 posts/mo)", "Advanced SEO", "Weekly reporting"],
          cta: "Start growing"
        },
        {
          name: "Enterprise",
          price: "$45,000",
          description: "Full-scale marketing department.",
          features: ["Omnichannel strategy", "Video marketing", "PR management", "Dedicated account manager"],
          cta: "Get started"
        }
      ]
    }
  },
  // Default data for other services to avoid empty pages
  "default": {
    id: "default",
    title: "Service Details",
    subtitle: "Comprehensive solutions tailored to your business needs.",
    heroImage: "/image/service-1.png",
    detailImage: "/image/service-details.png",
    descriptionTitle: "Strategic execution for measurable growth.",
    description: "We provide end-to-end services that align with your business goals, ensuring sustainable growth and long-term success.",
    benefits: [
      "Data-driven strategies",
      "Expert consultation",
      "Scalable solutions",
      "Measurable ROI"
    ],
    pricing: {
        monthly: [
            {
              name: "Starter",
              price: "$1,050",
              description: "Perfect for early-stage teams.",
              features: ["Basic consultation", "Monthly report", "Email support"],
              cta: "Get started"
            },
            {
              name: "Growth",
              price: "$2,450",
              description: "Designed for scaling teams.",
              features: ["Weekly consultation", "Advanced reporting", "Priority support", "Strategy roadmap"],
              cta: "Start growing"
            },
            {
              name: "Enterprise",
              price: "$3,850",
              description: "For mature operations.",
              features: ["Dedicated consultant", "Quarterly audits", "Team training", "Full-stack evaluation", "24/7 support"],
              cta: "Get started"
            }
          ],
          yearly: [
            {
                name: "Starter",
                price: "$10,500",
                description: "Perfect for early-stage teams.",
                features: ["Basic consultation", "Monthly report", "Email support"],
                cta: "Get started"
              },
              {
                name: "Growth",
                price: "$24,500",
                description: "Designed for scaling teams.",
                features: ["Weekly consultation", "Advanced reporting", "Priority support", "Strategy roadmap"],
                cta: "Start growing"
              },
              {
                name: "Enterprise",
                price: "$38,500",
                description: "For mature operations.",
                features: ["Dedicated consultant", "Quarterly audits", "Team training", "Full-stack evaluation", "24/7 support"],
                cta: "Get started"
              }
          ]
    }
  }
};
