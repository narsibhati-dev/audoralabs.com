export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  status: "live" | "in-progress" | "planned";
  icon: string;
  techStack: string[];
  siteUrl?: string;
  githubUrl?: string;
  image?: string;
  video?: string;
  category?: string;
}

export const products: Product[] = [
  {
    id: "audora",
    name: "Audora",
    description:
      "Remote audio & video recording platform built with WebRTC and scalable media pipelines",
    longDescription: `High-quality remote recordings for podcasters and content creators
Real-time collaboration with multiple guests and co-hosts
Scalable media pipelines that handle thousands of concurrent sessions
Automatic transcription and post-production tools
Built-in editor for quick turnaround on content`,
    status: "in-progress",
    icon: "video",
    techStack: ["WebRTC", "Rust", "PostgreSQL", "React", "TypeScript"],
    siteUrl: "https://audora.io",
    githubUrl: "https://github.com/audoralabs/audora",
    category: "Media",
  },
  {
    id: "better-uptime",
    name: "Better Uptime",
    description:
      "Modern uptime monitoring and alerting system for APIs and web services",
    longDescription: `Monitor APIs, websites, and services with sub-minute intervals
Intelligent alerting with customizable escalation policies
Beautiful status pages for transparent customer communication
Integrations with Slack, Discord, PagerDuty, and more
Historical uptime tracking and SLA reporting`,
    status: "in-progress",
    icon: "activity",
    techStack: ["Go", "Redis", "Webhooks", "PostgreSQL", "React"],
    category: "DevOps",
  },
  {
    id: "billary",
    name: "Billary",
    description:
      "Invoicing and contract management platform for freelancers and small teams",
    longDescription: `Professional invoice generation with customizable templates
Contract management with e-signature support
Automatic payment reminders and tracking
Multi-currency support for international clients
Tax calculation and reporting features`,
    status: "planned",
    icon: "file-text",
    techStack: ["Next.js", "Stripe", "PDF", "PostgreSQL"],
    category: "Business",
  },
  {
    id: "emply",
    name: "Emply",
    description:
      "Staff, payroll, and leave management system for growing teams",
    longDescription: `Complete employee lifecycle management
Automated payroll processing with tax compliance
Leave tracking with approval workflows
Time tracking and attendance management
Team scheduling and shift management`,
    status: "planned",
    icon: "users",
    techStack: ["React", "Node.js", "PostgreSQL"],
    category: "Business",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
