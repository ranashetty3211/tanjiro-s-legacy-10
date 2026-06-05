import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mountains from "@/assets/mountains.jpg";
import { Reveal, SectionHeader } from "./Reveal";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden py-32">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <img
          src={mountains}
          alt=""
          aria-hidden
          className="h-full w-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Origin"
          jp="物語"
          title="A quiet boy turned blade against the night"
          caption="Snow lay heavy on the rooftop the morning he came home to silence. From that day, kindness became his weapon — and the moon his witness."
        />

        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="glass rounded-3xl p-8 md:p-10">
              <p className="text-lg leading-relaxed text-foreground/90">
                Born the eldest son of a charcoal-burning family in the
                mountains, Tanjiro lived a life as warm as the embers his
                father coaxed from cold wood. One night, that warmth was
                taken — and only his sister, Nezuko, remained.
              </p>
              <div className="hairline my-8" />
              <p className="text-base leading-relaxed text-muted-foreground">
                He swore two oaths beneath the falling snow: to find a cure
                for what she had become, and to face the one who had emptied
                his home. The blade he chose breathes like water — yielding,
                relentless, kind.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5">
            <div className="space-y-4">
              {[
                { label: "Age", v: "16", jp: "歳" },
                { label: "Birthplace", v: "Mt. Kumotori", jp: "雲取山" },
                { label: "Sword", v: "Black Nichirin", jp: "日輪刀" },
                { label: "Breathing", v: "Water → Sun", jp: "水・日" },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="glass flex items-center justify-between rounded-2xl px-6 py-4"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {row.label}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-lg font-semibold">{row.v}</span>
                    <span className="font-jp text-sm text-primary/70">{row.jp}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
