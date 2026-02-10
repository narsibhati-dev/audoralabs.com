import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | AudoraLabs",
  description:
    "A portfolio of products and projects built by AudoraLabs - from real-time media platforms to developer tools.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
