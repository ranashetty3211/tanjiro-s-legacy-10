import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";

const quotes = [
  { q: "No matter how many people you may lose, you have no choice but to go on living.", jp: "生きていくしかない" },
  { q: "Set your heart ablaze.", jp: "心を燃やせ" },
  { q: "It's a feeling of gratitude for the world.", jp: "世界への感謝" },
  { q: "I will become the strongest demon slayer in history.", jp: "最強になる" },
];

export function Quotes() {
  return (
    <section id="quotes" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Spoken in passing"
          jp="言葉"
          title="Words he leaves behind"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -4 }}
                className="glass group relative h-full overflow-hidden rounded-3xl p-8 md:p-10"
                data-cursor="hover"
              >
                <div className="absolute -right-6 -top-6 font-display text-[10rem] leading-none text-primary/10 transition-transform duration-700 group-hover:scale-110">
                  &ldquo;
                </div>
                <blockquote className="relative font-display text-2xl leading-snug text-foreground md:text-3xl">
                  {q.q}
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    — Tanjiro Kamado
                  </span>
                  <span className="font-jp text-primary/70">{q.jp}</span>
                </figcaption>
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
