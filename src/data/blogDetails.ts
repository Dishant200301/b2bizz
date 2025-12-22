export interface BlogPostDetail {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  heroImage: string;
  content: {
    introHeading: string;
    introText: string;
    listTitle?: string;
    listItems: string[];
    midText: string;
    videoUrl?: string; // YouTube embed URL
    videoThumbnail?: string; // For the custom play button overlay
    secondaryHeading: string;
    secondaryText: string;
    quote: string;
    closingText: string;
  };
}

export const blogDetails: Record<string, BlogPostDetail> = {
  "1": {
    id: "1",
    category: "Financial Planning",
    date: "August 13, 2025",
    title: "Best practices for keeping your data secure",
    excerpt: "Create complex passwords and enable MFA for an extra layer of security. Regularly update software, apps, and operating systems to fix vulnerabilities.",
    heroImage: "/image/blog-1.png",
    content: {
      introHeading: "The most common business debate isn't as black and white as you might think",
      introText: "He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own.",
      listItems: [
        "The standard chunk of Lorem Ipsum used since the 1500s.",
        "Reproduced below for those interested.",
        "It is a long-established fact that a reader will.",
        "Distracted by the readable content of a page when looking at its layout."
      ],
      midText: "Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      videoThumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600", 
      secondaryHeading: "Ten questions you should answer truthfully",
      secondaryText: "Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.",
      quote: "Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden.",
      closingText: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far."
    }
  },
  // Fallback for other IDs to avoid crashes in demo
  "default": {
    id: "default",
    category: "General Strategy",
    date: "August 13, 2025",
    title: "Strategic insights for modern B2B growth",
    excerpt: "Discover the key methodologies that are shaping the future of business-to-business interactions in a digital-first world.",
    heroImage: "/image/blog-2.png",
    content: {
      introHeading: "Why strategy matters more than ever",
      introText: "In a crowded market, distinct strategy is your only leverage. We explore how top firms are pivoting their approach to capture new value.",
      listItems: [
        "Data-driven decision making is the new norm.",
        "Customer-centricity builds long-term value.",
        "Agility beats size in the modern economy.",
        "Integration is key to operational efficiency."
      ],
      midText: "Implementing these changes requires a cultural shift, not just a technological one. Leaders must step up to guide their teams through uncertainty.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      secondaryHeading: "The path forward",
      secondaryText: "Looking ahead, the companies that will thrive are those that can balance innovation with execution. It's not enough to have a good idea; you must be able to deliver it at scale.",
      quote: "Strategy is not about being better at what you do; it's about being different in what you do.",
      closingText: "As we move into the next fiscal year, consider how these principles apply to your organization. The opportunity for growth is there for those willing to seize it."
    }
  }
};