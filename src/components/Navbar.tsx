import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Story", jp: "物語", href: "#story" },
  { label: "Breathing", jp: "呼吸", href: "#breathing" },
  { label: "Gallery", jp: "画廊", href: "#gallery" },
  { label: "Quotes", jp: "言葉", href: "#quotes" },
  { label: "Battles", jp: "戦闘", href: "#battles" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "scale-95" : ""
      }`}
    >
      <div className="glass-strong relative flex items-center gap-1 rounded-full px-2 py-2 shadow-elegant md:gap-2 md:px-3">
        <a
          href="#top"
          className="ml-2 mr-1 flex items-center gap-2 px-3 py-1.5"
          aria-label="Home"
        >
          <span className="font-display text-lg tracking-widest text-foreground">
            TANJIRO
          </span>
          <span className="font-jp text-xs text-primary/80">炭治郎</span>
        </a>
        <div className="hidden h-6 w-px bg-border md:block" />
        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="font-jp text-[0.65rem] text-primary/60 transition-colors group-hover:text-primary">
                  {l.jp}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#battles"
          className="ml-1 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-transform hover:scale-[1.03]"
        >
          Enter
        </a>
      </div>
    </motion.nav>
  );
}
