import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import waterDragon from "@/assets/water-dragon.jpg";
import { Reveal, SectionHeader } from "./Reveal";

const forms = [
  { n: "I", name: "Water Surface Slash", jp: "水面斬り", desc: "A single, decisive cut — flat as the still surface of a pond." },
  { n: "II", name: "Water Wheel", jp: "水車", desc: "A rolling vertical strike that turns the body into a living wheel." },
  { n: "III", name: "Flowing Dance", jp: "流流舞い", desc: "An unbroken sequence — the blade never stops, only redirects." },
  { n: "IV", name: "Striking Tide", jp: "打ち潮", desc: "Successive rising slashes that crash like coastal waves." },
  { n: "V", name: "Blessed Rain", jp: "干天の慈雨", desc: "A merciful arc, granting peace to the enemy at the moment of death." },
  { n: "X", name: "Constant Flux", jp: "生生流転", desc: "A spiraling dragon — every revolution adds force to the cut." },
  { n: "XI", name: "Dead Calm", jp: "凪", desc: "Stillness so absolute that nothing reaches its center." },
];

export function Breathing() {
  const [active, setActive] = useState(0);
  const form = forms[active];
  return (
    <section id="breathing" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Total Concentration"
          jp="水の呼吸"
          title="Water Breathing"
          caption="Eleven forms taught by Sakonji Urokodaki — each shaped to flow around the enemy like a river finding stone."
        />

        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <ul className="space-y-2">
              {forms.map((f, i) => (
                <li key={f.n}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all ${
                      active === i
                        ? "glass-strong border-primary/40 glow-water"
                        : "border-border/60 hover:border-primary/30 hover:bg-secondary/40"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`font-display text-lg tabular-nums ${
                          active === i ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {f.n.padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{f.name}</span>
                        <span className="font-jp text-xs text-muted-foreground">{f.jp}</span>
                      </span>
                    </span>
                    <span
                      className={`h-px w-6 transition-all ${
                        active === i ? "w-12 bg-primary" : "bg-border"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <div className="glass relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <motion.img
                  key={active}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                  src={waterDragon}
                  alt="Sumi-e water dragon"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={form.n}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5 }}
                  className="relative -mt-24 p-8 md:p-10"
                >
                  <span className="font-display text-xs uppercase tracking-[0.4em] text-primary">
                    Form {form.n} · 第{form.n === "X" ? "拾" : form.n === "XI" ? "拾壱" : form.n}の型
                  </span>
                  <h3 className="mt-2 text-3xl font-semibold md:text-4xl">{form.name}</h3>
                  <p className="font-jp mt-1 text-sm text-primary/80">{form.jp}</p>
                  <p className="mt-5 max-w-md text-muted-foreground">{form.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
