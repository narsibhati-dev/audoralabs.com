export interface Product {
  id: string;
  name: string;
  description: string;
  status: "live" | "in-progress" | "planned";
  icon: string;
  techStack: string[];
  siteUrl?: string;
  githubUrl?: string;
}

export const products: Product[] = [
  {
    id: "audora",
    name: "Audora",
    description:
      "Remote audio & video recording platform built with WebRTC and scalable media pipelines",
    status: "in-progress",
    icon: "video",
    techStack: ["WebRTC", "Rust", "PostgreSQL"],
    siteUrl: "https://audora.io",
    githubUrl: "https://github.com/audoralabs/audora",
  },
  {
    id: "better-uptime",
    name: "Better Uptime",
    description:
      "Modern uptime monitoring and alerting system for APIs and web services",
    status: "in-progress",
    icon: "activity",
    techStack: ["Go", "Redis", "Webhooks"],
  },
  {
    id: "billary",
    name: "Billary",
    description:
      "Invoicing and contract management platform for freelancers and small teams",
    status: "planned",
    icon: "file-text",
    techStack: ["Next.js", "Stripe", "PDF"],
  },
  {
    id: "emply",
    name: "Emply",
    description:
      "Staff, payroll, and leave management system for growing teams",
    status: "planned",
    icon: "users",
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
];
