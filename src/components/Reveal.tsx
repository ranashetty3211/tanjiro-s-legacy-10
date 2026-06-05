import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  jp,
  title,
  caption,
}: {
  eyebrow: string;
  jp: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <Reveal>
        <div className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary/80">
          <span className="h-px w-8 bg-primary/40" />
          {eyebrow}
          <span className="font-jp normal-case tracking-normal text-primary/70">{jp}</span>
          <span className="h-px w-8 bg-primary/40" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {caption && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-balance text-muted-foreground">{caption}</p>
        </Reveal>
      )}
    </div>
  );
}
