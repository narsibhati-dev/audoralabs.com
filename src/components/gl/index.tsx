"use client";

import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

const PARTICLE_DEFAULTS = {
  speed: 1.0,
  focus: 3.8,
  aperture: 1.79,
  size: 512,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  timeScale: 1,
  pointSize: 10.0,
  opacity: 0.8,
  planeScale: 10.0,
  vignetteDarkness: 1.5,
  vignetteOffset: 0.4,
  useManualTime: false,
  manualTime: 0,
} as const;

export const GL = () => {
  return (
    <div
      id="webgl"
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      <Canvas
        className="h-full w-full"
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={["#000"]} />
        <Particles
          speed={PARTICLE_DEFAULTS.speed}
          aperture={PARTICLE_DEFAULTS.aperture}
          focus={PARTICLE_DEFAULTS.focus}
          size={PARTICLE_DEFAULTS.size}
          noiseScale={PARTICLE_DEFAULTS.noiseScale}
          noiseIntensity={PARTICLE_DEFAULTS.noiseIntensity}
          timeScale={PARTICLE_DEFAULTS.timeScale}
          pointSize={PARTICLE_DEFAULTS.pointSize}
          opacity={PARTICLE_DEFAULTS.opacity}
          planeScale={PARTICLE_DEFAULTS.planeScale}
          useManualTime={PARTICLE_DEFAULTS.useManualTime}
          manualTime={PARTICLE_DEFAULTS.manualTime}
          introspect={false}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={PARTICLE_DEFAULTS.vignetteDarkness}
            uniforms-offset-value={PARTICLE_DEFAULTS.vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  );
};
