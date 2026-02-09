const SITE_DATA = {
  name: "AudoraLabs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://audoralabs.com",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE ?? "/images/og-image.webp",

  tagline: "We build software that ships.",
  description:
    "AudoraLabs is an independent product studio focused on building reliable, production-grade software. Real-time systems, scalable backends, and infrastructure that holds up in production.",
  shortDescription:
    "Real-time systems, scalable backends, and infrastructure that holds up in production. Built independently and in collaboration with founders.",

  alternateNames: ["AudoraLabs", "Audora Labs", "Audora"],

  twitterHandle: "@audoralabs",
  githubHandle: "audoralabs",
  linkedinHandle: "audoralabs",

  keywords: [
    "product studio",
    "software development",
    "real-time systems",
    "scalable backends",
    "production infrastructure",
    "WebRTC",
    "API development",
    "event-driven architecture",
    "typescript",
    "rust",
    "go",
  ],

  links: {
    twitter: "https://x.com/audoralabs",
    github: "https://github.com/audoralabs",
    linkedin: "https://linkedin.com/company/audoralabs",
  },
};

export default SITE_DATA;
