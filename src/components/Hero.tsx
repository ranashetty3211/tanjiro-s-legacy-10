import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import katana from "@/assets/katana.png";
import hero from "@/assets/hero-warrior.jpg";
import { WaterScene } from "./WaterScene";
import { Embers } from "./Embers";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const katanaRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const katanaY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      className="noise relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Background 3D */}
      <div className="absolute inset-0 z-0 opacity-70">
        <WaterScene />
      </div>

      {/* Mountain mist overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_30%,transparent_0%,var(--background)_75%)]" />

      <Embers count={50} />

      {/* Hero portrait */}
      <motion.img
        src={hero}
        alt="Tanjiro Kamado portrait"
        width={1080}
        height={1600}
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] mx-auto h-[88vh] w-auto max-w-none object-contain object-bottom opacity-90 [mask-image:linear-gradient(to_bottom,black_50%,transparent_98%)]"
      />

      {/* Decorative katana — sits above navbar visual line */}
      <motion.div
        style={{ rotate: katanaRotate, y: katanaY }}
        className="absolute left-1/2 top-[6.5rem] z-[3] w-[120vw] max-w-[1600px] -translate-x-1/2"
      >
        <div className="relative">
          <img
            src={katana}
            alt=""
            aria-hidden
            className="w-full select-none object-contain mix-blend-screen drop-shadow-[0_20px_40px_rgba(125,211,252,0.25)]"
          />
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent blur-sm" />
        </div>
      </motion.div>

      {/* Copy */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-jp mb-5 text-sm tracking-[0.4em] text-primary/80"
        >
          竈門 炭治郎 — Demon Slayer
        </motion.span>

        <h1 className="font-display text-[clamp(2.6rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-tight">
          {"Tanjiro".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          <br />
          <span className="text-gradient-water">Kamado</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-7 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          A son who carries the weight of fallen kin. A blade that breathes
          like water. Walk beside him through the slow dark before dawn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#story"
            className="group relative overflow-hidden rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Begin the Journey</span>
            <span className="absolute inset-0 bg-gradient-to-r from-water-glow to-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#breathing"
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold tracking-wider text-foreground transition-colors hover:bg-secondary"
          >
            Breathing Styles
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
      >
        <span className="block animate-pulse-glow">scroll</span>
      </motion.div>
    </section>
  );
}
