export interface Principle {
  title: string;
  description: string;
  iconName: "check-circle" | "trending-up" | "eye" | "shield";
}

export const principles: Principle[] = [
  {
    title: "Ship working software",
    description:
      "Focus on delivery and real-world impact, not just impressive demos",
    iconName: "check-circle",
  },
  {
    title: "Design for scale early",
    description:
      "Architecture decisions that prevent technical debt and enable growth",
    iconName: "trending-up",
  },
  {
    title: "Prefer clarity over complexity",
    description:
      "Maintainable code that teams can understand and evolve over time",
    iconName: "eye",
  },
  {
    title: "Build for production",
    description:
      "Systems that hold up under real-world usage, not lab conditions",
    iconName: "shield",
  },
];
