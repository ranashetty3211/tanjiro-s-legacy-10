import { motion } from "framer-motion";
import battle from "@/assets/battle-1.jpg";
import { Reveal, SectionHeader } from "./Reveal";

const battles = [
  { n: "01", name: "Demon on Mount Sagiri", jp: "鷺鳥山", outcome: "Survived. First taste of fear." },
  { n: "02", name: "Swamp Demon", jp: "沼の鬼", outcome: "Vanquished. A girl returned home." },
  { n: "03", name: "Spider Family · Mt. Natagumo", jp: "那田蜘蛛山", outcome: "Father felled. Hashira arrived." },
  { n: "04", name: "Mugen Train · Enmu", jp: "無限列車", outcome: "Awoke. Rengoku's flame remembered." },
  { n: "05", name: "Upper Moon Six · Daki & Gyutaro", jp: "上弦の陸", outcome: "Entertainment District saved." },
  { n: "06", name: "Muzan Kibutsuji", jp: "鬼舞辻無惨", outcome: "Dawn at last." },
];

export function Battles() {
  return (
    <section id="battles" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <img
          src={battle}
          alt=""
          aria-hidden
          className="h-full w-full object-cover [mask-image:radial-gradient(ellipse_at_70%_30%,black_10%,transparent_70%)]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Chronicle"
          jp="戦闘"
          title="Battles in the long night"
          caption="Each scar drew him closer to dawn."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />
          <ul className="space-y-10">
            {battles.map((b, i) => (
              <Reveal key={b.n} delay={i * 0.05}>
                <li
                  className={`relative grid gap-6 md:grid-cols-2 ${
                    i % 2 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass inline-block rounded-2xl p-6 text-left"
                      data-cursor="hover"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-3xl text-primary">{b.n}</span>
                        <span className="font-jp text-xs text-muted-foreground">{b.jp}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">{b.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{b.outcome}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                    <span className="block h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_var(--primary)]" />
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
