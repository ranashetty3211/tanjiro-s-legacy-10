import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function WaterRipples() {
  const ref = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const N = 6000;
    const positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = Math.random() * 3.5 + 0.6;
      const t = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4;
      positions[i * 3] = Math.cos(t) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(t) * r;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    const p = state.pointer;
    ref.current.rotation.y += p.x * 0.0008;
    ref.current.rotation.x += p.y * 0.0008;
  });

  return (
    <Points ref={ref} positions={geom} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.014}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 1.2) * 0.06);
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.7, 4]} />
        <meshStandardMaterial
          color="#1e3a5f"
          emissive="#3aa3ff"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function WaterScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} intensity={2} color="#60a5fa" />
      <pointLight position={[-4, -2, -3]} intensity={1.2} color="#f97316" />
      <Suspense fallback={null}>
        <GlowSphere />
        <WaterRipples />
      </Suspense>
    </Canvas>
  );
}
