"use client";

import dynamic from "next/dynamic";

const GL = dynamic(() => import("@/components/gl").then((m) => m.GL), {
  ssr: false,
});

export function ParticleCanvasDynamic() {
  return <GL />;
}
