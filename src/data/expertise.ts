export interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Real-time Systems & Event-driven Architecture",
    description:
      "WebSocket servers, message queues, and event streaming that handle millions of events",
    icon: "activity",
  },
  {
    title: "Scalable Backends & APIs",
    description:
      "RESTful and GraphQL APIs built for performance, reliability, and developer experience",
    icon: "server",
  },
  {
    title: "Production-grade Infrastructure",
    description:
      "Cloud systems, containerization, CI/CD pipelines, and monitoring that keeps you online",
    icon: "cloud",
  },
  {
    title: "End-to-end Product Engineering",
    description:
      "From concept to deployment, we ship complete products, not just prototypes",
    icon: "rocket",
  },
];
