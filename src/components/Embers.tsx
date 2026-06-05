import { useMemo } from "react";

export function Embers({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        hue: Math.random() > 0.5 ? "var(--ember)" : "var(--water-glow)",
        opacity: 0.4 + Math.random() * 0.5,
        key: i,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.key}
          className="absolute bottom-0 rounded-full blur-[1px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.hue,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 4}px ${p.hue}`,
            animation: `ember-rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
