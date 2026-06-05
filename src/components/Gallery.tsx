import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/hero-warrior.jpg";
import { SectionHeader } from "./Reveal";

const items = [
  { src: g1, title: "Beneath the Blossoms", jp: "桜の下", span: "md:col-span-4 md:row-span-2" },
  { src: g2, title: "Nichirin in Rain", jp: "雨夜", span: "md:col-span-3" },
  { src: g3, title: "Lantern Road", jp: "灯籠道", span: "md:col-span-5" },
  { src: g4, title: "Final Selection", jp: "最終選別", span: "md:col-span-8" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          jp="画廊"
          title="Moments between the dark"
          caption="A handful of stills — quiet, fierce, fleeting."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:auto-rows-[200px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 ${it.span}`}
              data-cursor="hover"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-700 group-hover:-translate-y-1">
                <span className="font-jp text-[11px] uppercase tracking-[0.3em] text-primary/80">
                  {it.jp}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold">{it.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
